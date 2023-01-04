const info = {
  name: 'code',
  eating: eating,
};

//绑定this
function eating(this: { name: string }) {
  console.log(`${this.name} is eating`);
}
//显示绑定
eating.call({ name: 'kobe' });

//隐式绑定
info.eating();

export {};
