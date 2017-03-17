import Ember from 'ember';
export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {

    /***
    * Create api call by ember create record
    **/
    save(fullNameInput, phoneInput) {
      if(fullNameInput === undefined || phoneInput===undefined || fullNameInput ==='' || phoneInput ===''){
        alert("Please enter valid input!!!");
        return;
      }

      this.get('store').createRecord('user', {
        fullName: fullNameInput,
        phone: phoneInput
      }).save().then(() => {
        this.transitionToRoute('message', {queryParams: {message: 'created'}});
      });

      //clean up input box
      this.set('userfullName',undefined);
      this.set('userphone',undefined);
    },

    /***
    * Create user api call by using ajax
    **/
    saveByAjax: function (fullNameF, phoneF) {
      this.get('ajax').request('/users/', {
        type: 'POST',
        contentType: "application/json",
        dataType: "text",
        data: JSON.stringify({
          fullName: fullNameF,
          phone:phoneF
        }),
        success: function(response) {
          console.log(response);
        },
        error: function(response) {
          console.log(response);
        }
      }).then(() => {
        this.transitionToRoute('message', {queryParams: {message: 'created'}});
      });
      this.set('userfullName',undefined);
      this.set('userphone',undefined);
    },

    /***
    * Create api call by using ajax
    **/
    goBackShowUsersPage(){
      this.set('userfullName',undefined);
      this.set('userphone',undefined);
      this.transitionToRoute('list-user');
    }
  }
});
