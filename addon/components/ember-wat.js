import Ember from 'ember';

export default Ember.Component.extend({
  focus: false,
  didInsertElement: function() {
      console.log('wat wat wat');
      var thing = this.$('textarea');
      console.log(thing);
  },
  willDestroyElement: function() {
    console.log('done done done');
    this.$('textarea').destroy();
  },
  keyUp: function() {
    console.log('key UP');
  }
});
