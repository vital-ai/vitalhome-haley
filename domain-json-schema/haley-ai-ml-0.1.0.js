if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var haley_ai_ml_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/haley-ai-ml",
  "name" : "haley-ai-ml-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "6254bbf097d32f8ac5e04fdb26422b21",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/haley-ai-question", "http://vital.ai/ontology/haley", "http://vital.ai/ontology/haley-taxonomy" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-ml#hasFeatureType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#Edge_hasFeatureValue",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-ml#FeatureGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-ml#FeatureValue" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#Edge_hasPredictionModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#Edge_hasPredictionModelInput",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogPredictAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-ml#PredictionModelInput" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#Edge_hasRecommendationModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#Edge_hasRecommendationModelInput",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogRecommend" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-ml#RecommendationModelInput" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPredictionModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogPredictAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-ml#hasSelectedPredictionModelName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#isGlobalPredictionModel" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedRecommendationModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogRecommend" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-ml#hasSelectedRecommendationModelName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#isGlobalRecommendationModel" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#Edge_hasTargetValue",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-ml#TargetGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-ml#TargetValue" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#FeatureGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#FeatureType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#FeatureValue",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-ml#hasFeatureKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasFeatureStringValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasFeatureType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasFeatureURIValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasFeatureWeight" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-ml#hasModelIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasPredictionImplementingClass" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasPredictionModelEndpoint" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasPredictionModelStructureType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasPredictionModelType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#isGlobalPredictionModel" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-ml#hasModelIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasRecommendationImplementingClass" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelEndpoint" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelStructureType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#isGlobalRecommendationModel" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#PredictionModelInput",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasParameterValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#PredictionModelStructureType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#PredictionModelType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#RecommendationModelInput",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasParameterValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#RecommendationModelStructureType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#RecommendationModelType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#TargetGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#TargetType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-ml#TargetValue",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-ml#hasTargetKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasTargetStringValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasTargetType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasTargetURIValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#hasTargetWeight" : {
        "type" : "number"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasFeatureKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#FeatureValue" ],
    "shortName" : "featureKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasFeatureStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#FeatureValue" ],
    "shortName" : "featureStringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasFeatureType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#FeatureValue", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "featureType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasFeatureURIValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#FeatureValue" ],
    "shortName" : "featureURIValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasFeatureWeight",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#FeatureValue" ],
    "shortName" : "featureWeight",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasModelIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel", "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "shortName" : "modelIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasPredictionImplementingClass",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel" ],
    "shortName" : "predictionImplementingClass",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasPredictionModelEndpoint",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel" ],
    "shortName" : "predictionModelEndpoint",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasPredictionModelStructureType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel" ],
    "shortName" : "predictionModelStructureType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasPredictionModelType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel" ],
    "shortName" : "predictionModelType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasRecommendationImplementingClass",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "shortName" : "recommendationImplementingClass",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelEndpoint",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "shortName" : "recommendationModelEndpoint",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelStructureType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "shortName" : "recommendationModelStructureType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "shortName" : "recommendationModelType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasSelectedPredictionModelName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPredictionModel" ],
    "shortName" : "selectedPredictionModelName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasSelectedRecommendationModelName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedRecommendationModel" ],
    "shortName" : "selectedRecommendationModelName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasTargetKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#TargetValue" ],
    "shortName" : "targetKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasTargetStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#TargetValue" ],
    "shortName" : "targetStringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasTargetType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#TargetValue" ],
    "shortName" : "targetType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasTargetURIValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#TargetValue" ],
    "shortName" : "targetURIValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasTargetWeight",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#TargetValue" ],
    "shortName" : "targetWeight",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#hasVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel", "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "shortName" : "version",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#isGlobalPredictionModel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPredictionModel", "http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel" ],
    "shortName" : "globalPredictionModel",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-ml#isGlobalRecommendationModel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedRecommendationModel", "http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel" ],
    "shortName" : "globalRecommendationModel",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(haley_ai_ml_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = haley_ai_ml_0_1_0_schema;

}