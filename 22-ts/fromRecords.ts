// function fromRecords<T>(items: T[], key: keyof T, value: keyof T) {
//   return Object.fromEntries(items.map(({[key]:k,[value]:v})=>[k, v]));
// }

function fromRecords<T>(items: T[], key: keyof T, value: keyof T) {
  return Object.fromEntries(items.map(item=>[item[key],item[value]]));
}


type Person = {
  id: string;
  name: string;
  age: number;
};

const people: Person[] = [
  { id: '101', name: 'Alice', age: 28 },
  { id: '102', name: 'Bob', age: 35 },
  { id: '103', name: 'Charlie', age: 40 },
];

const nameById = fromRecords(people, 'id', 'name');
console.log(nameById); 
