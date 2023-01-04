//类型断言  as
const el = document.getElementById('code') as HTMLImageElement;

el.src = 'url地址';

//Person是Student的父类
class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  (p as Student).studying();
}

const student = new Student();
sayHello(student);
export {};
