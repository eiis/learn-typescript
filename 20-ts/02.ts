/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-05 20:34:20
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-03-05 20:48:10
 * @FilePath: /typescript/20-ts/02.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//类型的继承
type t = {} & {length:number}

function getLength<T extends string[] | string>(arg:T):number{
  return arg.length
}

// function getLength<T extends {length:number}>(arg:T):number{
//   return arg.length
// }

console.log(getLength('dashu'))
console.log(getLength(['dashu','fugui']))
// console.log(getLength(['dashu','fugui',true]))
// console.log(getLength(1))
