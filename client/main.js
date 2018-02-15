import Test from '/imports/Test';

const test1 = new Test();
test1.successMethod((err, res) => {
  console.log('From sucessMethod', { err, res });
});

const test2 = new Test();
test2.failMethod((err, res) => {
  console.log('From failMethod', { err, res });
});
