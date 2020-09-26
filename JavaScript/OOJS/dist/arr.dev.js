"use strict";

(function (user) {
  console.log('Great day', user);
})('Priya');

setTimeout(function () {
  console.log('this is a demo');
}, 3000);
setInterval(function () {
  console.log('Happy Learning');
}, 3000);