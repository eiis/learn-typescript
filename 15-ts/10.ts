/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-11-20 21:43:20
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-11-20 21:45:34
 * @FilePath: /10_learn_typescript/15-ts/10.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface IPerson{
  firstNAme:string,
  lastName:string,
  sayHi:()=>string
}

const customer:IPerson={
  firstNAme:"coder",
  lastName:'dashu',
  sayHi:()=>'coder'
}

console.log(customer.firstNAme);

export{}

