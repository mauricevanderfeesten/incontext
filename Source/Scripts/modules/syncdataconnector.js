(function ($) {

  // SyncDataConnector
  // Responsible for JSON requests for object data
  // Synchronous (whole dataset at once)
  Visualizer.SyncDataConnector = function (moduleID, sandbox) {
    // internal caching
    var jsonData;

    return {
      getData: function (id, callback) {
        //Is the data already in memory?
        if (jsonData) {
          callback(jsonData);
        }
        else {
          var url = sandbox.getConfig("dataUrl");

          //Get data using webservice
          $.getJSON(url, function (data) {
            jsonData = data;
            callback(jsonData);
          });
        }
      }
    };
  };
})(jQuery);