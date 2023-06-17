/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-17 22:51:14
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-17 22:52:40
 * @FilePath: /typescript/第二天/Omit.TS
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//Pick 接收两个参数：T 和 K。T 是你想要挑选属性的源类型，
// K extends keyof T 是源类型中你想要挑选删除的属性的名称。 和Pick相反
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

console.log(todo)
