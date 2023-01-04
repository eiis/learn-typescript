class Person {
  //子类可以通过this访问
  protected name: string = 'code';
}

class Student extends Person {
  getName() {
    return this.name;
  }
}

const stu = new Student();
console.log(stu.getName());


export {};
