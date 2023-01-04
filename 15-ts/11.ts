/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-11-20 22:01:30
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-11-20 22:02:49
 * @FilePath: /10_learn_typescript/15-ts/11.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
interface Person {
  age:number
}

interface Musician extends Person {
  sex:string
}

const drummer = <Musician>{}

drummer.age = 18
drummer.sex ='men'

console.log(drummer.age);
console.log(drummer.sex);

export {}
