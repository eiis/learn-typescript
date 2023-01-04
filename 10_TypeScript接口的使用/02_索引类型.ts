/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2021-08-27 19:10:13
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-11 20:52:14
 * @FilePath: /第二天/10_TypeScript接口的使用/02_索引类型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 通过interface 定义索引类型
interface IndexLanguage {
  [index: number]: string;
}
const frontLanguage: IndexLanguage = {
  0: 'HTmL',
  1: 'CSS',
  2: 'JS',
  3: 'Vue',
  4: 'React',
};
console.log(frontLanguage[4]);


