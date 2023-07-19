"use strict";
function isString(test) {
    return typeof test === "string";
}
const arr = [{ type: 't1' }, { type: 't2' }];
const arrOfExt1 = arr
    .filter((item) => item.type === 't1');
// .map(item => item as Extend1)
let mixedArray = [1, 'apple', 2, 'banana', 3, 'cherry'];
// let stringArray = mixedArray.filter(isString);
/**
 * 类型谓词是一种特殊的返回类型，它告诉编译器在某个条件为真时，特定参数一定是特定的类型
 * 如果不使用类型谓词,ts没有的信息推断出返回的数组只包含字符串元素，使用类型谓词就可以
 */
// let stringArray = mixedArray.filter((test): test is string => {
//   return typeof test === "string";
// })
let stringArray = mixedArray.filter(isString);
//下面第一个赋值就会报错
// stringArray = [1, 'banana', 'cherry'];
stringArray = ['cherry', 'banana', 'apple'];
console.log(stringArray);
