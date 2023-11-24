//在类中使用泛型

class CollectionNumber<T>{
  data:T[] = []
  public push(...items:T[]){
    this.data.push(...items)
  }
  public get():T[]{
    return this.data
  }
}


const a = new CollectionNumber()
a.push(11,'111')
a.push({name:'dashu'})
console.log(a.get())

