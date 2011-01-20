(function ($) {
  Visualizer.Sandbox = function (moduleID, core) {
    return {
      //Get configuration setting from core
      getConfig: function (name) {
        return core.getConfig(name);
      },

      //Get reference to server registered at the core
      getService: function (moduleID) {
        return core.getService(moduleID);
      },

      //Log to the core
      log: function (message, data) {
        core.log(moduleID, message, data);
      },

      //Send notify event to subscribers
      notify: function (eventType, data) {
        core.notify(moduleID, eventType, data);
      },

      //Subscribe to event
      subscribe: function (eventType, callback, obj) {
        core.subscribe(moduleID, eventType, callback, obj);
      },

      //Unsubscribe from event
      unsubscribe: function (eventType) {
        core.unsubscribe(moduleID, eventType);
      },

      //Wait for multiple events
      waitFor: function (eventTypes, callback, obj) {
        core.waitFor(eventTypes, callback, obj);
      }
    }
  };
})(jQuery);