{
  "http://purl.utwente.nl/ns/escape-agents.owl#AcademicStaff" : {
    "http://purl.utwente.nl/ns/escape-system.owl#labelPlural" : [
      { "value" : "Academic staff", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Employee", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#TechnicalStaff", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Manager", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Graduate", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Academic staff", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Ontology", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#imports" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/foaf-essential.owl", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Employee" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Person", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Student", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Employee", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Student" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Person", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Employee", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Student", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Institute" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#University", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#ResearchGroup", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Enterprise", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Department", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Association", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Institute", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An institute is a permanent organizational body created for a certain purpose. Usually it is a research organization (research institution) created to perform investigations in a certain area", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#University" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#ResearchGroup", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Institute", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Enterprise", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Department", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Association", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "University", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Establishment where a seat of higher learning is housed, including administrative quarters as well as facilities for research and teaching", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#ResearchGroup" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#University", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Institute", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Enterprise", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Department", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Association", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Research group", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A group of people undertaking systematic, painstaking investigation of a topic, or in a field of study, often employing techniques of hypothesis and experimentation, by intent on revealing new facts, theories, or principles, or determining the current state of knowledge of the subject", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Enterprise" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Enterprise", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A complete business consisting of functions, divisions, or other components used to accomplish specific objectives and defined goals", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#University", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#ResearchGroup", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Institute", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Department", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Association", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Department" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#University", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#ResearchGroup", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Institute", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Enterprise", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Association", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Department", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An organisational unit concerned with the operation and responsibility for a specified activity or a physical or functional area. Sometimes synonymous with division", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Association" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Association", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Union of persons in an organization for some particular purpose", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#University", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#ResearchGroup", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Institute", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Enterprise", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Department", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Manager" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Employee", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Manager", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Someone who controls resources and expenditures", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#TechnicalStaff", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Graduate", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#AcademicStaff", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#TechnicalStaff" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Technical staff", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Manager", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Graduate", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#AcademicStaff", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Employee", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Graduate" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Graduate", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A person who has received a degree from a school (high school or college or university)", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Employee", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#TechnicalStaff", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Manager", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#AcademicStaff", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#PhDCandidate" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "PhD candidate", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A doctoral candidate", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#AcademicStaff", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#Postdoc", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-agents.owl#Postdoc" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Postdoc", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A scholar or researcher who is involved in academic study beyond the level of a doctoral degree", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#AcademicStaff", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl#PhDCandidate", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-escape-discourserelationships.owl#appliedIn" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#applies", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#applies" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Applies", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-escape-discourserelationships.owl#appliedIn", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#referredBy", "type" : "uri" }
    ]
  },

  "http://swrc.ontoware.org/ontology#cooperateWith" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#SymmetricProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Cooperates with", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" }
    ]
  },

  "http://swrc.ontoware.org/ontology#carriedOutBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Carried out by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swrc.ontoware.org\/ontology#carriesOut", "type" : "uri" }
    ]
  },

  "http://swrc.ontoware.org/ontology#carriesOut" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Carries out", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swrc.ontoware.org\/ontology#carriedOutBy", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#Topic" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" },
      { "value" : "_:arc765fb1", "type" : "bnode" },
      { "value" : "_:arc765fb2", "type" : "bnode" },
      { "value" : "_:arc765fb3", "type" : "bnode" },
      { "value" : "_:arc73f4b1", "type" : "bnode" },
      { "value" : "_:arc73f4b2", "type" : "bnode" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Topic", "type" : "literal" }
    ]
  },

  "_:arc765fb1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/name", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arc765fb2" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/page", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc765fb3" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depiction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/relatedTo" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#SymmetricProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Related to", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The most generic relationships. It expresses connection between two resources without specifying the nature of such connection", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/alternativeTo" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#SymmetricProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Alternative to", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/relatedTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "It connects two different resources that can be considered alternative interpretations", "type" : "literal" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/inconsistentWith" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#SymmetricProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Inconsistent with", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/relatedTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "It expresses inconsistency between two resources. It is a bidirectional relationship", "type" : "literal" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/consistentWith" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#SymmetricProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Consistent with", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/relatedTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "It expresses consistency between two resources. It is a bidirectional relationship", "type" : "literal" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/relevantTo" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#SymmetricProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Relevant to", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/relatedTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "It expresses the fact that a resource is relevant for another one and vice-versa", "type" : "literal" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/refersTo" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Refers to", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#referredBy", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "It connects an entity with another entity in an unidirectional way", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/relatedTo", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#referredBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Referred by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/refersTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/relatedTo", "type" : "uri" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/inResponseTo" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "In response to", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#hasResponse", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/refersTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Expresses the fact that the existence of one Entity is mainly directed to react to another Entity", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#hasResponse" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has response", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/inResponseTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#referredBy", "type" : "uri" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/discusses" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Discusses", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#discussedBy", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/inResponseTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "It expresses the fact that one entity is talking about another one without expressing agreement or disagreement", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#discussedBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Discussed by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/discusses", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#hasResponse", "type" : "uri" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/agreesWith" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Agrees with", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#agreedBy", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/inResponseTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "It expresses the fact that one entity is talking about another one expressing agreement", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#agreedBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Agreed by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/agreesWith", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#hasResponse", "type" : "uri" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/disagreesWith" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Disagrees with", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#disagreedBy", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/inResponseTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "It expresses the fact that one entity is talking about another one expressing disagreement", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#disagreedBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Disagreed by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/disagreesWith", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#hasResponse", "type" : "uri" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/motivatedBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Motivated by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#motivated", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/refersTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An action motivated by some resource", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#motivated" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Motivated", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/motivatedBy", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#referredBy", "type" : "uri" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/arisesFrom" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Arises from", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#aroused", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/refersTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Something (question, doubt...) that arises because of a resource", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#aroused" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Aroused", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/arisesFrom", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#referredBy", "type" : "uri" }
    ]
  },

  "http://swan.mindinformatics.org/ontologies/1.2/discourse-relationships/cites" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Cites", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#citedBy", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/refersTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An explicit reference to another resource for supporting the discourse.", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#citedBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Cited by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/cites", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#referredBy", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/" : {
    "http://purl.org/dc/terms/title" : [
      { "value" : "DCMI Metadata Terms in the \/terms\/ namespace", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/publisher" : [
      { "value" : "http:\/\/purl.org\/dc\/aboutdcmi#DCMI", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ]
  },

  "http://purl.org/dc/terms/title" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Title", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A name given to the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#titleT-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/title", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/creator" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Creator", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An entity primarily responsible for making the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples of a Creator include a person, an organization, or a service.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#equivalentProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/maker", "type" : "uri" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#creatorT-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/creator", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/contributor", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/subject" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Subject", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The topic of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#isSubjectOf", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Typically, the subject will be represented using keywords, key phrases, or classification codes. Recommended best practice is to use a controlled vocabulary. To describe the spatial or temporal topic of the resource, use the Coverage element.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#subjectT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/subject", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#isSubjectOf" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is subject of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/subject", "type" : "uri" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/description" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Description", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An account of the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#descriptionT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/description", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/publisher" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Publisher", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An entity responsible for making the resource available.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples of a Publisher include a person, an organization, or a service.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#publisherT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/Agent", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/publisher", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/contributor" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Contributor", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An entity responsible for making contributions to the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples of a Contributor include a person, an organization, or a service.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#contributorT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/contributor", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/date" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A point or period of time associated with an event in the lifecycle of the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Date may be used to express temporal information at any level of granularity.  Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF].", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#dateT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#date", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/type" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Type", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The nature or genre of the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Recommended best practice is to use a controlled vocabulary such as the DCMI Type Vocabulary [DCMITYPE]. To describe the file format, physical medium, or dimensions of the resource, use the Format element.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#typeT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/type", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/format" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Format", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The file format, physical medium, or dimensions of the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples of dimensions include size and duration. Recommended best practice is to use a controlled vocabulary such as the list of Internet Media Types [MIME].", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#formatT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/MediaTypeOrExtent", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/format", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/identifier" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Identifier", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An unambiguous reference to the resource within a given context.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Recommended best practice is to identify the resource by means of a string conforming to a formal identification system. ", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#identifierT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/identifier", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/source" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Source", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource from which the described resource is derived.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "The described resource may be derived from the related resource in whole or in part. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#sourceT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/source", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/language" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Language", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A language of the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Recommended best practice is to use a controlled vocabulary such as RFC 4646 [RFC4646].", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#languageT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/LinguisticSystem", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/language", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/relation" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Relation", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system. ", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#relationT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/coverage" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Coverage", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Spatial topic and spatial applicability may be a named place or a location specified by its geographic coordinates. Temporal topic may be a named period, date, or date range. A jurisdiction may be a named administrative entity or a geographic place to which the resource applies. Recommended best practice is to use a controlled vocabulary such as the Thesaurus of Geographic Names [TGN]. Where appropriate, named places or time periods can be used in preference to numeric identifiers such as sets of coordinates or date ranges.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#coverageT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/LocationPeriodOrJurisdiction", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/coverage", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/rights" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Rights", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Information about rights held in and over the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#rightsT-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/rights", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/audience" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Audience", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A class of entity for whom the resource is intended or useful.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2001-05-21", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#audience-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/AgentClass", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/alternative" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Alternative Title", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An alternative name for the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "The distinction between titles and alternative titles is application-specific.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#alternative-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/title", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/title", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/tableOfContents" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Table Of Contents", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A list of subunits of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#tableOfContents-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/description", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/description", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/abstract" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Abstract", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A summary of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#abstract-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/description", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/description", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/created" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date Created", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Date of creation of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#created-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/valid" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date Valid", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Date (often a range) of validity of a resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#valid-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/available" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date Available", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Date (often a range) that the resource became or will become available.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#available-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/issued" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date Issued", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Date of formal issuance (e.g., publication) of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#issued-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/modified" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date Modified", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Date on which the resource was changed.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#modified-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/extent" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Extent", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The size or duration of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#extent-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/SizeOrDuration", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/format", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/format", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/medium" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Medium", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The material or physical carrier of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#medium-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/PhysicalResource", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/PhysicalMedium", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/format", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/format", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/isVersionOf" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is Version Of", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource of which the described resource is a version, edition, or adaptation.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Changes in version imply substantive changes in content rather than differences in format.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#isVersionOf-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/hasVersion" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has Version", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that is a version, edition, or adaptation of the described resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#hasVersion-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/isReplacedBy" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is Replaced By", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that supplants, displaces, or supersedes the described resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#isReplacedBy-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/replaces" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Replaces", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that is supplanted, displaced, or superseded by the described resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#replaces-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/isRequiredBy" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is Required By", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that requires the described resource to support its function, delivery, or coherence.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#isRequiredBy-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/requires" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Requires", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that is required by the described resource to support its function, delivery, or coherence.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#requires-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/isPartOf" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is Part Of", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource in which the described resource is physically or logically included.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#isPartOf-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/hasPart" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has Part", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that is included either physically or logically in the described resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#hasPart-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/isReferencedBy" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is Referenced By", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that references, cites, or otherwise points to the described resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#isReferencedBy-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/references" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "References", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that is referenced, cited, or otherwise pointed to by the described resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#references-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/isFormatOf" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is Format Of", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that is substantially the same as the described resource, but in another format.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#isFormatOf-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/hasFormat" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has Format", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A related resource that is substantially the same as the pre-existing described resource, but in another format.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#hasFormat-003", "type" : "uri" }
    ],
    "http://www.w3.org/2004/02/skos/core#note" : [
      { "value" : "This term is intended to be used with non-literal values as defined in the DCMI Abstract Model (http:\/\/dublincore.org\/documents\/abstract-model\/).  As of December 2007, the DCMI Usage Board is seeking a way to express this intention with a formal range declaration.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/conformsTo" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Conforms To", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An established standard to which the described resource conforms.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2001-05-21", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#conformsTo-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/Standard", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/relation", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/relation", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/spatial" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Spatial Coverage", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Spatial characteristics of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#spatial-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/Location", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/coverage", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/coverage", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/temporal" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Temporal Coverage", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Temporal characteristics of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#temporal-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/PeriodOfTime", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/coverage", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/coverage", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/mediator" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Mediator", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An entity that mediates access to the resource and for whom the resource is intended or useful.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "In an educational context, a mediator might be a parent, teacher, teaching assistant, or care-giver.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2001-05-21", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#mediator-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/AgentClass", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/audience", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/dateAccepted" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date Accepted", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Date of acceptance of the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples of resources to which a Date Accepted may be relevant are a thesis (accepted by a university department) or an article (accepted by a journal).", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2002-07-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#dateAccepted-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/dateCopyrighted" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date Copyrighted", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Date of copyright.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2002-07-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#dateCopyrighted-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/dateSubmitted" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date Submitted", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Date of submission of the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples of resources to which a Date Submitted may be relevant are a thesis (submitted to a university department) or an article (submitted to a journal).", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2002-07-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#dateSubmitted-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/date", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/educationLevel" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Audience Education Level", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A class of entity, defined in terms of progression through an educational or training context, for which the described resource is intended.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2002-07-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#educationLevel-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/AgentClass", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/audience", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/accessRights" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Access Rights", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Information about who can access the resource or an indication of its security status.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Access Rights may include information regarding access or restrictions based on privacy, security, or other policies.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2003-02-15", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#accessRights-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/rights", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/rights", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/bibliographicCitation" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Bibliographic Citation", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A bibliographic reference for the resource.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2003-02-15", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#bibliographicCitation-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/BibliographicResource", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Literal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/identifier", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/identifier", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/license" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "License", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A legal document giving official permission to do something with the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2004-06-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#license-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.org\/dc\/elements\/1.1\/rights", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/rights", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/rightsHolder" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Rights Holder", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A person or organization owning or managing rights over the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2004-06-14", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#rightsHolder-002", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/provenance" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Provenance", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A statement of any changes in ownership and custody of the resource since its creation that are significant for its authenticity, integrity, and interpretation.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "The statement may include a description of any changes successive custodians made to the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2004-09-20", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#provenance-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/ProvenanceStatement", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/instructionalMethod" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Instructional Method", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A process, used to engender knowledge, attitudes and skills, that the described resource is designed to support.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Instructional Method will typically include ways of presenting instructional materials or conducting instructional activities, patterns of learner-to-learner and learner-to-instructor interactions, and mechanisms by which group and individual levels of learning are measured.  Instructional methods include all aspects of the instruction and learning processes from planning and implementation through evaluation and feedback.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2005-06-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#instructionalMethod-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/MethodOfInstruction", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/accrualMethod" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Accrual Method", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The method by which items are added to a collection.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2005-06-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#accrualMethod-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.org\/dc\/dcmitype\/Collection", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/MethodOfAccrual", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/accrualPeriodicity" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Accrual Periodicity", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The frequency with which items are added to a collection.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2005-06-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#accrualPeriodicity-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.org\/dc\/dcmitype\/Collection", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/Frequency", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/accrualPolicy" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Accrual Policy", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The policy governing the addition of items to a collection.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2005-06-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Property", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#accrualPolicy-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.org\/dc\/dcmitype\/Collection", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/Policy", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Agent" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Agent", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A resource that acts or has the power to act.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples of Agent include person, organization, and software agent.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/AgentClass", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Agent-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/AgentClass" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Agent Class", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A group of agents.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples of Agent Class include groups seen as classes, such as students, women, charities, lecturers.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#AgentClass-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/AgentClass", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/BibliographicResource" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Bibliographic Resource", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A book, article, or other documentary resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#BibliographicResource-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/FileFormat" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "File Format", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A digital resource format.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples include the formats defined by the list of Internet Media Types.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#FileFormat-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/MediaType", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Frequency" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Frequency", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A rate at which something recurs.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Frequency-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Jurisdiction" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Jurisdiction", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The extent or range of judicial, law enforcement, or other authority.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Jurisdiction-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/LocationPeriodOrJurisdiction", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/LicenseDocument" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "License Document", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A legal document giving official permission to do something with a Resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#LicenseDocument-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/RightsStatement", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/LinguisticSystem" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Linguistic System", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A system of signs, symbols, sounds, gestures, or rules used in communication.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples include written, spoken, sign, and computer languages.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#LinguisticSystem-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Location" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Location", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A spatial region or named place.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Location-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/LocationPeriodOrJurisdiction", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/LocationPeriodOrJurisdiction" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Location, Period, or Jurisdiction", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A location, period of time, or jurisdiction.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#LocationPeriodOrJurisdiction-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/MediaType" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Media Type", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A file format or physical medium.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#MediaType-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/MediaTypeOrExtent", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/MediaTypeOrExtent" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Media Type or Extent", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A media type or extent.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#MediaTypeOrExtent-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/MethodOfInstruction" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Method of Instruction", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A process that is used to engender knowledge, attitudes, and skills.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#MethodOfInstruction-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/MethodOfAccrual" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Method of Accrual", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A method by which resources are added to a collection.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#MethodOfAccrual-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/PeriodOfTime" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Period of Time", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An interval of time that is named or defined by its start and end dates.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#PeriodOfTime-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/LocationPeriodOrJurisdiction", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/PhysicalMedium" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Physical Medium", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A physical material or carrier.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples include paper, canvas, or DVD.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#PhysicalMedium-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/MediaType", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/PhysicalResource" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Physical Resource", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A material thing.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#PhysicalResource-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Policy" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Policy", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A plan or course of action by an authority, intended to influence and determine decisions, actions, and other matters.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Policy-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/ProvenanceStatement" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Provenance Statement", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A statement of any changes in ownership and custody of a resource since its creation that are significant for its authenticity, integrity, and interpretation.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#ProvenanceStatement-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/RightsStatement" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Rights Statement", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A statement about the intellectual property rights (IPR) held in or over a Resource, a legal document giving official permission to do something with a resource, or a statement about access rights.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#RightsStatement-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/SizeOrDuration" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Size or Duration", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A dimension or extent, or a time taken to play or execute.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "Examples include a number of pages, a specification of length, width, and breadth, or a period in hours, minutes, and seconds.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#SizeOrDuration-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/MediaTypeOrExtent", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Standard" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Standard", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A basis for comparison; a reference point against which other things can be evaluated.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Standard-001", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/ISO639-2" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "ISO 639-2", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The three-letter alphabetic codes listed in ISO639-2 for the representation of names of languages.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#ISO639-2-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/lcweb.loc.gov\/standards\/iso639-2\/langhome.html", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/RFC1766" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "RFC 1766", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of tags, constructed according to RFC 1766, for the identification of languages.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#RFC1766-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.ietf.org\/rfc\/rfc1766.txt", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/URI" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "URI", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of identifiers constructed according to the generic syntax for Uniform Resource Identifiers as specified by the Internet Engineering Task Force.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#URI-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.ietf.org\/rfc\/rfc3986.txt", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Point" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "DCMI Point", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of points in space defined by their geographic coordinates according to the DCMI Point Encoding Scheme.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Point-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/dublincore.org\/documents\/dcmi-point\/", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/ISO3166" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "ISO 3166", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of codes listed in ISO 3166-1 for the representation of names of countries.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#ISO3166-004", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.iso.org\/iso\/en\/prods-services\/iso3166ma\/02iso-3166-code-lists\/list-en1.html", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Box" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "DCMI Box", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of regions in space defined by their geographic coordinates according to the DCMI Box Encoding Scheme.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Box-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/dublincore.org\/documents\/dcmi-box\/", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/Period" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "DCMI Period", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of time intervals defined by their limits according to the DCMI Period Encoding Scheme.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#Period-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/dublincore.org\/documents\/dcmi-period\/", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/W3CDTF" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "W3C-DTF", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of dates and times constructed according to the W3C Date and Time Formats Specification.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#W3CDTF-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.w3.org\/TR\/NOTE-datetime", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/RFC3066" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "RFC 3066", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of tags constructed according to RFC 3066 for the identification of languages.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "RFC 3066 has been obsoleted by RFC 4646.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2002-07-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#RFC3066-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.ietf.org\/rfc\/rfc3066.txt", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/RFC5646" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "RFC 5646", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of tags constructed according to RFC 5646 for the identification of languages.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "RFC 5646 obsoletes RFC 4646.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#RFC5646-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.ietf.org\/rfc\/rfc5646.txt", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/RFC4646" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "RFC 4646", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of tags constructed according to RFC 4646 for the identification of languages.", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/description" : [
      { "value" : "RFC 4646 obsoletes RFC 3066.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#RFC4646-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.ietf.org\/rfc\/rfc4646.txt", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/ISO639-3" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "ISO 639-3", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of three-letter codes listed in ISO 639-3 for the representation of names of languages.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Datatype", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#ISO639-3-001", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.sil.org\/iso639-3\/", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/LCSH" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "LCSH", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of labeled concepts specified by the Library of Congress Subject Headings.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#LCSH-003", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/MESH" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "MeSH", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of labeled concepts specified by the Medical Subject Headings.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#MESH-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.nlm.nih.gov\/mesh\/meshhome.html", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/DDC" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "DDC", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of conceptual resources specified by the Dewey Decimal Classification.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#DDC-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.oclc.org\/dewey\/", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/LCC" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "LCC", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of conceptual resources specified by the Library of Congress Classification.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#LCC-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/lcweb.loc.gov\/catdir\/cpso\/lcco\/lcco.html", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/UDC" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "UDC", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of conceptual resources specified by the Universal Decimal Classification.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#UDC-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.udcc.org\/", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/DCMIType" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "DCMI Type Vocabulary", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of classes specified by the DCMI Type Vocabulary, used to categorize the nature or genre of the resource.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2010-10-11", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#DCMIType-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/dublincore.org\/documents\/dcmi-type-vocabulary\/", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/dcmitype\/", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/IMT" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "IMT", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of media types specified by the Internet Assigned Numbers Authority.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#IMT-004", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.iana.org\/assignments\/media-types\/", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/TGN" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "TGN", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of places specified by the Getty Thesaurus of Geographic Names.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2000-07-11", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#TGN-003", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/www.getty.edu\/research\/tools\/vocabulary\/tgn\/index.html", "type" : "uri" }
    ]
  },

  "http://purl.org/dc/terms/NLM" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "NLM", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The set of conceptual resources specified by the National Library of Medicine Classification.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/issued" : [
      { "value" : "2005-06-13", "type" : "literal" }
    ],
    "http://purl.org/dc/terms/modified" : [
      { "value" : "2008-01-14", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.org\/dc\/dcam\/VocabularyEncodingScheme", "type" : "uri" }
    ],
    "http://purl.org/dc/terms/hasVersion" : [
      { "value" : "http:\/\/dublincore.org\/usage\/terms\/history\/#NLM-002", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      { "value" : "http:\/\/wwwcf.nlm.nih.gov\/class\/", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Ontology", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Publication" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Publication", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#MasterThesis" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Master thesis", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Intermediate level of a thesis, normally after four or five years of study", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#StudentThesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#DoctoralThesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BachelorThesis", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Thesis" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Thesis", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Document concerning investigation or research submitted by the author in support of his candidature for a degree of professional qualification", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#StudentThesis" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Student thesis", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "All types of theses written by a student which can not be classified as a bachelor, master or doctoral thesis", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#MasterThesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#DoctoralThesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BachelorThesis", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#DoctoralThesis" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Doctoral thesis", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Highest level of a thesis normally after more than four or five years of study", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#StudentThesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#MasterThesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BachelorThesis", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#BachelorThesis" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Bachelor thesis", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Lowest level of a thesis, normally after three years of study", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#StudentThesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#MasterThesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#DoctoralThesis", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#ResearchProposal" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Research proposal", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A document that describes in details the program for a proposed scientific investigation", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#PolicyDocument" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Policy document", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Documents describing a policy concerning a certain issue", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#WorkingPaper" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Working paper", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A preliminary scientific or technical paper that is published in a series of the institution where the research is done. Also known as research paper, research memorandum or discussion paper. The difference with a preprint is that a working paper is published in a institutional series", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Book" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Book", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Book or monograph", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "_:arcdb39b2", "type" : "bnode" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Patent" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Patent", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A document which grants intellectual property right covering an invention", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Article" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Article", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Article or an editorial published in a journal", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#TechnicalDocumentation" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Technical documentation", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Documents with product-related data and information such as product definition and specification, design, manufacturing, quality assurance, product liability, product presentation; description of features, functions and interfaces; intended, safe and correct use; service and repair of a technical product as well as its safe disposal", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#BookPart" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Book part", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Part or chapter of a book", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "_:arcdb39b1", "type" : "bnode" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#BookReview" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Book review", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Review of a book", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#PrePrint" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Pre-print", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A preliminary scientific or technical paper, not published in an institutional series. A preprint is intended to be published in a scientific journal or as a chapter in a book", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#ConferencePaper" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Conference paper", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Document (paper, poster, proceedings, reports, etc.) related to a conference or similar event", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Lecture" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Lecture", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Lecture or presentation presented during an academic event, e.g., inaugural lecture. For a conference lecture use ConferencePaper", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Report" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Report", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An account of an event or (research) findings", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Abstract" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Abstract", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A brief, objective summary of the essential content of a book, article, speech, report, dissertation, or other work", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#Annotation" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Annotation", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Note to a legal judgment", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ContributionToPeriodical", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#ContributionToPeriodical" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Contribution to periodical", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Contribution to a newspaper, weekly magazine or another non-academic periodical", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Article", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#TechnicalDocumentation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Abstract", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Annotation", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Thesis", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PolicyDocument", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#PrePrint", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#WorkingPaper", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookReview", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ResearchProposal", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Report", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Patent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#ConferencePaper", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Publication", "type" : "uri" }
    ]
  },

  "_:arcdb39b1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#isChapterOf", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#allValuesFrom" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#isChapterOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is chapter of", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#hasChapter", "type" : "uri" }
    ]
  },

  "_:arcdb39b2" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#hasChapter", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#someValuesFrom" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-pubtypes.owl#hasChapter" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has chapter", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#Book", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#BookPart", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-pubtypes.owl#isChapterOf", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Ontology", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl#Event" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Event", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" },
      { "value" : "_:arc35d6b1", "type" : "bnode" },
      { "value" : "_:arc35d6b2", "type" : "bnode" },
      { "value" : "_:arc35d6b3", "type" : "bnode" },
      { "value" : "_:arc35d6b4", "type" : "bnode" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl#Colloquium" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Workshop", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Seminar", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Meeting", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Exhibition", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Conference", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Event", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Colloquium", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Informal meeting, in general lasting not more than a daily period, for the purpose of discussion; usually of an academic or research nature and aimed at ascertaining areas of mutual interest through exchanges of ideas. Frequency: as and when appropriate, but with little regularity", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl#Workshop" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Workshop", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Seminar emphasizing free discussion, exchange of ideas, demonstration of methods and practical application of skills and principles. Also, meeting of several persons for intensive discussion. A workshop tends to be smaller and more intense than a seminar", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Event", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Seminar", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Meeting", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Exhibition", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Conference", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Colloquium", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl#Seminar" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Workshop", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Meeting", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Exhibition", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Conference", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Colloquium", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Seminar", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A meeting or a series of meetings of specialists who have different skills but have a specific common interest and have come together for training or learning purposes. The work schedule of a seminar is aimed at enriching the skills of the participants", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Event", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl#Meeting" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Workshop", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Seminar", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Exhibition", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Conference", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Colloquium", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Meeting", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A small informal gathering", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Event", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl#Lecture" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Workshop", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Seminar", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Meeting", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Exhibition", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Conference", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Colloquium", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Event", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Lecture", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A discourse on any subject; especially, a formal or methodical discourse, intended for instruction", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl#Exhibition" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Workshop", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Seminar", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Meeting", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Conference", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Colloquium", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Event", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Exhibition", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Event at which products and services are displayed", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-events.owl#Conference" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Conference", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Participatory meeting designed for discussion, fact-finding, problem solving and consultation. Though not inherently limited in time, conferences are usually of short duration with specific objectives. Synonym for congress, although a conference is normally smaller in scale and more select in character-features", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Workshop", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Seminar", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Meeting", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Lecture", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Exhibition", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Colloquium", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-events.owl#Event", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Ontology", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#imports" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-agents.owl", "type" : "uri" }
    ]
  },

  "_:arc73f4b1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#isWorkedOnBy", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#isWorkedOnBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is worked on by", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Person", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#worksOn", "type" : "uri" }
    ]
  },

  "_:arc73f4b2" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#dealtWithin", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#dealtWithin" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is topic in", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#isAbout", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#ResearchTopic" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Research topic", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/Project" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "_:arc73f4b3", "type" : "bnode" },
      { "value" : "_:arc73f4b4", "type" : "bnode" },
      { "value" : "_:arc73f4b5", "type" : "bnode" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" },
      { "value" : "_:arc10a1b43", "type" : "bnode" },
      { "value" : "_:arc10a1b44", "type" : "bnode" },
      { "value" : "_:arc10a1b45", "type" : "bnode" },
      { "value" : "_:arc10a1b46", "type" : "bnode" },
      { "value" : "_:arc10a1b47", "type" : "bnode" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Project", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A project (a collective endeavour of some kind).", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "unstable", "type" : "literal" }
    ]
  },

  "_:arc73f4b3" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#startDate", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#startDate" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Start date", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#date", "type" : "uri" }
    ]
  },

  "_:arc73f4b4" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#endDate", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#endDate" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "End date", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#date", "type" : "uri" }
    ]
  },

  "_:arc73f4b5" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#outcomeDocument", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#outcomeDocument" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" },
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Outcome document", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#isOutcomeDocumentOf", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#isAbout" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is about", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#dealtWithin", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#isOutcomeDocumentOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is outcome document of", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#outcomeDocument", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#worksOn" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Works on", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Person", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#isWorkedOnBy", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-projects.owl#date" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Date", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#date", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Ontology", "type" : "uri" }
    ]
  },

  "http://www.w3.org/2000/01/rdf-schema#Resource" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Class", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#RelationAnnotation" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemClass", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#Statement", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" },
      { "value" : "_:arc2de6b1", "type" : "bnode" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Relation annotation", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Extra information associated with a particular relationship to describe or explain the content of the relationship, or to comment on it", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#predicateOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Resource", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#RelationAnnotation", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Predicate of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#predicate", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#object" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#objectOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Object", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#object", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Resource", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#RelationAnnotation", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#objectOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Resource", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Object of", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#RelationAnnotation", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#object", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#subjectOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Subject of", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Resource", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#RelationAnnotation", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#subject", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#subject" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#RelationAnnotation", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Resource", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Object", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#subjectOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#subject", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#predicate" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#predicateOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#RelationAnnotation", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2000\/01\/rdf-schema#Resource", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Object", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#predicate", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#comment" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Comment", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A note of explanation or comment about an object", "type" : "literal" }
    ]
  },

  "http://www.openarchives.org/ore/terms/aggregates" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Aggregates", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/www.openarchives.org\/ore\/terms\/isAggregatedBy", "type" : "uri" }
    ]
  },

  "http://www.openarchives.org/ore/terms/isAggregatedBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Aggregated by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/www.openarchives.org\/ore\/terms\/aggregates", "type" : "uri" }
    ]
  },

  "http://www.openarchives.org/ore/terms/Aggregation" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Aggegation", "type" : "literal" }
    ],
    "http://purl.utwente.nl/ns/escape-system.owl#hasTitleProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/name", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/title", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "_:arcc8d4b1", "type" : "bnode" },
      { "value" : "_:arcc8d4b2", "type" : "bnode" },
      { "value" : "_:arcc8d4b3", "type" : "bnode" },
      { "value" : "_:arcc8d4b4", "type" : "bnode" },
      { "value" : "_:arcc8d4b5", "type" : "bnode" },
      { "value" : "_:arcc8d4b6", "type" : "bnode" }
    ]
  },

  "_:arcc8d4b1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/title", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arcc8d4b2" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/creator", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arcc8d4b3" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/description", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arcc8d4b4" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/rights", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arcc8d4b5" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/rightsHolder", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arcc8d4b6" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#template", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc2de6b1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/description", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-annotations.owl#title" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Title", "type" : "literal" }
    ]
  },

  "http://purl.org/dc/dcmitype/MovingImage" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Video", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://swrc.ontoware.org/ontology#status" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Status", "type" : "literal" }
    ]
  },

  "http://swrc.ontoware.org/ontology#startDate" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Start date", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#date", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#mailtoURL" : {
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#telURL" : {
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#imageURL" : {
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#schemaResourceURI" : {
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#HiddenProperty" : {
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#SystemProperty" : {
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#HiddenProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#attachmentFileName" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Attachment file name", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#template" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Template", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#HiddenProperty", "type" : "uri" }
    ]
  },

  "info:fedora/fedora-system:def/view#disseminates" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "info:fedora/fedora-system:def/model#hasModel" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "info:fedora/fedora-system:def/relations-external#isMetadataFor" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#InverseFunctionalProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#HiddenProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "URL", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#externalUri" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#InverseFunctionalProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#HiddenProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "URL", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : {
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Type", "type" : "literal" }
    ],
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#systemRole" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#owner" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#editor" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#createdBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#lastModifiedBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#creationDate" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#modificationDate" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemProperty", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-system.owl#Thing" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#SystemClass", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "ESCAPE Thing", "type" : "literal" }
    ],
    "http://purl.utwente.nl/ns/escape-system.owl#hasTitleProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/name", "type" : "uri" },
      { "value" : "http:\/\/purl.org\/dc\/terms\/title", "type" : "uri" }
    ],
    "http://purl.utwente.nl/ns/escape-system.owl#hasShortViewProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/source", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "_:arc1333b1", "type" : "bnode" }
    ]
  },

  "_:arc1333b1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-annotations.owl#comment", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "http://www.w3.org/2002/07/owl#Thing" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#Concept" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Concept", "type" : "literal" }
    ],
    "http://purl.utwente.nl/ns/escape-system.owl#hasTitleProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#prefLabel", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" },
      { "value" : "_:arca9e2b1", "type" : "bnode" },
      { "value" : "_:arca9e2b2", "type" : "bnode" },
      { "value" : "_:arca9e2b3", "type" : "bnode" },
      { "value" : "_:arca9e2b4", "type" : "bnode" },
      { "value" : "_:arca9e2b5", "type" : "bnode" },
      { "value" : "_:arca9e2b6", "type" : "bnode" },
      { "value" : "_:arca9e2b7", "type" : "bnode" },
      { "value" : "_:arca9e2b8", "type" : "bnode" },
      { "value" : "_:arca9e2b9", "type" : "bnode" }
    ]
  },

  "_:arca9e2b1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#notation", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arca9e2b2" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#prefLabel", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#cardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arca9e2b3" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#altLabel", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arca9e2b4" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#note", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arca9e2b5" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#definition", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arca9e2b6" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#example", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arca9e2b7" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#broader", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arca9e2b8" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#narrower", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arca9e2b9" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#related", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#notation" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Notation", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A notation, also known as classification code, is a string of characters such as \"T58.5\" or \"303.4833\" used to uniquely identify a concept within the scope of a given concept scheme.", "type" : "literal" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#prefLabel" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Label", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "The preferred lexical label for a resource.", "type" : "literal" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#altLabel" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Alternative label", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An alternative lexical label for a resource.", "type" : "literal" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#note" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Note", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A general note, for any purpose.", "type" : "literal" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#scopeNote" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Scope note", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A note that helps to clarify the meaning and\/or the use of a concept.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#note", "type" : "uri" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#historyNote" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "History note", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A note about the past state\/use\/meaning of a concept.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#note", "type" : "uri" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#definition" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Definition", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A statement or formal explanation of the meaning of a concept.", "type" : "literal" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#example" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Example", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An example of the use of a concept.", "type" : "literal" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#broader" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has broader", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Relates a concept to a concept that is more general in meaning.", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#narrower", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#Concept", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#Concept", "type" : "uri" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#narrower" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has narrower", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Relates a concept to a concept that is more specific in meaning.", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#broader", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#Concept", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#Concept", "type" : "uri" }
    ]
  },

  "http://www.w3.org/2004/02/skos/core#related" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has related", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Relates a concept to a concept with which there is an associative semantic relationship.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2004\/02\/skos\/core#Concept", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/birthday" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Birthday", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#date", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/name" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Name", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/firstName" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "First name", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/geekcode" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Geek code", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/gender" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Gender", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/meyersBriggs" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Myers briggs", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/givenname" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Given name", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/family_name" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Family name", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/surname" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Surname", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/nick" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Nick name", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/aimChatID" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Aim chat ID", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/icqChatID" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "ICQ chat ID", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/jabberID" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Jabber ID", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/msnChatID" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "MSN chat ID", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/yahooChatID" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Yahoo chat ID", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/plan" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Plan", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/title" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Title", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/phone" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Phone", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#telURL", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/page" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Page", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/homepage" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Home page", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/tipjar" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Tip jar", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/weblog" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Web log", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/workInfoHomepage" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Personal homepage (work)", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/www.w3.org\/2001\/XMLSchema#anyURI", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/mbox" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "E-mail", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#mailtoURL", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/thumbnail" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#DatatypeProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Thumbnail", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/currentProject" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has current project", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#isCurrentProjectOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#isCurrentProjectOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is current project of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/currentProject", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/depiction" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Depiction", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depicts", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#imageURL", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/depicts" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Depicts", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depiction", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#imageURL", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/img" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Image", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depiction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#imgOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#imageURL", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#imgOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Image of", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depicts", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/img", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#imageURL", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/fundedBy" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Funded by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#funds", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#funds" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Funds", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/fundedBy", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/interest" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Interested in", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#interestOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#interestOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is interest of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/interest", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/isPrimaryTopicOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is primary topic of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/primaryTopic", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/primaryTopic" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has primary topic", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/isPrimaryTopicOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/knows" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#SymmetricProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Knows", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/logo" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Logo", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#logoOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#imageURL", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#logoOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is logo of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/logo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#imageURL", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/made" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Made", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/maker", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/maker" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Made by", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/made", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/member" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has member", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#isMemberOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#isMemberOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is member of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/member", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/pastProject" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has past project", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#isPastProjectOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#isPastProjectOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is past project of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/pastProject", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/publications" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Publication", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#isPublicationOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#isPublicationOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Publication of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/publications", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/schoolHomepage" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Alumnus of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#hadStudent", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#hadStudent" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Almunus", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/schoolHomepage", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/topic" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Topic", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Relates a document to a thing that the document is about.", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#topicIn", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#topicIn" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Topic in", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/topic", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/topic_interest" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Topic interest", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#topic_interstOf", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#topic_interstOf" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Is topic interest of", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/topic_interest", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-projects.owl#Topic", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/workplaceHomepage" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Works at", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-display.owl#hasEmployee", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-display.owl#hasEmployee" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#NonAssignableProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Has employee", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#inverseOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/workplaceHomepage", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#domain" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" }
    ]
  },

  "http://xmlns.com/foaf/0.1/Agent" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Agent", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" },
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/OnlineAccount", "type" : "uri" },
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An agent (eg. person, group, software or physical artifact).", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "unstable", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "_:arc10a1b1", "type" : "bnode" },
      { "value" : "_:arc10a1b2", "type" : "bnode" },
      { "value" : "_:arc10a1b3", "type" : "bnode" },
      { "value" : "_:arc10a1b4", "type" : "bnode" },
      { "value" : "_:arc10a1b5", "type" : "bnode" },
      { "value" : "_:arc10a1b6", "type" : "bnode" },
      { "value" : "_:arc10a1b7", "type" : "bnode" },
      { "value" : "_:arc10a1b8", "type" : "bnode" }
    ]
  },

  "_:arc10a1b1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/name", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arc10a1b2" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/phone", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b3" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/page", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b4" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/mbox", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b5" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/made", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b6" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/logo", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b7" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depiction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b8" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/identifier", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/Document" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Document", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/OnlineAccount", "type" : "uri" },
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A document.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "testing", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" },
      { "value" : "_:arc10a1b9", "type" : "bnode" },
      { "value" : "_:arc10a1b10", "type" : "bnode" },
      { "value" : "_:arc10a1b11", "type" : "bnode" },
      { "value" : "_:arc10a1b12", "type" : "bnode" },
      { "value" : "_:arc10a1b13", "type" : "bnode" },
      { "value" : "_:arc10a1b14", "type" : "bnode" },
      { "value" : "_:arc10a1b15", "type" : "bnode" },
      { "value" : "_:arc10a1b16", "type" : "bnode" },
      { "value" : "_:arc10a1b17", "type" : "bnode" },
      { "value" : "_:arc10a1b18", "type" : "bnode" },
      { "value" : "_:arc10a1b19", "type" : "bnode" },
      { "value" : "_:arc10a1b20", "type" : "bnode" }
    ],
    "http://purl.utwente.nl/ns/escape-system.owl#hasTitleProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/title", "type" : "uri" }
    ]
  },

  "_:arc10a1b9" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/title", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arc10a1b10" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/description", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arc10a1b11" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/date", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arc10a1b12" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/maker", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arc10a1b13" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/topic", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b14" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/source", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b15" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/subject", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b16" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/relatedTo", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b17" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/page", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b18" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depiction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b19" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/rights", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b20" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/purl.org\/dc\/terms\/rightsHolder", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/Group" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Group", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Organization", "type" : "uri" },
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Person", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A class of Agents.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "unstable", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/Image" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Image", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/PersonalProfileDocument", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An image.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "testing", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/OnlineAccount" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "OnlineAccount", "type" : "literal" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Project", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An online account.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "unstable", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/Organization" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Organization", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" },
      { "value" : "_:arc10a1b21", "type" : "bnode" }
    ],
    "http://www.w3.org/2002/07/owl#disjointWith" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Person", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "An organization.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "unstable", "type" : "literal" }
    ]
  },

  "_:arc10a1b21" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/member", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/Person" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Person", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Agent", "type" : "uri" },
      { "value" : "http:\/\/purl.utwente.nl\/ns\/escape-system.owl#Thing", "type" : "uri" },
      { "value" : "_:arc10a1b22", "type" : "bnode" },
      { "value" : "_:arc10a1b23", "type" : "bnode" },
      { "value" : "_:arc10a1b24", "type" : "bnode" },
      { "value" : "_:arc10a1b25", "type" : "bnode" },
      { "value" : "_:arc10a1b26", "type" : "bnode" },
      { "value" : "_:arc10a1b27", "type" : "bnode" },
      { "value" : "_:arc10a1b28", "type" : "bnode" },
      { "value" : "_:arc10a1b29", "type" : "bnode" },
      { "value" : "_:arc10a1b30", "type" : "bnode" },
      { "value" : "_:arc10a1b31", "type" : "bnode" },
      { "value" : "_:arc10a1b32", "type" : "bnode" },
      { "value" : "_:arc10a1b33", "type" : "bnode" },
      { "value" : "_:arc10a1b34", "type" : "bnode" },
      { "value" : "_:arc10a1b35", "type" : "bnode" },
      { "value" : "_:arc10a1b36", "type" : "bnode" },
      { "value" : "_:arc10a1b37", "type" : "bnode" },
      { "value" : "_:arc10a1b38", "type" : "bnode" },
      { "value" : "_:arc10a1b39", "type" : "bnode" },
      { "value" : "_:arc10a1b40", "type" : "bnode" },
      { "value" : "_:arc10a1b41", "type" : "bnode" },
      { "value" : "_:arc10a1b42", "type" : "bnode" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A person.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "stable", "type" : "literal" }
    ]
  },

  "_:arc10a1b22" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/birthday", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b23" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/family_name", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b24" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/firstName", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b25" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/geekcode", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b26" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/gender", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b27" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/givenname", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b28" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/meyersBriggs", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b29" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/nick", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b30" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/plan", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b31" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/surname", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b32" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/title", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b33" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/currentProject", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b34" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/interest", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b35" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/knows", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b36" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/logo", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b37" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/pastProject", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b38" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/publications", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b39" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/schoolHomepage", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b40" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/topic_interest", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b41" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/workInfoHomepage", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b42" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/workplaceHomepage", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "http://xmlns.com/foaf/0.1/PersonalProfileDocument" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Class", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Personal profile document", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/Document", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "A personal profile RDF document.", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/", "type" : "uri" }
    ],
    "http://www.w3.org/2003/06/sw-vocab-status/nsterm_status" : [
      { "value" : "testing", "type" : "literal" }
    ]
  },

  "_:arc10a1b43" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/name", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arc10a1b44" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depiction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b45" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/fundedBy", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b46" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/logo", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc10a1b47" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/page", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-discourserelationships.owl" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Ontology", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#imports" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourserelationships.owl", "type" : "uri" }
    ]
  },

  "http://purl.utwente.nl/ns/escape-discourserelationships.owl#appliedIn" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#ObjectProperty", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label" : [
      { "value" : "Applied in", "type" : "literal" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#subPropertyOf" : [
      { "value" : "http:\/\/swan.mindinformatics.org\/ontologies\/1.2\/discourse-relationships\/refersTo", "type" : "uri" }
    ],
    "http://www.w3.org/2000/01/rdf-schema#comment" : [
      { "value" : "Something (a result for example) is applied in the other entity", "type" : "literal" }
    ]
  },

  "_:arc35d6b1" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/name", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "1", "type" : "literal" }
    ]
  },

  "_:arc35d6b2" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/depiction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc35d6b3" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/logo", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  },

  "_:arc35d6b4" : {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" : [
      { "value" : "http:\/\/www.w3.org\/2002\/07\/owl#Restriction", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#onProperty" : [
      { "value" : "http:\/\/xmlns.com\/foaf\/0.1\/page", "type" : "uri" }
    ],
    "http://www.w3.org/2002/07/owl#minCardinality" : [
      { "value" : "0", "type" : "literal" }
    ]
  } 
}