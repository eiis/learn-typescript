/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 22:28:41
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 22:30:42
 * @FilePath: /typescript/第二天/Required.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//Required<T> 类型表示一个对象,其中 T 中的所有属性都是必填的,跟Partial相反
interface Props {
  a?: number;
  b?: string;
}
const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5, b: '1' };

console.log(obj2)
