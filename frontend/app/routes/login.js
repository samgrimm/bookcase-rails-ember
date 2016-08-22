import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    authenticate: function() {
      var credentials = this.controller.getProperties('identification', 'password'),
      authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).
        catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
