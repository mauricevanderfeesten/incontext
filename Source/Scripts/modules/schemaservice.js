(function ($) {
  //SchemaService

  Visualizer.SchemaService = function (moduleID, sandbox) {

    var schemaConnector;
    var jsonSchema;
    var URI_IDENTIFIER = 'uri';

    //Identifiers defined by w3.org specs
    var LABEL_IDENTIFIER = 'http://www.w3.org/2000/01/rdf-schema#label';
    var TYPE_IDENTIFIER = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
    var SUBCLASS_IDENTIFIER = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';

    return {
      init: function () {

        schemaConnector = sandbox.getService("schemaconnector");

        //Get schema
        schemaConnector.getSchema(function (schema) {
          jsonSchema = schema;

          sandbox.notify("ready");
        });
      },

      //Get the property label for an URI
      getPropertyNameFromSchema: function (uri) {
        var propertyName = uri;

        if (jsonSchema[uri] && jsonSchema[uri][LABEL_IDENTIFIER]) {
          propertyName = jsonSchema[uri][LABEL_IDENTIFIER][0].value;
        }

        return propertyName;
      },

      //Get the property label for an URI
      getPropertyTypeFromSchema: function (uri) {
        var propertyType = uri;

        if (jsonSchema[uri] && jsonSchema[uri][TYPE_IDENTIFIER]) {
          propertyType = jsonSchema[uri][TYPE_IDENTIFIER][0].value;
        }

        return propertyType;
      },

      //Gets the parent class
      getParentClassFromSchema: function (classDescriptor) {
        if (jsonSchema[classDescriptor] && jsonSchema[classDescriptor][SUBCLASS_IDENTIFIER]) {

          //It's an array, can have multiple values
          for (var i = 0; i < jsonSchema[classDescriptor][SUBCLASS_IDENTIFIER].length; i++) {

            //Return the first value where type is URI
            if (jsonSchema[classDescriptor][SUBCLASS_IDENTIFIER][i].type == URI_IDENTIFIER) {
              return jsonSchema[classDescriptor][SUBCLASS_IDENTIFIER][i].value;
            }
          }
        }

        return null;
      },

      //Gets the inverse type of a relation
      getInverseFromSchema: function (uri) {
        var inverseTypeId = sandbox.getConfig("inverseTypeId");
        var symmetricTypeId = sandbox.getConfig("symmetricTypeId");

        var schemaObj = jsonSchema[uri];
        if (schemaObj) {
          if (schemaObj[inverseTypeId]) {
            return schemaObj[inverseTypeId][0].value;
          } else {
            for (i in schemaObj) {
              for (j in schemaObj[i]) {
                if (schemaObj[i][j].value == symmetricTypeId) {
                  return uri;
                }
              }
            }
          }
        }

        return;
      }
    };
  };
})(jQuery);