function hd() {
    var a = 'coder';
    var b = function (x, y) { return x + y; };
    return [a, b];
}
var _a = hd(), n = _a[0], m = _a[1];
console.log(m(1, 3));
