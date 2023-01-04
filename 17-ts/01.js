var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';

var f = a || b || c || d || e;
var g = a && b && c && d && e;
console.log(f); // 4
console.log(g); // undefined
