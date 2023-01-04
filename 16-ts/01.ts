/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-11-28 21:39:27
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-11-28 21:43:08
 * @FilePath: /10_learn_typescript/16-ts/01.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class User{
  static  site :string = 'coder'

  public static getSite():string{
    return User.site
  }
}

const instance = new User()

console.log(User.site);
console.log(User.getSite());


