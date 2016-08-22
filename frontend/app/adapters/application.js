import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';
import Ember from 'ember';

export default JSONAPIAdapter.extend(DataAdapterMixin, {

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  },
  authorizer: 'authorizer:custom'

});
