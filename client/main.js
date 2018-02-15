import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';
import './main.html';

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

const test1 = new Test();
test1.successMethod((err, res) => {
  console.log('From sucessMethod', { err, res });
});

const test2 = new Test();
test2.failMethod((err, res) => {
  console.log('From failMethod', { err, res });
});
