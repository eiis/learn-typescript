//参数可选
//一个参数为一个可选类型的时候 本质上表示的是这个参数是  类型｜undefined 的联合类型

function foo(message?: string) {
  console.log(message);
}
foo();
foo('123');
