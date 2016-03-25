import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  //isDisabled: true,
  // isDisabled with computed property as well.
  // isDisabled: Ember.computed('emailAddress', function() {
  //  return this.get('emailAddress') === '';
  // }),
  // make your code more shorter, which checks
  // whether a property is empty or not.
  // isDisabled: Ember.computed.empty('emailAddress'),
  // use Ember.computed.match() short computed property
  // function to check the validity of the string.
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  }),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  start: Ember.on('init', function() {
    var self = this;
    this.interval = setInterval(function(){ Ember.run(self, 'tick'); }, 1000);
    this.tick();
  }),

  willDestroy: function(){
    clearInterval(this.interval);
    this._super();
  },

  tick: function(now) {
    if (!now) {
      now = moment();
    }
    this.setProperties({
      now: now,
      days: now.format('D'),
      months: now.format('MMM'),
      years: now.format('YYYY'),
      hours: now.format('hh'),
      minutes: now.format('mm'),
      seconds: now.format('ss'),
      meridiems: now.format('A')
    });
  },

  actions: {
    forceTick: function() {
      clearInterval(this.interval);
      this.tick(this.get('now').add({hours: 1, minutes: 1, seconds: 1}));
    },

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
