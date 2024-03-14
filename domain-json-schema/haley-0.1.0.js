if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var haley_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/haley",
  "name" : "haley-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "b988f18336f5df54141f96c1a30bb05a",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital-aimp" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/haley#hasHaleyAccessLoginTypeClassURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccessGrantOutcomeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessGrantRoleOutcomeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessOutcomeSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasDialogResponseTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/haley#isGenerateExemplar" : {
        "type" : "boolean"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountObjectAccessTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasApplicationObjectAccessTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasDatasetAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasHaleyContextIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasLoginAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasOfficeAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasReferenceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasTeamAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "properties" : {
      "http://vital.ai/ontology/haley#hasDatasetAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasHaleyContextIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasLoginAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasOfficeAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasReferenceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasTeamAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountObjectAccessTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasApplicationObjectAccessTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasDatasetAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasHaleyContextIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasLoginAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasOfficeAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasReferenceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasTeamAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountObjectAccessTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasApplicationObjectAccessTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasDatasetAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasHaleyContextIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasLoginAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasOfficeAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasReferenceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasTeamAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountObjectAccessTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasAnalyzedContent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAnalyzedName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasApplicationObjectAccessTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasDatasetAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasHaleyContextIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasKnowledgeGraphID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasLoginAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasOfficeAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasReferenceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasTeamAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasWikiDataID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasWikiURL" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Customer",
    "parent" : "http://vital.ai/ontology/haley#HaleyAccount",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#DialogTask",
    "parent" : "http://vital.ai/ontology/haley#HaleyTask",
    "properties" : {
      "http://vital.ai/ontology/haley#hasDialogURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasEntityURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasAccountDataSharedWith",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountDataShareFilterRuleURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccountDataShareScopeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessPolicy", "http://vital.ai/ontology/haley#HaleyAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessAccountRole" ],
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccessRoleScopeAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeBotURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeDatasetURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeOfficeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeTeamURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessBotRole" ],
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccessRoleScopeAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeBotURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeDatasetURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeOfficeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeTeamURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessPolicy", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessLoginRole" ],
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccessRoleScopeAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeBotURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeDatasetURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeOfficeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeTeamURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessRoleScopeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessOfficePolicy",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountOffice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessOfficePolicy" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessOfficeRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountOffice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessOfficeRole" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessPolicy",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessAccountPolicyRule", "http://vital.ai/ontology/haley#HaleyAccessLoginPolicyRule" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessPolicy" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessRight",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessAccountRole", "http://vital.ai/ontology/haley#HaleyAccessBotRole", "http://vital.ai/ontology/haley#HaleyAccessLoginRole", "http://vital.ai/ontology/haley#HaleyAccessOfficeRole", "http://vital.ai/ontology/haley#HaleyAccessTeamRole" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessRight" ],
    "properties" : {
      "http://vital.ai/ontology/haley#hasRoleGrantAspectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRoleGrantExtentURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRoleGrantTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessTeamPolicy",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountTeam" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessTeamPolicy" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccessTeamRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountTeam" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccessTeamRole" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccountOffice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountOffice" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccountOfficeMember",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountOffice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccountTeam",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountOffice", "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountTeam" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyAccountTeamMember",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountTeam" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgenda", "http://vital.ai/ontology/haley#HaleyMindAgendaStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaAction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaActionCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaActionCondition" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaActionSlot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaActionSlot" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgenda", "http://vital.ai/ontology/haley#HaleyMindAgendaStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaCondition" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaGoalCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaGoal" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaGoalCondition" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaPartialGoal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaPartialGoal" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaPrimaryGoal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgenda" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaPrimaryGoal" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaStep",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgenda", "http://vital.ai/ontology/haley#HaleyMindAgendaStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindAgendaStep" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindPartialGoal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPartialGoal" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlan", "http://vital.ai/ontology/haley#HaleyMindPlanLevel", "http://vital.ai/ontology/haley#HaleyMindPlanStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanAction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanActionCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanActionCondition" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanActionSlot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanActionSlot" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlan", "http://vital.ai/ontology/haley#HaleyMindPlanStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanCondition" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanLevel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlan", "http://vital.ai/ontology/haley#HaleyMindPlanStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanLevel" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanStep",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlan", "http://vital.ai/ontology/haley#HaleyMindPlanStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanStep" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindPrimaryGoal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlan" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPrimaryGoal" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindQueryAnswer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindQuery" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswer" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindQueryAnswerBinding",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindRuleParameter",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindRule" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyMindRuleParameterBinding",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindRuleInvocation" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyOriginRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyRequestGraph" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyReport",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccountOffice", "http://vital.ai/ontology/haley#HaleyAccountTeam", "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyReport" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasHaleyRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyRequestGraph" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "properties" : {
      "http://vital.ai/ontology/haley#hasRequestOrder" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasProofJustificationReason",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#ProofTreeJustificationNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Edge_hasProofTreeNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#ProofTree", "http://vital.ai/ontology/haley#ProofTreeNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#ProofTreeNode" ],
    "properties" : {
      "http://vital.ai/ontology/haley#hasProofTreeNodeIndex" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#GlobalManager",
    "parent" : "http://vital.ai/ontology/haley#HaleyAccount",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAPIKey",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAPIKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAPIKeyIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAPIKeySessionKeyIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasEncryptedAPIKey" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessAccountPolicyRule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountClassURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessAccountRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessBotRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessGrant",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasHaleyAccessRightURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRoleGrantAspectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRoleGrantExtentURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRoleGrantTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessGrantStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessGrantType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessLoginPolicyRule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasLoginTypeClassURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessLoginRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessLoginType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessOfficePolicy",
    "parent" : "http://vital.ai/ontology/haley#HaleyAccessPolicy",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessOfficeRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessPolicy",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessRight",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccessObjectTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasHaleyAccessReferenceClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyAccessReferenceObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessRoleGrantAspect",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessRoleGrantExtent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessRoleGrantType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessRoleScope",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessTeamPolicy",
    "parent" : "http://vital.ai/ontology/haley#HaleyAccessPolicy",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessTeamRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccessViolationType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccount",
    "parent" : "http://vital.ai/ontology/vital#Account",
    "properties" : {
      "http://vital.ai/ontology/haley#isEnableEcho" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccountDataShareFilterRule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountDataShareFilterRuleIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccountDataShareScope",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccountOffice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountOfficeExternalIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccountOfficeIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAccountTeam",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccountTeamExternalIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccountTeamIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAnalyticsContainer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAnalyticsDataJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAnalyticsWindowSizeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAnalyticsWindowSize",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyAppEvent",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPEvent",
    "properties" : {
      "http://vital.ai/ontology/haley#hasEventDetails" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasEventObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasEventType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyChannelAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyChannelQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyCollection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyCommandGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyCryptoKey",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasEncryptedKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasKeySubject" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasKeySubjectIdentity" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasKeyHash" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyDataTable",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasTableData" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyDialogMapping",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasDialogProfileURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasDialogText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasMappedEdgeClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasMappedNodeClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasMappedNodeInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasMappingType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasNormalizedText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyDialogMappingType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyDialogResponseType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyDialogRouteType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyDomainMethod",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasDomainMethodContextType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasImplementingGroovyClass" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasImplementingGroovyMethod" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyDomainMethodContextType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyFileResource",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasResourceFilePath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasResourceVersion" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyGraph",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasGraphTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasMemberURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyGraphContainerProxy",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasGraphProxyURIList" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyGraphType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyHandlerErrorType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyHandlerValidationType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyIntentCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasIntent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMailingList",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMailingListEntity",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindActionResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasHaleyMindActionResultTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindActionResultType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgenda",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaActionCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaActionSlot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaGoal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaGoalCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaPartialGoal",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindAgendaGoal",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaPrimaryGoal",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindAgendaGoal",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAgendaStep",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAskMessage",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindAskPlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindBotEvent",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindEvent",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindBotPlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindCommandAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindContext",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasHaleyMindContextIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBotURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindDatascriptPlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindGoal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindMetaQLDataset",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasRuleInvocationURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleMetaQLObjectCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasRuleMetaQLParameterMap" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleMetaQLQueryName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleMetaQLTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasRuleProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPartialGoal",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindGoal",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlan",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanActionCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanActionSlot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanGoalCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanLevel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasHaleyMindPlanRequestTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanRequestType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPlanStep",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPredictionPlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindPrimaryGoal",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindGoal",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindProcessorPlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindProcessorRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasHaleyMindContextIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindProcessorRequestTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindServiceMetaQLName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindServiceRequestTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindServiceRuleName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindServiceRuleURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasInferenceQuery" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasInferenceUpdate" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindProcessorRequestType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindProcessorResponse",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasErrorCode" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasErrorMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindContextIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindProcessorResponseTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#isStatusOk" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindProcessorResponseType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasHaleyMindInferenceQuery" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindQueryErrorCode" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindQueryErrorMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindQueryModule" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindQueryParameters" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasHaleyMindQueryStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasQueryToRuleURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindQueryAnswer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAnswerToRuleURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindAnswerDerivationTree" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindAnswerExplanation" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasHaleyMindQueryAnswerResult" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasAnswerBindingVariable" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasBinaryAnswerBinding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasBooleanAnswerBinding" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley#hasDateTimeAnswerBinding" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasDoubleAnswerBinding" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasGeoLocationAnswerBinding" : {
        "type" : "object",
        "properties" : {
          "longitude" : {
            "type" : "number"
          },
          "latitude" : {
            "type" : "number"
          }
        },
        "required" : [ "longitude", "latitude" ],
        "additionalProperties" : false
      },
      "http://vital.ai/ontology/haley#hasIntegerAnswerBinding" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasListBinaryAnswerBinding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasListBooleanAnswerBinding" : {
        "type" : "array",
        "items" : {
          "type" : "boolean"
        }
      },
      "http://vital.ai/ontology/haley#hasListDateTimeAnswerBinding" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/haley#hasListDoubleAnswerBinding" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/haley#hasListGeoLocationAnswerBinding" : {
        "type" : "array",
        "items" : {
          "type" : "object",
          "properties" : {
            "longitude" : {
              "type" : "number"
            },
            "latitude" : {
              "type" : "number"
            }
          },
          "required" : [ "longitude", "latitude" ],
          "additionalProperties" : false
        }
      },
      "http://vital.ai/ontology/haley#hasListIntegerAnswerBinding" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/haley#hasListStringAnswerBinding" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasListTruthAnswerBinding" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasListURIAnswerBinding" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasStringAnswerBinding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasTruthAnswerBinding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasURIAnswerBinding" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindQueryStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindReceiveMessagePlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRecommendationPlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasGraphResolveTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleMethod" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRuleGraphResolveType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRuleInvocation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasInvocationGraphDataManagementTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasInvocationToRuleURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRuleInvocationGraphDataManagementType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRuleParameter",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasRuleParameterClassRestrictionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleParameterIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasRuleParameterModeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleParameterName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRuleParameterResolveObject" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley#hasRuleParameterResolveObjectGraph" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley#hasRuleParameterResolveObjectList" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley#hasRuleParameterTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasBinaryParameterBinding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasBooleanParameterBinding" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley#hasDateTimeParameterBinding" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasDoubleParameterBinding" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasGeoLocationParameterBinding" : {
        "type" : "object",
        "properties" : {
          "longitude" : {
            "type" : "number"
          },
          "latitude" : {
            "type" : "number"
          }
        },
        "required" : [ "longitude", "latitude" ],
        "additionalProperties" : false
      },
      "http://vital.ai/ontology/haley#hasIntegerParameterBinding" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasListBinaryParameterBinding" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasListBooleanParameterBinding" : {
        "type" : "array",
        "items" : {
          "type" : "boolean"
        }
      },
      "http://vital.ai/ontology/haley#hasListDateTimeParameterBinding" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasListDoubleParameterBinding" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/haley#hasListGeoLocationParameterBinding" : {
        "type" : "array",
        "items" : {
          "type" : "object",
          "properties" : {
            "longitude" : {
              "type" : "number"
            },
            "latitude" : {
              "type" : "number"
            }
          },
          "required" : [ "longitude", "latitude" ],
          "additionalProperties" : false
        }
      },
      "http://vital.ai/ontology/haley#hasListIntegerParameterBinding" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/haley#hasListStringParameterBinding" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasListTruthParameterBinding" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasListURIParameterBinding" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasParameterBindingVariable" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStringParameterBinding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasTruthParameterBinding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasURIParameterBinding" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRuleParameterMode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindRuleParameterType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindSendMessagePlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindServiceRequestType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindTaskEvent",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindEvent",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindTaskPlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindTellMessage",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindTellPlanAction",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindPlanAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyMindUserEvent",
    "parent" : "http://vital.ai/ontology/haley#HaleyMindEvent",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyObjectAccessType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyProvenance",
    "parent" : "http://vital.ai/ontology/vital-core#Dataset",
    "properties" : {
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyReport",
    "parent" : "http://vital.ai/ontology/vital-core#Dataset",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyReportInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasOfficeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReportURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasTeamURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBotURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasRequestChannelHistory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRequestMessageResponseSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRequestMessageSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRequestOriginMessageResponseSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRequestOriginMessageSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRequestResponseTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasResponseChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyRequestGraph",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyRequestResponseType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleySymmetricCryptoKey",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasSymmetricCryptoKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasSymmetricCryptoKeyGenerationDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasSymmetricCryptoKeyIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyTask",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasDefaultRecurrenceTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasExceptionMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasLastAttemptTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasOwner" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasScheduledExecutionTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#isTopPriority" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasStackTrace" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyUserEvent",
    "parent" : "http://vital.ai/ontology/haley#HaleyAppEvent",
    "properties" : {
      "http://vital.ai/ontology/haley#hasLoginUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyAccount", "http://vital.ai/ontology/vital#AdminLogin", "http://vital.ai/ontology/vital#Login", "http://vital.ai/ontology/vital-aimp#Bot" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
      "http://vital.ai/ontology/haley#hasAccessGrantMemberURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley#hasAccessGrantProviderAccount" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessGrantProviderBot" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessGrantProviderLogin" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessGrantStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessGrantType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasAccessObjectTypes" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HyperEdge_hasHaleyMindRuleGraphMembership",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#HyperEdge_hasReferenceObject",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofAnswerType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofDecision",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofGoal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofJustificationAnswerType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofJustificationReason",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasProofJustificationReasonTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonComparatorTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintFunctionName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintInputValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintKeyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintMLModelName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintPropertyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintValueClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonConstraintValueDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonEncoding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonReferenceInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasReasonReferenceTimestamp" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofJustificationReasonComparatorType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofJustificationReasonType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofJustificationType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofPrimaryGoal",
    "parent" : "http://vital.ai/ontology/haley#ProofGoal",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofSpecialValue",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTertiaryGoal",
    "parent" : "http://vital.ai/ontology/haley#ProofGoal",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTree",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasProofAnswerTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTreeAncestorNode",
    "parent" : "http://vital.ai/ontology/haley#ProofTreeNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTreeAskNode",
    "parent" : "http://vital.ai/ontology/haley#ProofTreeNode",
    "properties" : {
      "http://vital.ai/ontology/haley#hasProofTreeAskNodeOriginURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTreeConclusionNode",
    "parent" : "http://vital.ai/ontology/haley#ProofTreeNode",
    "properties" : {
      "http://vital.ai/ontology/haley#hasProofAnswerTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasProofDecisionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasProofPrimaryGoalURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasProofTertiaryGoalURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTreeDependencyNode",
    "parent" : "http://vital.ai/ontology/haley#ProofTreeNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTreeDeriveNode",
    "parent" : "http://vital.ai/ontology/haley#ProofTreeNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTreeJustificationNode",
    "parent" : "http://vital.ai/ontology/haley#ProofTreeNode",
    "properties" : {
      "http://vital.ai/ontology/haley#hasProofJustificationAnswerTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasProofJustificationRuleIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasProofJustificationRuleMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasProofJustificationTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#isFinalJustification" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ProofTreeNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#Seller",
    "parent" : "http://vital.ai/ontology/haley#HaleyAccount",
    "properties" : {
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/haley#hasAPIKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAPIKey" ],
    "shortName" : "aPIKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAPIKeyIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAPIKey" ],
    "shortName" : "aPIKeyIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAPIKeySessionKeyIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAPIKey" ],
    "shortName" : "aPIKeySessionKeyIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessGrantMemberURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant" ],
    "shortName" : "accessGrantMemberURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessGrantOutcomeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "accessGrantOutcomeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessGrantProviderAccount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant" ],
    "shortName" : "accessGrantProviderAccount",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessGrantProviderBot",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant" ],
    "shortName" : "accessGrantProviderBot",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessGrantProviderLogin",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant" ],
    "shortName" : "accessGrantProviderLogin",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessGrantRoleOutcomeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "accessGrantRoleOutcomeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessGrantStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant" ],
    "shortName" : "accessGrantStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessGrantType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant" ],
    "shortName" : "accessGrantType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessObjectTypes",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccessRight", "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant" ],
    "shortName" : "accessObjectTypes",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessOutcomeSerialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "accessOutcomeSerialized",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessRoleScopeAccountURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole" ],
    "shortName" : "accessRoleScopeAccountURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessRoleScopeBotURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole" ],
    "shortName" : "accessRoleScopeBotURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessRoleScopeChannelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole" ],
    "shortName" : "accessRoleScopeChannelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessRoleScopeDatasetURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole" ],
    "shortName" : "accessRoleScopeDatasetURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessRoleScopeLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole" ],
    "shortName" : "accessRoleScopeLoginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessRoleScopeOfficeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole" ],
    "shortName" : "accessRoleScopeOfficeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessRoleScopeTeamURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole" ],
    "shortName" : "accessRoleScopeTeamURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccessRoleScopeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole", "http://vital.ai/ontology/haley#Edge_hasHaleyAccessLoginRole" ],
    "shortName" : "accessRoleScopeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccessAccountPolicyRule", "http://vital.ai/ontology/haley#HaleyAccessLoginPolicyRule" ],
    "shortName" : "accountClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountDataShareFilterRuleIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccountDataShareFilterRule" ],
    "shortName" : "accountDataShareFilterRuleIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountDataShareFilterRuleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasAccountDataSharedWith" ],
    "shortName" : "accountDataShareFilterRuleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountDataShareScopeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasAccountDataSharedWith" ],
    "shortName" : "accountDataShareScopeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountObjectAccessTypes",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "accountObjectAccessTypes",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountOfficeExternalIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccountOffice" ],
    "shortName" : "accountOfficeExternalIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountOfficeIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccountOffice" ],
    "shortName" : "accountOfficeIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountTeamExternalIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccountTeam" ],
    "shortName" : "accountTeamExternalIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAccountTeamIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccountTeam" ],
    "shortName" : "accountTeamIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAnalyticsDataJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAnalyticsContainer" ],
    "shortName" : "analyticsDataJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAnalyticsWindowSizeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAnalyticsContainer" ],
    "shortName" : "analyticsWindowSizeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAnalyzedContent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "analyzedContent",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAnalyzedName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "analyzedName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAnswerBindingVariable",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "answerBindingVariable",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAnswerToRuleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswer" ],
    "shortName" : "answerToRuleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasApplicationObjectAccessTypes",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "applicationObjectAccessTypes",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasBinaryAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "binaryAnswerBinding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasBinaryParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "binaryParameterBinding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasBooleanAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "booleanAnswerBinding",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasBooleanParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "booleanParameterBinding",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDatasetAccessURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "datasetAccessURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDateTimeAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "dateTimeAnswerBinding",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDateTimeParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "dateTimeParameterBinding",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDefaultRecurrenceTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyTask" ],
    "shortName" : "defaultRecurrenceTime",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDialogProfileURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDialogMapping" ],
    "shortName" : "dialogProfileURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDialogResponseTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "dialogResponseTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDialogText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDialogMapping" ],
    "shortName" : "dialogText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDialogURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#DialogTask" ],
    "shortName" : "dialogURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDomainMethodContextType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDomainMethod" ],
    "shortName" : "domainMethodContextType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDoubleAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "doubleAnswerBinding",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasDoubleParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "doubleParameterBinding",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasEncryptedAPIKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAPIKey" ],
    "shortName" : "encryptedAPIKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasEncryptedKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyCryptoKey" ],
    "shortName" : "encryptedKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasEntityURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#DialogTask" ],
    "shortName" : "entityURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasErrorCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorResponse" ],
    "shortName" : "errorCode",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasErrorMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorResponse" ],
    "shortName" : "errorMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasEventDetails",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAppEvent" ],
    "shortName" : "eventDetails",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasEventObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAppEvent" ],
    "shortName" : "eventObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAppEvent" ],
    "shortName" : "eventType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasExceptionMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyTask" ],
    "shortName" : "exceptionMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasGeoLocationAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "geoLocationAnswerBinding",
    "multipleValues" : false,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasGeoLocationParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "geoLocationParameterBinding",
    "multipleValues" : false,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasGraphProxyURIList",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyGraphContainerProxy" ],
    "shortName" : "graphProxyURIList",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasGraphResolveTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRule" ],
    "shortName" : "graphResolveTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasGraphTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyGraph" ],
    "shortName" : "graphTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyAccessLoginTypeClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Login" ],
    "shortName" : "haleyAccessLoginTypeClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyAccessReferenceClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccessRight" ],
    "shortName" : "haleyAccessReferenceClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyAccessReferenceObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccessRight" ],
    "shortName" : "haleyAccessReferenceObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyAccessRightURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccessGrant" ],
    "shortName" : "haleyAccessRightURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyContextIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "haleyContextIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindActionResultTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindActionResult" ],
    "shortName" : "haleyMindActionResultTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindAnswerDerivationTree",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswer" ],
    "shortName" : "haleyMindAnswerDerivationTree",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindAnswerExplanation",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswer" ],
    "shortName" : "haleyMindAnswerExplanation",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindContextIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindContext", "http://vital.ai/ontology/haley#HaleyMindProcessorRequest", "http://vital.ai/ontology/haley#HaleyMindProcessorResponse" ],
    "shortName" : "haleyMindContextIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindInferenceQuery",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQuery" ],
    "shortName" : "haleyMindInferenceQuery",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindPlanRequestTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindPlanRequest" ],
    "shortName" : "haleyMindPlanRequestTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindProcessorRequestTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorRequest" ],
    "shortName" : "haleyMindProcessorRequestTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindProcessorResponseTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorResponse" ],
    "shortName" : "haleyMindProcessorResponseTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindQueryAnswerResult",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswer" ],
    "shortName" : "haleyMindQueryAnswerResult",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindQueryErrorCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQuery" ],
    "shortName" : "haleyMindQueryErrorCode",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindQueryErrorMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQuery" ],
    "shortName" : "haleyMindQueryErrorMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindQueryModule",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQuery" ],
    "shortName" : "haleyMindQueryModule",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindQueryParameters",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQuery" ],
    "shortName" : "haleyMindQueryParameters",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindQueryStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQuery" ],
    "shortName" : "haleyMindQueryStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindServiceMetaQLName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorRequest" ],
    "shortName" : "haleyMindServiceMetaQLName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindServiceRequestTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorRequest" ],
    "shortName" : "haleyMindServiceRequestTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindServiceRuleName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorRequest" ],
    "shortName" : "haleyMindServiceRuleName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasHaleyMindServiceRuleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorRequest" ],
    "shortName" : "haleyMindServiceRuleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasImplementingGroovyClass",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDomainMethod" ],
    "shortName" : "implementingGroovyClass",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasImplementingGroovyMethod",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDomainMethod" ],
    "shortName" : "implementingGroovyMethod",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasInferenceQuery",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorRequest" ],
    "shortName" : "inferenceQuery",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasInferenceUpdate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorRequest" ],
    "shortName" : "inferenceUpdate",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasIntegerAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "integerAnswerBinding",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasIntegerParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "integerParameterBinding",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasInvocationGraphDataManagementTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleInvocation" ],
    "shortName" : "invocationGraphDataManagementTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasInvocationToRuleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleInvocation" ],
    "shortName" : "invocationToRuleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasKeySubject",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyCryptoKey" ],
    "shortName" : "keySubject",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasKeySubjectIdentity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyCryptoKey" ],
    "shortName" : "keySubjectIdentity",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasKnowledgeGraphID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "knowledgeGraphID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasLastAttemptTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyTask" ],
    "shortName" : "lastAttemptTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListBinaryAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listBinaryAnswerBinding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListBinaryParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listBinaryParameterBinding",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListBooleanAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listBooleanAnswerBinding",
    "multipleValues" : true,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListBooleanParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listBooleanParameterBinding",
    "multipleValues" : true,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListDateTimeAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listDateTimeAnswerBinding",
    "multipleValues" : true,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListDateTimeParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listDateTimeParameterBinding",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListDoubleAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listDoubleAnswerBinding",
    "multipleValues" : true,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListDoubleParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listDoubleParameterBinding",
    "multipleValues" : true,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListGeoLocationAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listGeoLocationAnswerBinding",
    "multipleValues" : true,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListGeoLocationParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listGeoLocationParameterBinding",
    "multipleValues" : true,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListIntegerAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listIntegerAnswerBinding",
    "multipleValues" : true,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListIntegerParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listIntegerParameterBinding",
    "multipleValues" : true,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListStringAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listStringAnswerBinding",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListStringParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listStringParameterBinding",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListTruthAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listTruthAnswerBinding",
    "multipleValues" : true,
    "type" : "TruthProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListTruthParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listTruthParameterBinding",
    "multipleValues" : true,
    "type" : "TruthProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListURIAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "listURIAnswerBinding",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasListURIParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "listURIParameterBinding",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasLoginAccessURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "loginAccessURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasLoginTypeClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccessLoginPolicyRule" ],
    "shortName" : "loginTypeClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasLoginUsername",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyUserEvent" ],
    "shortName" : "loginUsername",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasMappedEdgeClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDialogMapping" ],
    "shortName" : "mappedEdgeClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasMappedNodeClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDialogMapping" ],
    "shortName" : "mappedNodeClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasMappedNodeInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDialogMapping" ],
    "shortName" : "mappedNodeInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasMappingType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDialogMapping" ],
    "shortName" : "mappingType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasMemberURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyGraph" ],
    "shortName" : "memberURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasNormalizedText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDialogMapping" ],
    "shortName" : "normalizedText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasOfficeAccessURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "officeAccessURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasOfficeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyReportInstance" ],
    "shortName" : "officeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasOwner",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyTask" ],
    "shortName" : "owner",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasParameterBindingVariable",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "parameterBindingVariable",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofAnswerTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTree", "http://vital.ai/ontology/haley#ProofTreeConclusionNode" ],
    "shortName" : "proofAnswerTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofDecisionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeConclusionNode" ],
    "shortName" : "proofDecisionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofJustificationAnswerTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeJustificationNode" ],
    "shortName" : "proofJustificationAnswerTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofJustificationReasonTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "proofJustificationReasonTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofJustificationRuleIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeJustificationNode" ],
    "shortName" : "proofJustificationRuleIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofJustificationRuleMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeJustificationNode" ],
    "shortName" : "proofJustificationRuleMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofJustificationTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeJustificationNode" ],
    "shortName" : "proofJustificationTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofPrimaryGoalURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeConclusionNode" ],
    "shortName" : "proofPrimaryGoalURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofTertiaryGoalURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeConclusionNode" ],
    "shortName" : "proofTertiaryGoalURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofTreeAskNodeOriginURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeAskNode" ],
    "shortName" : "proofTreeAskNodeOriginURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasProofTreeNodeIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasProofTreeNode" ],
    "shortName" : "proofTreeNodeIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasQueryToRuleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQuery" ],
    "shortName" : "queryToRuleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonComparatorTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonComparatorTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintFunctionName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintFunctionName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintInputValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintInputValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintKeyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintKeyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintMLModelName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintMLModelName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintPropertyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintPropertyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintValueClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintValueClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonConstraintValueDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintValueDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonEncoding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonEncoding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonProvenanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonProvenanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonReferenceInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonReferenceInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReasonReferenceTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonReferenceTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReferenceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "referenceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasReportURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyReportInstance" ],
    "shortName" : "reportURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRequestChannelHistory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "shortName" : "requestChannelHistory",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRequestMessageResponseSerialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "shortName" : "requestMessageResponseSerialized",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRequestMessageSerialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "shortName" : "requestMessageSerialized",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRequestOrder",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyRequest" ],
    "shortName" : "requestOrder",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRequestOriginMessageResponseSerialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "shortName" : "requestOriginMessageResponseSerialized",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRequestOriginMessageSerialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "shortName" : "requestOriginMessageSerialized",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRequestResponseTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "shortName" : "requestResponseTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasResourceFilePath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyFileResource" ],
    "shortName" : "resourceFilePath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasResourceVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyFileResource" ],
    "shortName" : "resourceVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasResponseChannelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyRequest" ],
    "shortName" : "responseChannelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRoleGrantAspectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessRight", "http://vital.ai/ontology/haley#HaleyAccessGrant" ],
    "shortName" : "roleGrantAspectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRoleGrantExtentURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessRight", "http://vital.ai/ontology/haley#HaleyAccessGrant" ],
    "shortName" : "roleGrantExtentURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRoleGrantTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasHaleyAccessRight", "http://vital.ai/ontology/haley#HaleyAccessGrant" ],
    "shortName" : "roleGrantTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleInvocationURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindMetaQLDataset" ],
    "shortName" : "ruleInvocationURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleMetaQLObjectCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindMetaQLDataset" ],
    "shortName" : "ruleMetaQLObjectCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleMetaQLParameterMap",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindMetaQLDataset" ],
    "shortName" : "ruleMetaQLParameterMap",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleMetaQLQueryName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindMetaQLDataset" ],
    "shortName" : "ruleMetaQLQueryName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleMetaQLTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindMetaQLDataset" ],
    "shortName" : "ruleMetaQLTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleMethod",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRule" ],
    "shortName" : "ruleMethod",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleParameterClassRestrictionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "shortName" : "ruleParameterClassRestrictionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleParameterIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "shortName" : "ruleParameterIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleParameterModeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "shortName" : "ruleParameterModeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleParameterName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "shortName" : "ruleParameterName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleParameterResolveObject",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "shortName" : "ruleParameterResolveObject",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleParameterResolveObjectGraph",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "shortName" : "ruleParameterResolveObjectGraph",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleParameterResolveObjectList",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "shortName" : "ruleParameterResolveObjectList",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleParameterTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameter" ],
    "shortName" : "ruleParameterTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleProvenanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindMetaQLDataset", "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "ruleProvenanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRuleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindMetaQLDataset" ],
    "shortName" : "ruleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasScheduledExecutionTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyTask" ],
    "shortName" : "scheduledExecutionTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyTask" ],
    "shortName" : "status",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStatusMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyTask" ],
    "shortName" : "statusMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStringAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "stringAnswerBinding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStringParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "stringParameterBinding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasSymmetricCryptoKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleySymmetricCryptoKey" ],
    "shortName" : "symmetricCryptoKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasSymmetricCryptoKeyGenerationDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleySymmetricCryptoKey" ],
    "shortName" : "symmetricCryptoKeyGenerationDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasSymmetricCryptoKeyIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleySymmetricCryptoKey" ],
    "shortName" : "symmetricCryptoKeyIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasTableData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDataTable" ],
    "shortName" : "tableData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasTeamAccessURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "teamAccessURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasTeamURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyReportInstance" ],
    "shortName" : "teamURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasTruthAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "truthAnswerBinding",
    "multipleValues" : false,
    "type" : "TruthProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasTruthParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "truthParameterBinding",
    "multipleValues" : false,
    "type" : "TruthProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasURIAnswerBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding" ],
    "shortName" : "uRIAnswerBinding",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasURIParameterBinding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding" ],
    "shortName" : "uRIParameterBinding",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasWikiDataID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "wikiDataID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasWikiURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "wikiURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#isEnableEcho",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyAccount" ],
    "shortName" : "enableEcho",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#isFinalJustification",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofTreeJustificationNode" ],
    "shortName" : "finalJustification",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#isGenerateExemplar",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ],
    "shortName" : "generateExemplar",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#isStatusOk",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyMindProcessorResponse" ],
    "shortName" : "statusOk",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#isTopPriority",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyTask" ],
    "shortName" : "topPriority",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(haley_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = haley_0_1_0_schema;

}