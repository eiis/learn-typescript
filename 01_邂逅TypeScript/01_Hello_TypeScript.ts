/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2021-08-16 16:32:34
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-01-03 19:43:50
 * @FilePath: /第二天/01_邂逅TypeScript/01_Hello_TypeScript.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let message: string = 'Hello';

function foo(payload: string) {
  console.log(payload.length);
}

foo(message);
export {};
