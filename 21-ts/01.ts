/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 20:58:12
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 21:39:20
 * @FilePath: /typescript/第二天/01.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Point {
  x: number;
  y: number;

  constructor() {
    this.x = 10
    this.y = 10
  }
}

const pt = new Point()
pt.x = 11;
console.log(`${pt.x}, ${pt.y}`);
