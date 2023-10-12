{
  interface Person {
    id: string;
    name: string;
  };
    
  // const person: Person[] = [
  //   {
  //     id: '1',
  //     name: 'John'
  //   },
  //   {
  //     id: '2',
  //     name: 'rohn'
  //   }
  // ]

  const array = [1, 2];
  type person = Array<keyof Person>

  const person: person = ["id","name"]

  type person1 = (keyof Person)[]
  const person1: person1 = ["id","name"]
  console.log('person', person)
  console.log('person1', person1)

}
