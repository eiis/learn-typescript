/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 22:06:13
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 22:15:31
 * @FilePath: /typescript/第二天/06.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createCatName, Cat, Dog } from "./05.js"

type Animals = Cat | Dog;

const animal: Animals = {
  breeds: ['11111'],
  yearOfBirth: 11
}

const name = createCatName()
console.log(animal);
console.log(name)

