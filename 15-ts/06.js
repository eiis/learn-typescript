"use strict";
exports.__esModule = true;
/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-11-20 17:43:55
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-11-20 17:45:15
 * @FilePath: /10_learn_typescript/15-ts/06.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var getValue = function () {
    return 0;
};
var List;
(function (List) {
    List[List["A"] = getValue()] = "A";
    List[List["B"] = 2] = "B";
    List[List["C"] = 3] = "C";
})(List || (List = {}));
console.log(List.A);
console.log(List.B);
console.log(List.C);
