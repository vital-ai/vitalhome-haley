if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var haley_project_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/haley-project",
  "name" : "haley-project-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "e548e5a94b76280a05da3a2a24e65caa",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital", "http://vital.ai/ontology/haley" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/vital-aimp#Project",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasBudget" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasBudgetExpended" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasPercentComplete" : {
        "type" : "number"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-aimp#ProjectTask",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasProjectIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasAssignedTask",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectResource" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasAssignmentEnd" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasAssignmentStart" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#isActiveOnTask" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasManagementOf",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectManager" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#MasterProject", "http://vital.ai/ontology/haley-project#Project" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProject",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#MasterProject" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#Project" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProjectDiscussionComment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTaskDiscussionElement" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTaskDiscussionComment" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProjectEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#MasterProject", "http://vital.ai/ontology/haley-project#Project" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectEvent" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProjectRequestRecipient",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectRequest" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectParticipant" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProjectRequestSender",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectRequest" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectParticipant" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProjectSubTask",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProjectTask",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#Project", "http://vital.ai/ontology/haley-project#ProjectTaskStatusRequest" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProjectTaskConstraint",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTaskConstraint" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasProjectTaskStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTaskStatus" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasReportedTaskStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectResource" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectTaskStatus" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasResource",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectResourceRequirement" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectResource" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasResourceRequirement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#MasterProject", "http://vital.ai/ontology/haley-project#Project", "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectResourceRequirement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasSkill",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectResource", "http://vital.ai/ontology/haley-project#ProjectResourceRequirement" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectSkill" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Edge_hasSkillMatch",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-project#ProjectSkill" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-project#ProjectSkill" ],
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasMatchScore" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#MasterProject",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasBudget" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasBudgetExpended" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasPercentComplete" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasProjectDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-project#hasProjectIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#Project",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasProjectDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-project#hasProjectIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasEventDate" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectManager",
    "parent" : "http://vital.ai/ontology/haley-project#ProjectParticipant",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasProjectIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectParticipant",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasParticipantLoginURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectRequestStateType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectResource",
    "parent" : "http://vital.ai/ontology/haley-project#ProjectParticipant",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasProjectIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectResourceRequirement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasRequirementDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectSkill",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasProjectIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-project#hasSkillDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectTask",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasActualHourEffort" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasBudget" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasBudgetExpended" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasCurrentStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-project#hasEstimatedHourEffort" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasPercentComplete" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasTaskDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-project#isTerminalTask" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectTaskConstraint",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasEarliestStartDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasLatestStartDate" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectTaskDiscussionComment",
    "parent" : "http://vital.ai/ontology/vital-aimp#Comment",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasAuthorLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-project#hasAuthorParticipantURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectTaskDiscussionElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasProjectTaskURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectTaskStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-project#hasPercentComplete" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-project#hasStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectTaskStatusRequest",
    "parent" : "http://vital.ai/ontology/haley-project#ProjectRequest",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-project#ProjectTaskStatusType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/haley-project#hasActualHourEffort",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "shortName" : "actualHourEffort",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasAssignmentEnd",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#Edge_hasAssignedTask" ],
    "shortName" : "assignmentEnd",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasAssignmentStart",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#Edge_hasAssignedTask" ],
    "shortName" : "assignmentStart",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasAuthorLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTaskDiscussionComment" ],
    "shortName" : "authorLoginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasAuthorParticipantURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTaskDiscussionComment" ],
    "shortName" : "authorParticipantURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasBudget",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#MasterProject", "http://vital.ai/ontology/haley-project#ProjectTask", "http://vital.ai/ontology/vital-aimp#Project" ],
    "shortName" : "budget",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasBudgetExpended",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#MasterProject", "http://vital.ai/ontology/haley-project#ProjectTask", "http://vital.ai/ontology/vital-aimp#Project" ],
    "shortName" : "budgetExpended",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasCurrentStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "shortName" : "currentStatus",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasEarliestStartDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTaskConstraint" ],
    "shortName" : "earliestStartDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasEstimatedHourEffort",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "shortName" : "estimatedHourEffort",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasEventDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectEvent" ],
    "shortName" : "eventDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasLatestStartDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTaskConstraint" ],
    "shortName" : "latestStartDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasMatchScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#Edge_hasSkillMatch" ],
    "shortName" : "matchScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasParticipantLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectParticipant" ],
    "shortName" : "participantLoginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasPercentComplete",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#MasterProject", "http://vital.ai/ontology/haley-project#ProjectTask", "http://vital.ai/ontology/haley-project#ProjectTaskStatus", "http://vital.ai/ontology/vital-aimp#Project" ],
    "shortName" : "percentComplete",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasProjectDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#MasterProject", "http://vital.ai/ontology/haley-project#Project" ],
    "shortName" : "projectDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasProjectIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#MasterProject", "http://vital.ai/ontology/haley-project#Project", "http://vital.ai/ontology/haley-project#ProjectManager", "http://vital.ai/ontology/haley-project#ProjectResource", "http://vital.ai/ontology/haley-project#ProjectSkill", "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "shortName" : "projectIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasProjectTaskURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTaskDiscussionElement" ],
    "shortName" : "projectTaskURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasRequirementDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectResourceRequirement" ],
    "shortName" : "requirementDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasSkillDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectSkill" ],
    "shortName" : "skillDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTaskStatus" ],
    "shortName" : "status",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#hasTaskDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "shortName" : "taskDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#isActiveOnTask",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#Edge_hasAssignedTask" ],
    "shortName" : "activeOnTask",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-project#isTerminalTask",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-project#ProjectTask" ],
    "shortName" : "terminalTask",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(haley_project_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = haley_project_0_1_0_schema;

}