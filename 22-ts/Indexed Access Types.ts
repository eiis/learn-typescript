type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];


interface person {
  age: number;
  name: string;
  alive: boolean
}

type age = person['age']


type I1 = Person["age" | "name"];


type I2 = Person[keyof Person];


type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];


let Array = ['1', '2']
type C = Array<string>[number]

type arr = Array<number>
type D = Array<number>[number]


const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person1 = typeof MyArray[number]

type Age1 = typeof MyArray[number]["age"];

type Age2 = Person1["age"];



type MyType = {
  foo: number;
  bar: string;
};

//这样是可以的
type E = keyof MyType
type F = MyType[E]
type G = MyType['bar']

//这样不可以
// const f = 'bar'
// type H = MyType[f]

type Foo = 'foo';
type ValueType = MyType[Foo];  // 这是有效的，ValueType 是 number。


export { };
