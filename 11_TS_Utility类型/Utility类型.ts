//联合类型
type myFavoriteNumber = number | string;
let is: myFavoriteNumber = 'is';
let shuzi: myFavoriteNumber = 10;
//不能将类型“{}”分配给类型“string | number”。
// myFavoriteNumber = {};

//类型别名
// type myFavoriteNumber = string | number;
//把 myFavoriteNumber类型赋给roseFavoriteNumber
let roseFavoriteNumber: myFavoriteNumber;
roseFavoriteNumber = '1';

//接口 做不到联合类型 不能代替type
// interface Person {
//   name: string;
// }
// const xiaoMing: Person = {
//   name: 'coderdashu ',
// };

//interface 没法实现Utility type
type Person = {
  name: string;
  age: number;
};

//让小明的类型变为可选 Partial部分
const xiaoMing: Partial<Person> = {
  name: 'coderdashu ',
};

//shenmiren只能传age属性 传入name类型剩下age类型
const shenMiRen: Omit<Person, 'name'> = {
  age: 20,
};

type PersonKeys = keyof Person;
//xiaohong的类型为'name'|'age'
const xiaohong: PersonKeys = 'age';

//在对象里挑选几个类型组成新的类型
type PersonOnlyname = Pick<Person, 'name'>;

//Partial的实现 ?变为可选类型
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

//string[]
// const a = ['12'];

//readonly ["12"]
// const a = ['12'] as const;
