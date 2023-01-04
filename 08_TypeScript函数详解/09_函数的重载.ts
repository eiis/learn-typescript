//函数的重载： 函数名相同  但是参数不同的几个函数  就是函数的重载
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

/*通过联合类型有两个缺点
进行很多的类型判断
返回值的类型不能确定
*/

//函数实现
function add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length;
  } else {
    return num1 + num2;
  }
}
const result = add(20, 30);
const result1 = add('code', 'nba');

console.log(result);
console.log(result1);

//在函数的重载中 实现函数是不能被直接调用的
// add({ name: 'code' }, { age: 20 })

export {};
