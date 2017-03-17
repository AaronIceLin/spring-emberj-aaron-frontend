import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    /***
    * Go to user creation page
    **/
    goToCreateUserPage(){
      this.transitionToRoute('user.create');
    }
  }
});
