interface User {
  name: string,
  age: number
}


const user = {
  name: 'fugui',
  age: 10
}



// export const keys = Object.keys as <T extends object>(
//   obj: T
// ) => Array<keyof T>

function objetcKey<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}


const keys = objetcKey(user)

console.log(keys[0])

keys.forEach(key => {
  console.log(user[key]);
});


// Object.keys(user).forEach(key => {
//   console.log(user[key])
// })
// console.log(user[key])



// const keys = objetcKey({
//   name: 'fugui',
//   age: 20
// })




// const keys = Object.keys(user)
//    ^const keys: string[]

// const keys = Object.keys(user) as Array<keyof typeof user>

// const keys = Object.keys(user)

// keys.forEach(key => {
//   console.log(user[key as keyof typeof user])
// })

/**
 * in 用于检查一个属性是否在某一个对象中
 * @param user 
 */
// function isKey<T extends object>(
//   x: T,
//   k: PropertyKey
// ): k is keyof T {
//   return k in x
// }

// keys.forEach(key => {
//   if (isKey(user, key)) {
//     console.log(user[key])

//   }
// })

// const nameKey = keys[0]

// user[nameKey]

// console.log(user[nameKey])

function printUser(user: User) {
  Object.keys(user).forEach(key => {
    console.log(user[key])
  })
}



// function printUser(user: User) {
//   for (const key in user) {
//     console.log(user[key]);
//   }
// }
// printUser(user)
