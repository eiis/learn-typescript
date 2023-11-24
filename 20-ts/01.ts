//泛型
// function dump(arg:string):string{
//   return arg
// }
// let a = dump('dashu')

// function Booleandump(arg:boolean):boolean{
//   return arg
// }
// let b = Booleandump(true)

// console.log('a',a)
// console.log('b',b)


function dump<T>(arg:T):T{
 return arg
}

let a = dump(1) //可以不传推断出来
let b = dump<boolean>(true)
console.log('a',a)
console.log('b',b)

export{}
