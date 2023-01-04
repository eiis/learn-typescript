/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-11-28 22:14:42
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-11-28 22:19:32
 * @FilePath: /10_learn_typescript/16-ts/02.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE,
 */
interface UserInterface {
  name:string,
  age?:number,
  info?():string,
  [key:string]:any
}

let hd:UserInterface ={
  name:'coder',
  age:18,
  sex:'女',
  info(){
    return `${this.name} - ${this.age}`
  }
}
console.log(hd);

