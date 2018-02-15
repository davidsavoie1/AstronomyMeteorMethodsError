import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

// Astronomy class collection
const Test = Class.create({
  name: 'Test',
  collection: new Mongo.Collection('tests'),
  fields: {
    /* Fields */
  },
  meteorMethods: {
    failMethod() {
      throw new Meteor.Error('blabla', 'because blabla');
    },
    successMethod() {
      return this.save();
    },
  },
});

export default Test;
