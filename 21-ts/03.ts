/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 21:46:11
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 21:47:38
 * @FilePath: /typescript/第二天/03.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Parent {
  parentVar: string
  constructor() {
    this.parentVar = 'parent variable';
  }
}

class Child extends Parent {
  constructor() {
    //如果在访问父类的变量之前不调用super()，ts会报错
    super(); // 这里调用父类的构造函数，初始化父类的变量
    console.log(this.parentVar); // 现在可以访问父类的变量了
  }
}

const child = new Child(); // 控制台将输出 "parent variable"
