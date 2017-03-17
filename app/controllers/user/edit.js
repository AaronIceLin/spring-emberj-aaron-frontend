import Ember from 'ember';

export default Ember.Controller.extend({

  //Define variable to use in template
  modelFromController: Ember.computed.alias('model'),

  actions: {

    /***
    * Create api call by using ajax
    **/
    saveEdit(model, fullNameInput, phoneInput) {
      if( fullNameInput===undefined || fullNameInput ===''){
        fullNameInput = model.get('fullName');
      }

      if(phoneInput === undefined || phoneInput===''){
        phoneInput = model.get('phone');
      }

      model.setProperties( {
        fullName: fullNameInput,
        phone: phoneInput
      });
      model.save();
      this.set('fullNameInput',undefined);
      this.set('phoneInput',undefined);
      this.transitionToRoute('user.show',model.id);
    },

    /***
    * Close edit page and go back to show users page
    * Clear up input box for full name and phone
    **/
    closeEdit(id){
      this.set('fullNameInput',undefined);
      this.set('phoneInput',undefined);
      this.transitionToRoute('user.show',id);
    }
  }
});
