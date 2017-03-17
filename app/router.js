import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list-user',{path:'/'});
  this.route('message');

  this.route('user', function() {
    this.route('show', { path: '/show/:id' });
    this.route('create');
    this.route('edit', { path: '/edit/:id' });
  });

});

export default Router;
