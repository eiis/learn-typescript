/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-05 20:51:43
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-03-05 21:01:16
 * @FilePath: /typescript/20-ts/03.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
//在类中使用泛型
var CollectionNumber = /** @class */ (function () {
    function CollectionNumber() {
        this.data = [];
    }
    CollectionNumber.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, items);
    };
    CollectionNumber.prototype.get = function () {
        return this.data;
    };
    return CollectionNumber;
}());
var a = new CollectionNumber();
a.push(11, '111');
a.push({ name: 'dashu' });
console.log(a.get());
