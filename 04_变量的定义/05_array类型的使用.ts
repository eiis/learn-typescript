/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2021-08-17 07:31:16
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-01-03 20:02:23
 * @FilePath: /第二天/04_变量的定义/05_array类型的使用.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//类型注解: type annotation
const names1: Array<string> = []; //不推荐 
const names2: string[] = [];//类型+[]表示法

//限定了数组的内容类型为字符串 不能添加数字
names1.push('123');
// names2.push(123)

//数组类型
let a:Array<number> = [1,2,3,4]


