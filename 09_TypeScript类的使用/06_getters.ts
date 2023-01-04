class Person {
  //在开发中 私有属性一般用_开头
  private _name: string = '';
  constructor(name: string) {
    this._name = name;
  }
  //访问器setter/getter
  //setter
  set name(newName) {
    this._name = newName;
  }
  //getter
  get name() {
    return this._name;
  }
}

const p = new Person('code');
p.name = 'code';
console.log(p.name);

export {};
