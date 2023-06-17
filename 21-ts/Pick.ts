/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 22:46:59
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 23:12:32
 * @FilePath: /typescript/第二天/Pick.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//Pick 接收两个参数：T 和 K。T 是你想要挑选属性的源类型，
// K extends keyof T 是源类型中你想要挑选的属性的名称。
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

console.log(todo)

export { }
