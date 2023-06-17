var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 21:46:11
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 21:47:38
 * @FilePath: /typescript/第二天/03.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var Parent = /** @class */ (function () {
    function Parent() {
        this.parentVar = 'parent variable';
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = 
        //如果在访问父类的变量之前不调用super()，ts会报错
        _super.call(this) || this;
        console.log(_this.parentVar); // 现在可以访问父类的变量了
        return _this;
    }
    return Child;
}(Parent));
var child = new Child(); // 控制台将输出 "parent variable"
