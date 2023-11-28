

function fromRecords(items, key, value) {
  return Object.fromEntries(items.map(({[key]:k,[value]:v})=>[k, v]));
}


const people = [
  { id: '101', name: 'Alice', age: 28 },
  { id: '102', name: 'Bob', age: 35 },
  { id: '103', name: 'Charlie', age: 40 },
];

const nameById = fromRecords(people, 'id', 'name');
console.log(nameById); 
