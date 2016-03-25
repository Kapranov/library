import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('strings');
  this.route('fundamentals');
  this.route('dimensions');
  this.route('dualities');
  this.route('branes');
  this.route('unifications');
  this.route('about');
  this.route('contact_us');
  this.route('correspondences');
  this.route('gravities');
  this.route('matrices');
  this.route('phenomenologies');
  this.route('superstrings');
  this.route('mixed');
  this.route('percentages');
  this.route('scroll-position');
  this.route('simple');
  this.route('collections');
  this.route('index', { path: '/' });
});

export default Router;
