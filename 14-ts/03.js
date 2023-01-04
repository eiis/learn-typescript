"use strict";
var sum = function (a, b, ratio) {
    ratio = ratio || 0.8;
    return (a + b) * ratio;
};
console.log(sum(1, 2));
