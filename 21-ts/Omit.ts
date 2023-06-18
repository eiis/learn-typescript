

//Omit 接收两个参数：T 和 K。T 是你想要挑选属性的源类型，
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
