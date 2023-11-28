

type User = {
  id:string,
  name:string,
}

type Product = {
  id:string,
  price:number,
}

type obj = Omit< User | Product,'id'>;

const obj:obj={}
console.log(obj);
