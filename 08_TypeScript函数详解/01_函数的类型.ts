//函数作为参数 在参数中如何编写类型
function foo() {
  console.log('code');
}

//函数类型：() => void
type fnType = () => void;
function bar(fn: fnType) {
  fn();
}

bar(foo);

//定义常量时 编写函数的类型
type AddFntype = (num1: number, num2: number) => number;
const add: AddFntype = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(add(10, 20));

export {};
