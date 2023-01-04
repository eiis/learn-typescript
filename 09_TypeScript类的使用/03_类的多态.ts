class Animal {
  action() {
    console.log('running');
  }
}

class Dog extends Animal {
  action() {
    console.log('dog running');
  }
}
class Fish extends Animal {
  action() {
    console.log('fish swimming');
  }
}
//多态的目的为了写出更加具备通用性的代码

//传统面向对象多态的前提
//1、继承
//2、重写  子类重写父类的方法
//3、必须有父类饮用指向子类对象

function makeActions(animals: Animal[]) {
  animals.forEach((animal) => {
    animal.action();
  });
}

makeActions([new Dog(), new Fish()]);
