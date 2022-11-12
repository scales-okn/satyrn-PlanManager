const sampleRingFromAPI = {
    "targetEntities": [
        "Case",
        "Counsel",
        "Party",
        "Judge",
        "Court",
        "Count"
    ],
    "defaultEntity": "Case",
    "filters": [
        [
            "case_id",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Case ID",
                "desc": null
            }
        ],
        [
            "ucid",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "ucid",
                "desc": null
            }
        ],
        [
            "case_pacer_id",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Case Pacer ID",
                "desc": null
            }
        ],
        [
            "filing_date",
            {
                "autocomplete": true,
                "type": "date",
                "allowMultiple": false,
                "nicename": "Filing Date",
                "desc": null
            }
        ],
        [
            "terminating_date",
            {
                "autocomplete": true,
                "type": "date",
                "allowMultiple": false,
                "nicename": "Terminating Date",
                "desc": null
            }
        ],
        [
            "year",
            {
                "autocomplete": true,
                "type": "date:year",
                "allowMultiple": false,
                "nicename": "Year",
                "desc": null
            }
        ],
        [
            "case_name",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Case Name",
                "desc": null
            }
        ],
        [
            "jury_demand",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Jury Demand",
                "desc": null
            }
        ],
        [
            "cause",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Cause",
                "desc": null
            }
        ],
        [
            "jurisdiction",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Jurisdiction",
                "desc": null
            }
        ],
        [
            "judge",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Judge",
                "desc": null
            }
        ],
        [
            "case_status",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Case Status",
                "desc": null
            }
        ],
        [
            "case_type",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Case Type",
                "desc": null
            }
        ],
        [
            "city_name",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "city name",
                "desc": null
            }
        ],
        [
            "case_NOS",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Nature of Suit",
                "desc": null
            }
        ],
        [
            "docket_text",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Docket Text",
                "desc": null
            }
        ],
        [
            "ifp_label",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "ifp Label",
                "desc": null
            }
        ],
        [
            "court_name",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Court Name",
                "desc": null
            }
        ],
        [
            "caseHTML",
            {
                "autocomplete": true,
                "type": "string",
                "allowMultiple": false,
                "nicename": "Docket html",
                "desc": null
            }
        ]
    ],
    "columns": [
        {
            "key": "case_id",
            "nicename": "Case ID",
            "width": "14.285714285714286%",
            "sortable": true
        },
        {
            "key": "filing_date",
            "nicename": "Filing Date",
            "width": "14.285714285714286%",
            "sortable": true
        },
        {
            "key": "terminating_date",
            "nicename": "Terminating Date",
            "width": "14.285714285714286%",
            "sortable": true
        },
        {
            "key": "case_name",
            "nicename": "Case Name",
            "width": "14.285714285714286%",
            "sortable": true
        },
        {
            "key": "cause",
            "nicename": "Cause",
            "width": "14.285714285714286%",
            "sortable": true
        },
        {
            "key": "jurisdiction",
            "nicename": "Jurisdiction",
            "width": "14.285714285714286%",
            "sortable": true
        },
        {
            "key": "court_name",
            "nicename": "Court Name",
            "width": "14.285714285714286%",
            "sortable": true
        }
    ],
    "defaultSort": {
        "key": "case_id",
        "direction": "desc"
    },
    "fieldUnits": {},
    "analysisSpace": {
        "_self": {
            "entity": "Case",
            "nicename": [
                "Case",
                "Case"
            ],
            "relType": "o2o",
            "attributes": [
                {
                    "type": "float",
                    "nicename": [
                        "Monetary Demand",
                        "Monetary Demands"
                    ],
                    "unit": [
                        "dollar",
                        "dollars"
                    ],
                    "targetField": "monetary_demand"
                },
                {
                    "type": "integer",
                    "nicename": [
                        "Billable Page",
                        "Billable Pages"
                    ],
                    "unit": null,
                    "targetField": "billable_pages"
                },
                {
                    "type": "date",
                    "nicename": [
                        "Filing Date",
                        "Filing Dates"
                    ],
                    "unit": null,
                    "targetField": "filing_date"
                },
                {
                    "type": "date",
                    "nicename": [
                        "Terminating Date",
                        "Terminating Dates"
                    ],
                    "unit": null,
                    "targetField": "terminating_date"
                },
                {
                    "type": "date:year",
                    "nicename": [
                        "Year",
                        "Years"
                    ],
                    "unit": null,
                    "targetField": "year"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Jury Demand",
                        "Jury Demands"
                    ],
                    "unit": null,
                    "targetField": "jury_demand"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Cause",
                        "Causes"
                    ],
                    "unit": null,
                    "targetField": "cause"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Jurisdiction",
                        "Jurisdictions"
                    ],
                    "unit": null,
                    "targetField": "jurisdiction"
                },
                {
                    "type": "integer",
                    "nicename": [
                        "Case Duration",
                        "Case Durations"
                    ],
                    "unit": null,
                    "targetField": "case_duration"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Judge",
                        "Judges"
                    ],
                    "unit": null,
                    "targetField": "judge"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Case Status",
                        "Case Status"
                    ],
                    "unit": null,
                    "targetField": "case_status"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Case Type",
                        "Case Types"
                    ],
                    "unit": null,
                    "targetField": "case_type"
                },
                {
                    "type": "string",
                    "nicename": [
                        "city name",
                        "city names"
                    ],
                    "unit": null,
                    "targetField": "city_name"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Nature of Suit",
                        "Nature of Suits"
                    ],
                    "unit": null,
                    "targetField": "case_NOS"
                },
                {
                    "type": "string",
                    "nicename": [
                        "ifp Label",
                        "ifp Labels"
                    ],
                    "unit": null,
                    "targetField": "ifp_label"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Court Name",
                        "Court Names"
                    ],
                    "unit": null,
                    "targetField": "court_name"
                },
                {
                    "type": "id",
                    "nicename": true,
                    "unit": "Case",
                    "targetField": "id"
                }
            ]
        },
        "CaseToJudge": {
            "entity": "Judge",
            "nicename": [
                "Judge",
                "Judge"
            ],
            "relType": "m2m",
            "attributes": [
                {
                    "type": "id",
                    "nicename": false,
                    "unit": "Judge",
                    "targetField": "id"
                }
            ]
        },
        "CaseToCounsel": {
            "entity": "Counsel",
            "nicename": [
                "Counsel",
                "Counsel"
            ],
            "relType": "o2m",
            "attributes": [
                {
                    "type": "string",
                    "nicename": [
                        "Office Name",
                        "Office Names"
                    ],
                    "unit": null,
                    "targetField": "office_name"
                },
                {
                    "type": "boolean",
                    "nicename": [
                        "Is Lead attorney",
                        "Are Lead attorneys"
                    ],
                    "unit": null,
                    "targetField": "is_lead_attorney"
                },
                {
                    "type": "boolean",
                    "nicename": [
                        "Is Pro Hac Vice",
                        "Are Pro Hac Vice"
                    ],
                    "unit": null,
                    "targetField": "is_pro_hac_vice"
                },
                {
                    "type": "boolean",
                    "nicename": [
                        "Is Notice attorney",
                        "Are Notice attorneys"
                    ],
                    "unit": null,
                    "targetField": "is_notice_attorney"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Party Name",
                        "Party Names"
                    ],
                    "unit": null,
                    "targetField": "party_name"
                },
                {
                    "type": "string",
                    "nicename": [
                        "designation Name",
                        "designation Names"
                    ],
                    "unit": null,
                    "targetField": "designation_name"
                },
                {
                    "type": "string",
                    "nicename": [
                        "Bar Status",
                        "Bar Statuses"
                    ],
                    "unit": null,
                    "targetField": "bar_status"
                },
                {
                    "type": "id",
                    "nicename": false,
                    "unit": "Counsel",
                    "targetField": "id"
                }
            ]
        },
        "CaseToCourt": {
            "entity": "Court",
            "nicename": [
                "Court",
                "Court"
            ],
            "relType": "o2m",
            "attributes": [
                {
                    "type": "string",
                    "nicename": [
                        "Jurisdiction",
                        "Jurisdictions"
                    ],
                    "unit": null,
                    "targetField": "jurisdiction"
                },
                {
                    "type": "string",
                    "nicename": [
                        "State Name",
                        "State Names"
                    ],
                    "unit": null,
                    "targetField": "state name"
                },
                {
                    "type": "id",
                    "nicename": false,
                    "unit": "Court",
                    "targetField": "id"
                }
            ]
        },
        "CountsToCases": {
            "entity": "Count",
            "nicename": [
                "Count",
                "Count"
            ],
            "relType": "m2o",
            "attributes": [
                {
                    "type": "string",
                    "nicename": [
                        "Party Name",
                        "Party Names"
                    ],
                    "unit": null,
                    "targetField": "party_name"
                },
                {
                    "type": "string",
                    "nicename": [
                        "disposition",
                        "dispositions"
                    ],
                    "unit": null,
                    "targetField": "disposition"
                },
                {
                    "type": "boolean",
                    "nicename": [
                        "is pending?",
                        "are pending?"
                    ],
                    "unit": null,
                    "targetField": "is_pending"
                },
                {
                    "type": "boolean",
                    "nicename": [
                        "is terminated?",
                        "are terminated?"
                    ],
                    "unit": null,
                    "targetField": "is_terminated"
                },
                {
                    "type": "id",
                    "nicename": false,
                    "unit": "Count",
                    "targetField": "id"
                }
            ]
        }
    },
    "includesRenderer": true,
    "targetModelName": "Case",
    "operations": {
        "average": {
            "required": {
                "target": {
                    "validInputs": [
                        "integer",
                        "float"
                    ],
                    "fieldType": "target"
                }
            },
            "template": "Average {target}",
            "units": "unchanged",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "count": {
            "required": {
                "target": {
                    "validInputs": [
                        "id"
                    ],
                    "fieldType": "target"
                }
            },
            "template": "Count of unique {target}",
            "units": "unchanged",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "sum": {
            "required": {
                "target": {
                    "validInputs": [
                        "integer",
                        "float"
                    ],
                    "fieldType": "target"
                }
            },
            "template": "Total {target}",
            "units": "unchanged",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "min": {
            "required": {
                "target": {
                    "validInputs": [
                        "integer",
                        "float"
                    ],
                    "fieldType": "target"
                }
            },
            "template": "Min of {target}",
            "units": "unchanged",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "max": {
            "required": {
                "target": {
                    "validInputs": [
                        "integer",
                        "float"
                    ],
                    "fieldType": "target"
                }
            },
            "template": "Max of {target}",
            "units": "unchanged",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "median": {
            "required": {
                "target": {
                    "validInputs": [
                        "integer",
                        "float"
                    ],
                    "fieldType": "target"
                }
            },
            "template": "Median {target}",
            "units": "unchanged",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "averageCount": {
            "required": {
                "target": {
                    "validInputs": [
                        "id"
                    ],
                    "fieldType": "target"
                },
                "per": {
                    "validInputs": [
                        "id"
                    ],
                    "fieldType": "group"
                }
            },
            "template": "Average Count of {target} per {per}",
            "units": "target/per",
            "type": "recursive",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "averageSum": {
            "required": {
                "target": {
                    "validInputs": [
                        "float",
                        "integer"
                    ],
                    "fieldType": "target"
                },
                "per": {
                    "validInputs": [
                        "id"
                    ],
                    "fieldType": "group"
                }
            },
            "template": "Average Sum of {target} per {per}",
            "units": "target/per",
            "type": "recursive",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "percentage": {
            "required": {
                "target": {
                    "validInputs": [
                        "string",
                        "boolean"
                    ],
                    "fieldType": "target",
                    "parameters": [
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "boolean",
                                "string"
                            ],
                            "options": "any",
                            "allowMultiple": true
                        }
                    ]
                }
            },
            "template": "Percentage of {target}",
            "units": "percentage",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "oneHot": {
            "required": {
                "target": {
                    "validInputs": [
                        "string",
                        "boolean"
                    ],
                    "fieldType": "target",
                    "parameters": [
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "boolean",
                                "string"
                            ],
                            "options": "any",
                            "allowMultiple": true
                        }
                    ]
                }
            },
            "units": "none",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "None": {
            "required": {
                "target": {
                    "validInputs": [
                        "integer",
                        "float",
                        "boolean",
                        "string"
                    ],
                    "fieldType": "target"
                }
            },
            "units": "unchanged",
            "type": "simple",
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            }
        },
        "distribution": {
            "required": {
                "target": {
                    "validInputs": [
                        "integer",
                        "float",
                        "average",
                        "count"
                    ],
                    "fieldType": "target",
                    "parameters": [
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        }
                    ]
                },
                "over": {
                    "fieldType": "group",
                    "validInputs": [
                        "id",
                        "boolean",
                        "string"
                    ],
                    "parameters": null
                }
            },
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            },
            "template": "Distribution of {target} over {over}",
            "type": "complex"
        },
        "comparison": {
            "required": {
                "target1": {
                    "validInputs": [
                        "string",
                        "boolean",
                        "integer",
                        "float",
                        "id"
                    ],
                    "fieldType": "target",
                    "parameters": [
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "boolean",
                                "string"
                            ],
                            "options": "any",
                            "allowMultiple": false
                        },
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "int",
                                "float"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        },
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "id"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        }
                    ]
                },
                "target2": {
                    "validInputs": [
                        "string",
                        "boolean",
                        "integer",
                        "float",
                        "id"
                    ],
                    "fieldType": "target",
                    "parameters": [
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "boolean",
                                "string"
                            ],
                            "options": "any",
                            "allowMultiple": true
                        },
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "int",
                                "float"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        },
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "id"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        }
                    ]
                },
                "group": {
                    "internalId": "group",
                    "fieldType": "group",
                    "validInputs": [
                        "id",
                        "boolean"
                    ],
                    "parameters": null
                }
            },
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            },
            "template": "Comparison between {group}'s {target1} and {target2}",
            "type": "complex"
        },
        "correlation": {
            "required": {
                "target1": {
                    "validInputs": [
                        "string",
                        "boolean",
                        "integer",
                        "float",
                        "id"
                    ],
                    "fieldType": "target",
                    "parameters": [
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "boolean",
                                "string"
                            ],
                            "options": "any",
                            "allowMultiple": false
                        },
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        },
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "id"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        }
                    ]
                },
                "target2": {
                    "validInputs": [
                        "string",
                        "boolean",
                        "integer",
                        "float",
                        "id"
                    ],
                    "fieldType": "target",
                    "parameters": [
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "boolean",
                                "string"
                            ],
                            "options": "any",
                            "allowMultiple": true
                        },
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "int",
                                "float"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        },
                        {
                            "question": "language to be asked goes here",
                            "inputTypes": [
                                "id"
                            ],
                            "options": "aggregation",
                            "required": false,
                            "allowMultiple": false
                        }
                    ]
                },
                "group": {
                    "internalId": "group",
                    "fieldType": "group",
                    "validInputs": [
                        "id",
                        "boolean"
                    ],
                    "parameters": null
                }
            },
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            },
            "template": "Correlation between {group}'s {target1} and {target2}",
            "type": "complex"
        },
        "summaryStatistics": {
            "required": {
                "target": {
                    "validInputs": [
                        "integer",
                        "float"
                    ],
                    "fieldType": "target",
                    "parameters": []
                }
            },
            "optional": {
                "groupBy": {
                    "allowed": true,
                    "maxDepth": 2,
                    "validInputs": [
                        "id",
                        "integer",
                        "float",
                        "string",
                        "boolean"
                    ],
                    "parameters": [
                        {
                            "inputTypes": [
                                "integer",
                                "float"
                            ],
                            "options": [
                                "percentile",
                                "threshold"
                            ],
                            "allowMultiple": false
                        }
                    ]
                },
                "timeSeries": {
                    "allowed": true,
                    "maxDepth": 1,
                    "validInputs": [
                        "date",
                        "datetime",
                        "date:year"
                    ]
                }
            },
            "spawned": {
                "target0": {
                    "spawnOf": "target",
                    "fieldType": "target"
                },
                "target1": {
                    "spawnOf": "target",
                    "fieldType": "target"
                },
                "target2": {
                    "spawnOf": "target",
                    "fieldType": "target"
                },
                "target3": {
                    "spawnOf": "target",
                    "fieldType": "target"
                }
            },
            "template": "Summary Statistics of {target}",
            "type": "complex"
        }
    }
}

const sampleAnalysisOutputs = []
// const sampleAnalysisOutputs = [
//     {
//         search_opts: {},
//         analysis_opts: {
//             "target": {
//                 "entity": "Case",
//                 "field": "monetary_demand"
//             },
//             "relationships": [],
//             "op": "average"
//         },
//         expected_results: {
//             "counts": {
//                 "Case//id": 147554
//             },
//             "fieldNames": [
//                 {
//                     "entity": "Case",
//                     "field": "monetary_demand",
//                     "op": "average"
//                 }
//             ],
//             "length": 1,
//             "results": [
//                 [
//                     "847788607.28"
//                 ]
//             ],
//             "units": {
//                 "results": [
//                     [
//                         "dollar",
//                         "dollars"
//                     ]
//                 ]
//             },
//             "genFilters": "null"
//         }
//     },
//     {
//         "search_opts": {
//             "filing_date": [
//                 "2021-10-29T05:00:00.000Z",
//                 "2021-10-31T04:59:59.999Z"
//             ]
//         },
//         "analysis_opts": {
//             "target": {
//                 "entity": "Case",
//                 "field": "monetary_demand"
//             },
//             "relationships": [],
//             "op": "average",
//             "rings": [
//                 "l7zvvfx0"
//             ],
//             "query": {
//                 "AND": [
//                     [
//                         {
//                             "entity": "Case",
//                             "field": "filing_date"
//                         },
//                         [
//                             "2021-10-29T05:00:00.000Z",
//                             "2021-10-31T04:59:59.999Z"
//                         ],
//                         "contains"
//                     ]
//                 ]
//             }
//         },
//         "expected_results": {
//             "counts": {
//                 "Case//id": 147554
//             },
//             "fieldNames": [
//                 {
//                     "entity": "Case",
//                     "field": "monetary_demand",
//                     "op": "average"
//                 }
//             ],
//             "length": 1,
//             "results": [
//                 [
//                     "847788607.28"
//                 ]
//             ],
//             "units": {
//                 "results": [
//                     [
//                         "dollar",
//                         "dollars"
//                     ]
//                 ]
//             },
//             "genFilters": "[{\"id\":\"lad20hnr\",\"value\":[\"2021-10-29T05:00:00.000Z\",\"2021-10-31T04:59:59.999Z\"],\"type\":\"filing_date\"}]"
//         }
//     }
// ]

export {sampleRingFromAPI, sampleAnalysisOutputs}
