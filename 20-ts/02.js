function getLength(arg) {
    return arg.length;
}
// function getLength<T extends {length:number}>(arg:T):number{
//   return arg.length
// }
console.log(getLength('dashu'));
console.log(getLength(['dashu', 'fugui']));
// console.log(getLength(['dashu','fugui',true]))
// console.log(getLength(1))
