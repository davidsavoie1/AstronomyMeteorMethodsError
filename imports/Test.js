import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

// Astronomy class collection
const Test = Class.create({
  name: 'Test',
  collection: new Mongo.Collection('tests'),
  fields: {
    /* Fields */
  },
  events: {
    beforeSave(e) {
      throw new Meteor.Error('save-error', 'Could not save!');
    },
  },
  helpers: {
    helper() {
      throw new Meteor.Error('helper-error', 'because blabla');
    },
  },
  meteorMethods: {
    failMethod() {
      throw new Meteor.Error('failMethod-error', 'because blabla');
    },
    successMethod() {
      return true;
    },
  },
});

export default Test;
