(function ($) {
  Visualizer.Node = function (id, externalId) {
    this.id = id;
    this.externalId = externalId;

    this.properties = {};
    this.relations = {};
    this.inverseRelations = {};
  };

  Visualizer.Node.prototype = {
    id: null,
    externalId: null,
    properties: null,
    relations: null,
    inverseRelations: null,
    aggregate: null,
    isLoaded: false,

    getProperty: function (identifier) {
      return this.properties[identifier];
    },

    getPropertyLabel: function (identifier) {
      if (this.properties[identifier])
        return this.properties[identifier].label;

      return null;
    },

    getPropertyValue: function (identifier) {
      if (this.properties[identifier])
        return this.properties[identifier].value;

      return null;
    },

    //Returns External ID if available, else normal id
    getId: function () {
      if (this.externalId)
        return this.externalId;
      else
        return this.id;
    }
  };
})(jQuery);