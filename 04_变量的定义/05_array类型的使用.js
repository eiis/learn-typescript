/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2021-08-17 07:31:16
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-03-05 20:22:54
 * @FilePath: /第二天/04_变量的定义/05_array类型的使用.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//类型注解: type annotation
var names1 = []; //不推荐 
var names2 = []; //类型+[]表示法
//限定了数组的内容类型为字符串 不能添加数字
names1.push('123');
// names2.push(123)
console.log('names1', names1);
//数组类型
var a = [1, 2, 3, 4];
a.push(1);
console.log('a', a);
