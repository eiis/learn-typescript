
//keyof T 是 string 的子类型
type obj = {
  x: number,
  y: number
}

type P = keyof obj
// type K2 = keyof []
type K2 = keyof obj[]
const length:K2 = 'length'
console.log('length', length)
type Q = "x" | "y"

let p: P = 'x'

// 该接口具有一个索引签名
//这个索引签名表示当StringArray用一个数字进行索引时，它将返回一个字符串
interface StringArray {
  [index: number]: string;
}
let a:StringArray[1] = 'a'


//具有索引类型 keyof返回索引类型
type Arrayish = {
  [n: number]: unknown
};

type A = keyof Arrayish


/**
 * 对象访问可以通过number和string访问 最终都会转换为string访问
 */
type Arrayish1 = {
  [n: string]: unknown
};
//obj[0]和obj['0']相同
type B = keyof Arrayish1

interface StringNumberDictionary {
  [index: string]: number;
}

let myDict: StringNumberDictionary = {};
type C = keyof StringNumberDictionary


interface Fizz {
  id: number;
  fizz: string;
}

interface Buzz {
  id: number;
  buzz: string;
}

/**
 * 在ts5.1之前会报错
 * 因为数组元素的类型不确定 导致ts无法确定filter方法的类型
 * @param arr 
 * @returns 
 */
function fn(arr: Fizz[] | Buzz[]) {
  return (arr).filter(item => item.id < 5)
}

interface Animal {
  name: string;
}
 
interface Dog extends Animal {
  breed: string;
}
 
//number 定义索引类型时，会转换为string，所以值类型必须是Animal的子类型
// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: string]: Animal;
  [x: number]: Dog;
}

export{}

// ([] as Fizz[] | Buzz[]).filter(item => item.id < 5);
