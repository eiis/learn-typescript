type obj = {
  x: number,
  y: number
}

type P = keyof obj
type Q = "x" | "y"



let p: P = 'x'


//具有索引类型 keyof返回索引类型
type Arrayish = { [n: number]: unknown };

type A = keyof Arrayish


type Arrayish1 = { [n: string]: unknown };
//obj[0]和obj['0']相同
type B = keyof Arrayish1
