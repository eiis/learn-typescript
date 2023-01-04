class Person {
  //默认为pubilc
  // public name: string = 'code';
  //私有   只能通过暴露方法来访问
  private name: string = 'code';
  getName() {
    return this.name;
  }
}

const person = new Person();
console.log(person.getName());
export {};
