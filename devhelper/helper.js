import { Satyrn } from "../src/index.js";
// sample.analysisSpace._self = sample.analysisSpace[null]
// delete sample.analysisSpace[null]
import {sampleAnalysisOutputs, sampleRingFromAPI} from "./scalesRing.js";


const satyrn = new Satyrn(sampleRingFromAPI.defaultEntity, sampleRingFromAPI.operations, sampleRingFromAPI.analysisSpace)
const plans = satyrn.planManager.generate()

let planPayload = `<h2>Ring Info</h2>
TARGET ENTITY: ${satyrn.planManager.targetEntity}
<br>
TOTAL PLAN COUNT: ${plans.length}
<br>
<h2>Plans</h2>`

const planTemplate = (plan) => `<li style="margin-bottom: 30px; display:block; padding-bottom: 30px; border-bottom: 1px solid #aaa;">
  STATEMENT: ${plan.statement}<br> PLAN: ${JSON.stringify(plan.plan)} <br/> PARAMS: ${JSON.stringify(plan.parameters)}
</li>`

plans.forEach(plan => {
  planPayload += planTemplate(plan)
})

document.getElementById("planview").innerHTML = planPayload

// now do the analysis
let analysisPayload = `<h2>Sample Analysis Outputs</h2>`

const analysisTemplate = (tname, ar) => `<li style="margin-bottom: 30px; display:block; padding-bottom: 30px; border-bottom: 1px solid #aaa;">
  TEST_NAME: ${tname} <br> SEARCH FILTERS: ${JSON.stringify(ar.search_opts)}<br> PLAN: ${JSON.stringify(ar.analysis_opts)} <br/> RESULTS: ${JSON.stringify(ar.expected_results)} <br/> RESULTS LANGUAGE: ${satyrn.responseManager.generate(ar.search_opts, ar.analysis_opts, ar.expected_results)} <br/> RESULTS FORMAT: ${JSON.stringify(satyrn.responseManager.format(ar.analysis_opts, ar.expected_results))}
</li>`

Object.entries(sampleAnalysisOutputs).forEach(ao => {
  analysisPayload += analysisTemplate(ao[0], ao[1])
})

document.getElementById("analysisView").innerHTML = analysisPayload
