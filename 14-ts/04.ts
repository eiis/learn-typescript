type usertype = { name: string; age: number };

let addUser = (user: usertype): void => {
  console.log('添加用户');
};

addUser({ name: 'coder', age: 10 });
let updateUser = (user: usertype) => {
  console.log('更新用户');
};
updateUser({ name: 'coder', age: 10 });
