// KNOWN TODOS:
// - multi-hop relationship chaining
// - date granularity protections per-attribute
// - implement distribution, correlation, percentage, and oneHot plan generation and results management (and remove the generateMocks hack)

const generateMocks = (primaryRing) => [
  {
    statement: "Distribution of contribution amount across party grouped by in-state status",
    parameters: [
      { // this parameter type is to select from an enum of available aggregation types
        type: "enum",
        slot: ["target", "op"], // key path steps within plan
        options: ["sum", "average"], // if plan.target.field is an id, then "count" would be here (maybe only option/default? @Andong: is None an option here?) -- in any event, this is the list of enum options to display
        prompt: "How should contribution amounts be aggregated?",
        allowMultiple: false
      }
    ],
    plan: {
      op: "distribution",
      target: {
        entity: "Contribution",
        field: "amount",
        op: null // this is satisfied by a parameter, see parameters key
      },
      over: {
        entity: "Party",
        field: "id"
      },
      groupBy: [{
        entity: "Contribution",
        field: "inState"
      }],
      rings: [primaryRing],
      relationships: ["ContribToCandidacy", "CandidacyToParty"]
    }
  },
  {
    statement: "Correlation between contribution amount and contribution recipient",
    parameters: [
      { // this parameter type is to select from the set of possible values of the target attribute
        type: "string",
        slot: ["target", 1, "numerator"], // key path steps within plan -- in this case, list entry
        options: { // given type == "value", the options here point to an entity.attribute to pull possible values from, just like a filter input -- in this example, it's a bool but in other cases this could be a string e.g. judge.name with autocomplete
          entity: "Contribution",
          attribute: "contributionRecipient",
        },
        prompt: "Which recipient(s) should be used to check for a correlation?",
        allowMultiple: true // could be a multiselect "and" or "or"
      }
    ],
    plan: {
      op: "correlation",
      target: [
        {
          entity: "Contribution",
          field: "amount" // since this is a numeric, we don't need a numerator
        },
        {
          entity: "Contribution",
          field: "contributionRecipient", // since this is a non-numeric, we need a numerator(s) selection via parameters
          numerator: null
        }
      ],
      grouping: {
        entity: "Contribution",
        field: "id"
      },
      rings: [primaryRing],
      relationships: []
    }
  },
  {
    statement: "Correlation between contribution amount and contribution in-state status",
    parameters: [
      { // this parameter type is to select from the set of possible values of the target attribute
        type: "boolean",
        slot: ["target", 1, "numerator"], // key path steps within plan -- in this case, list entry
        options: { // given type == "value", the options here point to an entity.attribute to pull possible values from, just like a filter input -- in this example, it's a bool but in other cases this could be a string e.g. judge.name with autocomplete
          entity: "Contribution",
          attribute: "inState",
        },
        prompt: "What in-state status value should be used to check for a correlation?",
        allowMultiple: true // could be a multiselect "and" or "or"
      }
    ],
    plan: {
      op: "correlation",
      target: [ // @Andong: I moved the target and target2 into one list of targets (bonus side effect is this scales to more than two as we go forward), and put the numerator in the relevant object where necessary -- cool?
        {
          entity: "Contribution",
          field: "amount" // since this is a numeric, we don't need a numerator
        },
        {
          entity: "Contribution",
          field: "inState", // since this is a non-numeric, we need a numerator(s) selection via parameters
          numerator: null
        }
      ],
      grouping: { // the grouping is implied by the fact that both attrs are attached to the same entity type -- if two entities involved, this setting would become a parameter (@Andong, gutcheck on that?)
        entity: "Contribution",
        field: "id"
      },
      rings: [primaryRing],
      relationships: []
    }
  }
]


class Satyrn {
  constructor(targetEntity, operations, analysisSpace, primaryRing) {
    this.targetEntity = targetEntity
    this.operations = operations
    this.analysisSpace = analysisSpace
    this.primaryRing = primaryRing
    this.planManager = new PlanManager(targetEntity, operations, analysisSpace, primaryRing)
    this.responseManager = new ResponseManager(this.planManager)
  }
}

class ResponseManager {
  constructor(planManager) {
    this.planManager = planManager
  }
  generate = (searchFilters, plan, results) => {
    // generates the desc for an answered question
    // start with the statement from the dropdown
    let desc = this.planManager.expressPlan(plan)
    if (desc === "") return desc
    // add filter info
    if (!Object.keys(searchFilters).length) {
      desc += " across all available data"
    } else {
      desc += " for data entries in which "

      // this is going to be a bit of a hack for now as searchFilters in results
      // apparently don't include the entity they're housed on
      const attrExpressions = Object.assign({}, ...Object.entries(this.planManager.nicenameMap.fields).map(entry => entry[1]))

      Object.entries(searchFilters).forEach((filt, idx) => {
        if (idx != 0) desc += " and "
        desc += `<em>${attrExpressions[filt[0]][0]}</em> contains <em>"${filt[1]}"</em>`
      })
    }

    // also, append the results if there won't be any further info...
    if (results.results.length === 0) {
      desc += ` couldn't be generated.`
    } else if (results.results.length === 1) {
      const fresult = (isNaN(Number(results.results[0]))) ? results.units.results[0] : Number(results.results[0]).toLocaleString()
      desc += ` is ${fresult}`
      if (results.units?.results && !["count", "averageCount"].includes(plan.op)) desc += ` ${results.units.results[0]}`
      desc += "."
    } else {
      desc += ":"
    }

    return desc
  }
  format = (plan, results) => {
    // return null if there is no data to render because the generate() statement is covering it...
    if (results.results.length < 2) return null
    // okay, first check to see if the results have ids + references that need to be merged...
    const merged = this.mergeIdsAndReferences(results.results, results.fieldNames)
    const cleanResults = merged[0]
    const cleanFields = merged[1]

    let formattedResults = []
    if (cleanResults[0].length === 2) {
      // simple list of tuples, assume [label, value]
      formattedResults = cleanResults.map(entry => {return {label: entry[0], value: entry[1]}})
    } else if (cleanResults[0].length === 3) {
      // list of 3 = assume [series/group, label, value]
      let resultsMap = {}
      cleanResults.forEach(entry => {
        if (!(entry[0] in resultsMap)) resultsMap[entry[0]] = []
        resultsMap[entry[0]].push({label: entry[1], value: entry[2]})
      })
      formattedResults = Object.entries(resultsMap).map(entry => {return {series: entry[0], data: entry[1]}})
    } else {
      // (results.results[0].length > 3) only happens with multi group bys
      // come back and TODO
      debugger
      return null
    }

    return {
      data: formattedResults,
      visType: this.pickVisType(plan, formattedResults)
    }
  }
  mergeIdsAndReferences = (results, fields) => {
    // checks results[items] of 3 or more to see if two of the keys are really and id and reference for the same thing
    // if found, merge them...
    // results here is a list of tuples and fields is a list of objects of metadata
    if (fields.length < 3) return [results, fields]
    // do we have to merge?
    // how many ids?
    const idIndexes = fields.map(field => field.field).map((e, i) => e === "id" ? i : '').filter(String)
    if (idIndexes.length === 0) return [results, fields]
    // if ids, how many references?
    const refIndexes = fields.map(field => field.field).map((e, i) => e === "reference" ? i : '').filter(String)
    if (refIndexes.length === 0) return [results, fields]

    // for every id index, check if the next thing is a refIndex
    const matchedIds = idIndexes.filter((indx, i) => (refIndexes[i] === indx+1))
    if (matchedIds.length === 0) return [results, fields]

    // okay, so we have some merging to do in both all results entries + in fields
    const newResults = results.map(result => {
      matchedIds.forEach(idx => {
        const merger = result.slice(idx, idx+2)
        const replacer = `${merger[1]} (${merger[0]})`
        result[idx] = replacer
        result[idx+1] = "_PLACEHOLDER_"
      })
      return result.filter(step => step !== "_PLACEHOLDER_")
    })

    matchedIds.forEach(idx => {
      const merger = fields.slice(idx, idx+2)
      merger[1].field = "reference+id"
      fields[idx] = merger[1]
      fields[idx+1] = "_PLACEHOLDER_"
    })

    fields = fields.filter(step => step !== "_PLACEHOLDER_")

    return [newResults, fields]
  }

  pickVisType = (plan, formattedResults) => {
    // options currently are bar, line and multiline...maybe groupedBar, stackedBar, scatter, geoMap and more later?
    // line or multiline if timeseries is present...
    if (plan.timeSeries) {
      // is there a group and data key in the entries? it's multiline
      if (formattedResults[0].series) return "multiline"
      return "line"
    }
    if (formattedResults[0].series) return "groupedBar"
    return "bar"
  }
}

class PlanManager {
  constructor(targetEntity, operations, analysisSpace, primaryRing=null) {
    this.targetEntity = targetEntity
    this.operations = operations
    this.analysisSpace = analysisSpace
    this.primaryRing = primaryRing
    this.plans = []
    this.statements = []
    this.templateTokenMatcher = /{([^}]+)}/g
    this.nicenameMap = this.genNicenameMap(operations)
  }
  generate = (stub=null, stubType=null) => {
    let plans = []
    if (stub) {
      // shortcut full gen and just populate plans based on a plan stub
      // TODO
    } else {
      // full plan gen
      const ops = Object.keys(this.operations)
      Object.keys(this.analysisSpace).forEach(branch => {
        plans = [...plans, ...this.buildPlansFor(branch, ops, this.analysisSpace[branch], (branch == "_self") ? null : branch)]
      })
    }

    // plans should now be a big list of json objects
    // now populate the corresponding statements
    this.plans = plans.map(plan => {
      // pull the params up out of base plan...
      const params = plan._parameters
      delete plan._parameters
      let fullPlan = {
        statement: this.expressPlan(plan),
        plan: plan
      }
      if (params) fullPlan.parameters = params
      return fullPlan
    })

    // TEMP HACK: add some additional more complex plans during dev
    // TODO: pull out once stuff above is working better
    this.plans = [...this.plans, ...generateMocks()]

    return this.plans
  }
  buildPlansFor = (branch, ops, branchInfo, relationship=null) => {
    const attrs = branchInfo.attributes
    let basePlans = attrs.map(attr => {
      const basePlanTemplate = {
        target: {
          entity: branchInfo.entity,
          field: attr.targetField,
        },
        relationships: (relationship) ? [relationship] : [],
        _parameters: [] // gets plucked up a level for FE on the way out the door
      }
      let planSet = []
      ops.forEach(op => {
        if (op == "None") return;
        const requirements = this.operations[op].required
        if (!(requirements?.target?.validInputs || []).includes(attr.type)) return;

        // are there "per" fields to add?
        if (Object.keys(requirements).includes("per")) {
          // per fields always use relationships
          if (!relationship) {
            // means this is the target entity
            // iterate over the rest of the this.analysisSpace keys besides self
            // if relationship type makes sense (e.g. "m2m" or "m2o"), then add a plan
            Object.entries(this.analysisSpace)
              .filter(entry => !(entry[0] === "_self"))
              .filter(entry => ["m2o","m2m"].includes(entry[1].relType))
              .forEach(entry => {
                planSet.push(this._generateSpecialPlan("per", basePlanTemplate, op, entry))
              })
          } else {
            // means this is a related entity to the target
            // only tie this back to _self (the target)
            // but only if relationship type makes sense the other way (e.g. "m2m" or "o2m")
            Object.entries(this.analysisSpace)
              .filter(entry => (entry[0] === "_self"))
              .filter(entry => ["o2m","m2m"].includes(entry[1].relType))
              .forEach(entry => {
                planSet.push(this._generateSpecialPlan("per", basePlanTemplate, op, entry))
              })
          }
        } else {
          // just a one-off plan...finish/add it

          // next one is a temp hack -- skip ops that require more than a single target and/or parameters
          // have to deal with percentage/correlations, average counts, etc
          if (["percentage", "distribution", "oneHot"].includes(op)) return;

          let newPlan = JSON.parse(JSON.stringify(basePlanTemplate))
          newPlan.op = op
          planSet.push(newPlan)
        }
      })

      // manage ops with additional requirements
      // TODO

      // now add the timeframes
      // do we have any relevant times we could use? add them in for each plan!
      planSet = [...planSet, ...planSet.map(ps => {
        const planTemplate = JSON.parse(JSON.stringify(ps))
        let timeframePlans = []
        // First, are we "on" the targetEntity or a related entity? get the details
        const asDetails = (this.targetEntity === ps.target.entity) ?
          ["_self", this.analysisSpace["_self"]] : Object.entries(this.analysisSpace).find(asPair => asPair[1].entity === ps.target.entity)

        const defaultTimeframeOptions = Object.entries(this.nicenameMap.timeframes).map(tfp => {
          return {label: tfp[1], value: tfp[0]}
        })

        if (asDetails[0] === "_self" || !["m2o", "o2o"].includes(asDetails[1].relType)) {
          // pluck timeframes on either related entity OR self (depending on above)
          timeframePlans = [...timeframePlans, ...this._generateTimeframesFor(this.targetEntity, asDetails[1].attributes, planTemplate, defaultTimeframeOptions)]
        }
        return timeframePlans
      }).flat()]

      // now add the groupings
      planSet = [...planSet, ...planSet.map(ps => {
        let groupedPlans = []
        // try {
        const planTemplate = JSON.parse(JSON.stringify(ps))
        // } catch (error) {
        //   debugger
        // }
        // What can the targetEntity be grouped by?
        // First, are we "on" the targetEntity or a related entity? get the details
        // if (!ps.target) debugger
        const asDetails = (this.targetEntity === ps.target.entity) ?
          ["_self", this.analysisSpace["_self"]] : Object.entries(this.analysisSpace).find(asPair => asPair[1].entity === ps.target.entity)
        // if not _self, what's the relationship to the target?
        // if m2o, direct group bys (e.g. contributors grouped by contribution) don't make sense
        // TODO: should this be permutations of all relationships across all entities? if so, we're going to need to rejigger analysisSpace
        if (asDetails[0] != "_self") {
          if (!["m2o", "o2o"].includes(asDetails[1].relType)) {
            // make a plan copy and group by the related entity + id
            groupedPlans.push({...planTemplate, groupBy: [{
              entity: this.targetEntity,
              field: "id"
            }]})
          }
        }

        if (asDetails[0] === "_self" || !["m2o", "o2o"].includes(asDetails[1].relType)) {
          // pluck enums / booleans on either related entity OR self (depending on above)
          // TODO: strings? numbers? buckets?
          groupedPlans = [...groupedPlans, ...this._generateGroupsFor(asDetails[1].entity, asDetails[1].attributes, planTemplate)]
        }

        return groupedPlans
      }).flat()]
      return planSet
    }).flat()
    return basePlans
  }

  _generateGroupsFor = (entity, attributes, planTemplate, groupers=["boolean", "enum"]) =>
    attributes.filter(attr => groupers.includes(attr.type))
      .map(attr => {
        return {...planTemplate, groupBy: [{
          entity: entity,
          field: attr.targetField
        }]}
      })

  _generateTimeframesFor = (entity, attributes, planTemplate, defaultTimeframeOptions) =>
    attributes.filter(attr => ["datetime", "date", "date:year"].includes(attr.type)) // TODO: others?
      .map(attr => {
          let updatedPlan = {
            ...JSON.parse(JSON.stringify(planTemplate)),
            timeSeries: {
              entity: entity,
              field: attr.targetField,
              dateTransform: "year" // year is the default, but can get changed in followup question
            }}

          let tfOptions = null
          if (attr.type == "date:year") tfOptions = [{label: "year-over-year", value: "year"}]
          if (attr.type == "date:month") tfOptions = [{label: "year-over-year", value: "year"}, {label: "month-over-month", value: "month"}]
          // TODO: others?
          if (!tfOptions) tfOptions = defaultTimeframeOptions

          updatedPlan._parameters.push({
            type: "enum",
            options: tfOptions,
            slot: ["timeSeries", "dateTransform"],
            prompt: "At what time granularity?",
            allowMultiple: false
          })

          return updatedPlan
        }).flat()

  _generateSpecialPlan = (planType, basePlanTemplate, op, branch) => {
    let newPlan = JSON.parse(JSON.stringify(basePlanTemplate))
    newPlan.op = op
    if (planType == "per") {
      newPlan.per = {
        "field": "id",
        "entity": branch[1].entity
      }
      newPlan.relationships.push(branch[0])
    } else {
      // others?
    }
    return newPlan
  }

  expressPlan = (plan) => {
    let opTemplate = this.nicenameMap.operations[plan.op]
    const pluralPicker = (["count", "averageCount", "averageSum"].includes(plan.op)) ? 1 : 0;

    if (!opTemplate) return null;
    [...opTemplate.matchAll(this.templateTokenMatcher)].forEach(match => {
      if (match[1] == "target") {
        opTemplate = opTemplate.replace(match[0], this.nicenameMap.fields[plan.target.entity][plan.target.field][pluralPicker])
      } else if (match[1] == "per") {
        opTemplate = opTemplate.replace(match[0], this.nicenameMap.fields[plan.per.entity][plan.per.field][0])
      } else {
        console.log(match[1])
        // TODO: implementation for other types of slot-fillers (e.g. plans with "per" slots)
      }
    })

    // do we have timeframes or group bys to express?

    // note: timeframes have been moved to follow-up questions, so timeframe is always "over time" now
    if (plan.timeSeries) {
      const ts = plan.timeSeries
      if (plan.target.entity === ts.entity) {
        opTemplate = `${opTemplate} over time (by ${this.nicenameMap.fields[ts.entity][ts.field][0]})`
      } else {
        opTemplate = `${opTemplate} over time (by ${ts.entity}'s ${this.nicenameMap.fields[ts.entity][ts.field][0]})`
      }
    }

    if (plan.groupBy) {
      // might be multiple group bys so chain them...
      const groupBys = plan.groupBy.map(gb => {
        let gbStatement = `grouped by ${this.nicenameMap.fields[gb.entity][gb.field][0]}`
        if (gb.entity !== plan.target.entity) {
          // maybe mention the fact the groupBy is across a different entity?
          let entityMentionTest = true
          const entityName = this.nicenameMap.fields[gb.entity].id[0]
          // unless...
          // a) that's already been stated (because it's already "group by <ENTITY NAME>")
          if (gb.field === "id") entityMentionTest = false
          // b) the "per" field involves the second entity (?)
          if (gb.entity === plan.per?.entity) entityMentionTest = false
          // c) the nicename of the attribute already mentions the entity
          if (gbStatement.toLowerCase().search(entityName.toLowerCase())) entityMentionTest = false

          if (entityMentionTest) gbStatement += ` (of ${entityName})`
        }
      }).join(" ")
      opTemplate = `${opTemplate} ${groupBys}`
    }
    return opTemplate
  }
  genNicenameMap = (operations) => {
    const operationsNicenames = Object.fromEntries(Object.keys(operations).map(op =>
      [op, operations[op].template]
    ))

    let fieldNicenames = Object.fromEntries(Object.entries(this.analysisSpace).map(branch =>
        [
          branch[1].entity, Object.fromEntries(
            [...branch[1].attributes.map(attr =>
                [attr.targetField, this.treatNicenames(attr.nicename)]),
              ["id", this.treatNicenames(branch[1].nicename)]]
          )
        ]
      )
    )

    const timeframes = {
      day: "day-over-day",
      month: "month-over-month",
      year: "year-over-year",
      dayofweek: "across weekdays",
      onlymonth: "across months (over all years)",
      onlyday: "across days days (over all years)"
    }

    return {
      operations: operationsNicenames,
      fields: fieldNicenames,
      timeframes: timeframes
    }
  }
  treatNicenames = (nicenames) => {
    if (typeof nicenames == "string") return [nicenames.toLowerCase(), nicenames.toLowerCase()]
    const firstNN = (nicenames[0] || "").toLowerCase()
    return [firstNN, (nicenames[1] || firstNN).toLowerCase()]
  }
}

export {Satyrn};
