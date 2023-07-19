//字符串索引类型
// interface StringDictionary {
//   [index: string]: string;
// }

// let dict: StringDictionary = {};

// dict["hello"] = "world"; // 这是正确的
// dict[123] = "world"; // 这也是正确的，因为123会被转换为字符串
// console.log(dict)


//数字索引类型
//这个index只是一个参数名 ，你可以选择任何你想要的名称
interface StringArrayLike {
  [index: number]: string;
}

let arr: StringArrayLike = {};

arr[0] = "zero"; // 这是正确的 因为对象的属性名被自动转换为字符串
arr["1"] = "one"; // 这也是正确的
console.log(arr)

