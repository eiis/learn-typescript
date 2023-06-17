/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 22:31:31
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 22:32:40
 * @FilePath: /typescript/第二天/Readonly.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
{
  interface Todo {
    title: string;
  }


  const todo: Readonly<Todo> = {
    title: "Delete inactive users",
  };

  //无法为“title”赋值，因为它是只读属性
  // todo.title = 1
}
