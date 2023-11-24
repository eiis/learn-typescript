type UserInterface = {
  name:string,
  age?:number,
  info?():string,
  [key:string]:any
}

let hd:UserInterface ={
  name:'coder',
  age:18,
  sex:'女',
  info(){
    return `${this.name} - ${this.age}`
  }
}
console.log(hd);

