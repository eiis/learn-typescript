function foo(message: string) {}

const names = ['code', 'kobe'];

//item可以不加类型注解 根据上下文推导
names.forEach((item) => {
  console.log(item);
});
export {};
