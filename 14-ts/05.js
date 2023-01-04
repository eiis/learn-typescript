{
    var Hd = /** @class */ (function () {
        function Hd(el) {
            this.el = el;
        }
        Hd.prototype.html = function () {
            return this.el.innerHTML;
        };
        return Hd;
    }());
    var el = document.querySelector('#zd');
    var obj = new Hd(el);
    console.log(obj);
}
