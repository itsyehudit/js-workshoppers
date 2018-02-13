'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

promise.then(function(ful) {
    console.log(ful);
},  function(rej) {
    console.log(rej);
});

function onRejected(error) {
  console.log(error.message);
}
//
// promise.then('whatever', onReject);

// 'use strict';
//
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });
//
// function onReject(error) {
//   console.log(error.message);
// }
//
// promise.then(console.log, onReject);
