import Ember from 'ember';

export default Ember.Route.extend({

  /***
  * Replace index page with show user list
  **/
  beforeModel() {
    this.replaceWith('list-user');
  }
});
