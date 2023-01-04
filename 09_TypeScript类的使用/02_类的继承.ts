class Person {
  name: string = '';
  age: number = 0;
  eating() {
    console.log('eating');
  }
}
class Student extends Person {
  ano: number = 0;
  studying() {
    console.log('studying');
  }
}
class teacher extends Person {
  title: number = 0;
  teaching() {
    console.log('teaching');
  }
}

const stu = new Student();
stu.name = 'code';
stu.age = 20;
console.log(stu.name, stu.age);
export {};
