type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
  };
};

const info: Person = {
  name: 'why',
  friend: {
    name: 'kobe',
    age: 20,
  },
};

console.log(info.name);
// console.log(info.friend!.name);
//可选链 有值就取 没有就不取
console.log(info.friend?.name);
console.log(info.friend?.age);
export {};
