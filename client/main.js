import Test from '/imports/Test';

const test1 = new Test();

/* No error */
// test1.successMethod((err, res) => {
//   console.log('From sucessMethod', { err, res });
// });

/* Caught */
// test1.save((err, res) => {
//   console.log('From save', { err, res });
// });

/* Uncaught */
// test1.failMethod((err, res) => {
//   console.log('From failMethod', { err, res });
// });

/* Uncaught */
// test1.helper((err, res) => {
//   console.log('From helper', { err, res });
// });

/* Caught */
Meteor.call('myMeteorMethod', (err, res) => {
  console.log('From myMeteorMethod', { err, res });
});
