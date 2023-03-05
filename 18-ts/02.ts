/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-01-04 20:43:56
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-01-04 20:50:45
 * @FilePath: /第二天/18-ts/02.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

enum SexType {
  BOY,
  GIRL
}
interface UserInterface{
  name:string,
  age:number,
  sex:SexType
}

const zd:UserInterface = {
  name:'coder',
  age:19,
  sex:SexType.BOY
}
const zd1:UserInterface={
  name:'dashu',
  age:19,
  sex:SexType.GIRL
}

const users:UserInterface[]=[zd,zd1]

console.log(users);
