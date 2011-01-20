(function ($) {
  Visualizer.NagivationService = function (moduleID, sandbox) {

    var historymanager;

    return {
      init: function () {
        historymanager = sandbox.getService("historymanager");

        //Listen to object clicks
        sandbox.subscribe("*.object-click", function (event) {
          var objectId = event.data;

          var previousObject = historymanager.getPreviousObject();

          // If the clicked object is the previous one, let the historymanager handle the moving back
          if (previousObject && previousObject.getId() == objectId) {
            sandbox.notify("history-click", 1);
          }
          // else notify that the object should be loaded
          else {
            //Set address if history manager is used
            if (sandbox.getConfig("useHistoryManager")) {
              $.address.value('?id=' + objectId);
            }
            else {
              //Else, load objects
              sandbox.notify("load-object", objectId);
            }
          }
        }, this);

        //Listen to load object
        sandbox.subscribe("*.load-object", function (event) {
          //Only proceed if all services are ready
          var dataService = sandbox.getService("dataservice");
          var drawService = sandbox.getService("drawservice");
          var historyManager = sandbox.getService("historymanager");

          // assign id from event.data
          var id = event.data;

          // If there is no object id passed to the event, take the default id
          if (!event.data)
            id = sandbox.getConfig("startObjectId");

          //historyManager.setCurrentObjectId(id);

          //Load data and draw
          dataService.getCenterObject(id, function (centerObj) {
            historyManager.setCurrentObject(centerObj);

            drawService.beginDraw(centerObj);
            sandbox.notify("load-object-ready", centerObj.getId());
          });
        }, this);
      }
    }
  };
})(jQuery);