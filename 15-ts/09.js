"use strict";
exports.__esModule = true;
/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-11-20 21:26:57
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-11-20 21:28:31
 * @FilePath: /10_learn_typescript/15-ts/09.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function disp(name) {
    if (typeof name === 'string') {
        console.log(name);
    }
    else {
        for (var i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("coder");
disp(['coder', 'James', 'kone']);
