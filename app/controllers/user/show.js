import Ember from 'ember';

export default Ember.Controller.extend({
  //Using ajax call
  ajax: Ember.inject.service(),

  actions: {

    /***
    * Go to show users page
    **/
    goBackToIndexAction(){
      this.transitionToRoute('list-user');
    },

    /***
    * Go to user editor page
    **/
    goToEditUserAction(id){
      this.transitionToRoute('user.edit',id);
    },

    /***
    * Delete user action by using ajax call
    **/
    deleteUserAction(id){
      this.get('ajax').request('/users/'+id, {
        type: 'DELETE',
        contentType: "application/json",
        dataType: "text",
        success: function(response) {
          console.log(response);
        },
        error: function(response) {
          console.log(response);
        }
      }).then(() => {
        this.transitionToRoute('list-user');
      });
    }
  }
});
