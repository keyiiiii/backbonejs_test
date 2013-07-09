// partial model
var PartialMainModel = Backbone.Model.extend({

  initialize: function(attrs, options) {
  },
  validate: function(attirbutes) {
  },

  fetchInfo : function() {
    var that = this;

    Apis.fetchAPI()
    .done(function(data) {
      that.set({
        data: data
      });
    })
    .fail(function(fetchError) {
      console.log(fetchError);
    });
  }
});