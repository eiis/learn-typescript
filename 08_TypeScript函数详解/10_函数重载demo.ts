//联合类型实现
// function getLength(args: string | any[]) {
//   return args.length;
// }

// console.log(getLength('abc'));
// console.log(getLength([1, 2, 3, 4]));

//函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;

//实现函数
function getLength(args: any): number {
  return args.length;
}

// console.log(getLength('abc'));
console.log(getLength([1, 2, 3, 4]));
