interface StringMap<T> {
  [x: string]: T;
}
const map: StringMap<number> = {};
map["prop1"] = 1;
map.prop2 = 2;
console.log('map', map.prop2)

// let f: <T>(x: T) => T;


// f = (item)=>item

// console.log('f(1)', f(1))


type Diff<T, U> = T extends U ? never : T;
type Filter<T, U> = T extends U ? T : never;

interface person1{
  age:number
}

interface person2{
  age:number
  name:string
}

const a:Diff<person1,person2> ={
  age:1
}

//@ts-ignore
const b:Filter<person1,person2> ={
  age:1
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;


interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}
type T40 = FunctionPropertyNames<Part>; // "updatePart"
type T41 = NonFunctionPropertyNames<Part>; // "id" | "name" | "subparts"
type T42 = FunctionProperties<Part>; // { updatePart(newName: string): void }
type T43 = NonFunctionProperties<Part>; // { id: number, name: string, subparts: Part[] }


type a<T> = T extends (infer U)[] ? U :never
 
const fugui:a<string[]> = 'fugui'
