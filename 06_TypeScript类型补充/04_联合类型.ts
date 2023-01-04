type IdType = number | string | boolean;
function printID(id: IdType) {
  // console.log(id);
  //使用联合类型的时候 需要特别的小心
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
  //三元表达式
  typeof id === 'string' ? console.log(id.toUpperCase()) : console.log(id);
}
printID(123);
printID('abc');
printID(true);
