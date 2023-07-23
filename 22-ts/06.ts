interface Todo{
  readonly title:string,
  description?:string,
  completed:string
}

type MyOmit<T,K> ={
  [P in Exclude<keyof T,K>]:T[P]
}

type A1= Omit<Todo,'description'>
//    ^?


type B1 = MyOmit<Todo,'description'>
//    ^?

