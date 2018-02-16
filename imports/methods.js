import { Meteor } from 'meteor/meteor';

Meteor.methods({
  myMeteorMethod() {
    throw new Meteor.Error('myMeteorMethod-error', 'Blablabla');
  },
});
