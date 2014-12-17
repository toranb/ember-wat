import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  setupXbutton: function() {
      console.log('wat wat wat');
      var thing = this.$('textarea');
      console.log(thing);
  }.on('didInsertElement'),

  teardownXbutton: function() {
    console.log('done done done');
    this.get('x-button').destroy();
  }.on('willDestroyElement'),
});
