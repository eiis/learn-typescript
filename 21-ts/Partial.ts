/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 22:20:03
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 22:27:34
 * @FilePath: /typescript/第二天/Partial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//Partial<T> 类型表示一个对象，其中 T 中的所有属性都是可选的
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
  title: "throw out trash",
});

console.log(todo2)

export { }
