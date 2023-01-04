function foo() {
  return 'abc';
}
function bar() {
  return 123;
}
//unknown类型只能赋值给any和unknown类型
//any可以赋值给任何类型
let flag = true;
let result: unknown;
if (!flag) {
  result = foo();
} else {
  result = bar();
}
let boo: unknown;
boo = result;
console.log(result);
console.log(boo);

export {};
