// main view
var MainView = Backbone.View.extend({
  initialize: function() {

    this.partialMainModel = new PartialMainModel();
    this.listenTo(this.partialMainModel, 'change', this.partialMainModelRender);
    this.partialMainModel.fetchInfo();
  },

  // render
  partialMainModelRender: function(data) {
    console.log('data', data.toJSON());
    var tmp = _.template($('#mainTemplate').html()),
    template = tmp(data.toJSON());
    $('#mainTemplateArea').html(template);
    return this;
  }
  // other task …

});