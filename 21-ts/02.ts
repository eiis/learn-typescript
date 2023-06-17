/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 21:41:14
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 21:41:40
 * @FilePath: /typescript/第二天/02.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Gretter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    // this.name = "not ok";
    // 无法为“name”赋值，因为它是只读属性
  }
}
