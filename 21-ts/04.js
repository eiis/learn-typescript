/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 21:53:55
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 22:02:17
 * @FilePath: /typescript/第二天/04.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//字符串索引类型
// interface StringDictionary {
//   [index: string]: string;
// }
var arr = {};
arr[0] = "zero"; // 这是正确的 因为对象的属性名被自动转换为字符串
arr["1"] = "one"; // 这也是正确的
console.log(arr);
