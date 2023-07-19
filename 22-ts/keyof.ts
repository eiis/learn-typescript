type obj = {
  x: number,
  y: number
}

type P = keyof obj
type Q = "x" | "y"



let p: P = 'x'


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

// ([] as Fizz[] | Buzz[]).filter(item => item.id < 5);
