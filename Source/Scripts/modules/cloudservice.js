(function ($) {

  // Service for the gathering of clouds
  // A cloud is a group of related objects to the center object
  Visualizer.CloudService = function (moduleID, sandbox) {

    var TitlePropertyIdentifier = sandbox.getConfig("titleProperty");

    return {
      // Order all relation objects in one array based on weight
      gatherClouds: function (relationObjects) {
        // If the parameter is just one relationObject make an array of it
        if (!$.isArray(relationObjects))
          relationObjects = [relationObjects];

        // result array
        var clouds = [];

        // For all relationObjects ...
        $.each(relationObjects, function (i, relationObject) {
          // ... and all types in that object
          for (var relationType in relationObject) {
            // Push it into the result array
            clouds.push(relationObject[relationType]);
          }
        });

        // preserve context
        var that = this;
        // sort the array
        clouds.sort(function (a, b) { return that.sortClouds(a, b); });

        return clouds;
      },

      // sorting method
      sortClouds: function (cloudA, cloudB) {
        // reverse sort (descending by weight)
        return getWeight(cloudB) - getWeight(cloudA);
      }
    };

    // utility method to determine the weight of a cloud
    function getWeight(cloud) {
      var lines = 0;

      $.each(cloud.objects, function (i, o) {
        // each object contributes a type line and some padding and borders
        lines += 2;
        if (o.object.getPropertyValue(TitlePropertyIdentifier)) {
          // A text line is average of 4 words, so add (total words / 4)
          lines += o.object.getPropertyValue(TitlePropertyIdentifier).split(' ').length / 4;
        }
      });

      return lines;
    }
  };
})(jQuery);