/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2021-08-17 08:08:15
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-03-05 20:24:36
 * @FilePath: /第二天/05_TypeScript数据类型/03_void类型的使用.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//void类型 指定函数没有返回值

function sum(num1: number, num2: number):number {
  return num1 + num2;
  // console.log(num1 + num2);
}

sum(10, 20);
