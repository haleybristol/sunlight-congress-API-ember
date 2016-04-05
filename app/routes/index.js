import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url =
    'http://congress.api.sunlightfoundation.com/bills?history.awaiting_signature=true&apikey=3df4b5a4a1274d68a7e8c68bf0ab0e17';
    return Ember.$.getJSON(url).then(function(responseJSON) {
    console.log(responseJSON.results);
    return responseJSON.results;
    });
  },
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
