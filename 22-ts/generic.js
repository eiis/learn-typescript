// interface NumberBox {
//   contents: number;
// }
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity('1');
function identity(arg) {
    return arg;
}
var myIdentity = identity;
/**
 * 声明一个由另一个类型参数约束的类型参数
 * KeyType由ObjectType约束,不能传入ObjectType没有的属性
 */
// function getProperty<ObjectType, KeyType extends keyof ObjectType>(
//   obj: ObjectType,
//   key: KeyType
// ): ObjectType[KeyType] {
//   return obj[key];
// }
// let obj = { a: 1, b: 2, c: 3 };
//报错
// getProperty(obj, 'd')
