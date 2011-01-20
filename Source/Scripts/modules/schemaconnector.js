(function ($) {
  //SchemaConnector
  //Responsible for JSON requests

  Visualizer.SchemaConnector = function (moduleID, sandbox) {
    var jsonSchema;

    return {
      init: function () {
        try {


        } catch (ex) {
          alert("sandbox not found");
        }
      },

      destroy: function () {
        //Destructor  

      },
      getSchema: function (callback) {
        //Is the data already in memory?
        if (jsonSchema) {
          callback(jsonSchema);
        }
        else {
          //Get data using webservice
          var url = sandbox.getConfig("schemaUrl");

          $.getJSON(url, function (data) {
            jsonSchema = data;
            callback(jsonSchema);
          });
        }
      }
    };
  };
})(jQuery);