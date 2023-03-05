"use strict";
/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-05 20:26:34
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-03-05 20:33:40
 * @FilePath: /typescript/20-ts/01.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
//泛型
// function dump(arg:string):string{
//   return arg
// }
// let a = dump('dashu')
exports.__esModule = true;
// function Booleandump(arg:boolean):boolean{
//   return arg
// }
// let b = Booleandump(true)
// console.log('a',a)
// console.log('b',b)
function dump(arg) {
    return arg;
}
var a = dump(1); //可以不传推断出来
var b = dump(true);
console.log('a', a);
console.log('b', b);
