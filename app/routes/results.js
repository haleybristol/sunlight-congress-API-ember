import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=3df4b5a4a1274d68a7e8c68bf0ab0e17&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
    return responseJSON.results;
    });
  }
});
