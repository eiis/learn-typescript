class User{
  static  site :string = 'coder'

  public static getSite():string{
    return User.site
  }
}

const instance = new User()

console.log(User.site);
console.log(User.getSite());


