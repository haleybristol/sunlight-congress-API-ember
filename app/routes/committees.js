import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url =
    'http://congress.api.sunlightfoundation.com/committees?member_ids=' + params.bioguide_id + '&apikey=3df4b5a4a1274d68a7e8c68bf0ab0e17';
    return Ember.$.getJSON(url).then(function(responseJSON) {
    return responseJSON.results;
    });
  }
});
