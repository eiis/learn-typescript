/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-01-04 21:15:17
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-01-05 21:48:47
 * @FilePath: /第二天/18-ts/04.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
{

  //<T>类型的参数
  function dump<T>(arg:T):T{
    return arg
  }
  
  let a = dump<number>(1)
  let b = dump(true)
}
