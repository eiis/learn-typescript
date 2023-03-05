
interface UserInterface {
  name:string,
  age:number,
  isLock:boolean
}
const user:UserInterface = {
  name:'coder',
  age:18,
  isLock:false
}

function isLock(user:UserInterface):UserInterface{
  user.isLock = true
  return user
}

isLock(user)
