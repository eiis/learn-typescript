
// interface NumberBox {
//   contents: number;
// }

// interface StringBox {
//   contents: string;
// }

// interface BooleanBox {
//   contents: boolean;
// }

// function setContents(box: StringBox, newContents: string): void;
// function setContents(box: NumberBox, newContents: number): void;
// function setContents(box: BooleanBox, newContents: boolean): void;
// function setContents(box: { contents: any }, newContents: any) {
//   box.contents = newContents;
//   return box
// }

// const a = setContents({ contents: 1 }, 10)
// console.log(a);


//类型参数的泛型类型 接口
// interface Box<Type> {
//   contents: Type;
// }
// function setContents<Type>(box: Box<Type>, newContents: Type) {
//   box.contents = newContents;
//   return box
// }
// const a = setContents({ contents: 1 }, 10)
// console.log(a);


//类型别名
type Box<Type> = {
  contents: Type;
}

//编写辅助类型
type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];


/**
 * 复合类型
 * OneOrMany<Type> 表示一个Type类型元素或者Type类型数组
 * OrNull<Type> Type类型的一个元素或者 null
//组合就是
 */
/**
 * 表示一个Type类型元素或者Type类型数组或者null
 */
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

/**
 * 一个字符串类型或者字符串类型数组或者null
 */
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;


//泛型作用于类型不作用于变量  
/**
 * <Type>叫做类型参数
 * @param arg 
 * @returns 
 */
// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// let output = identity<string>("myString");


// function loggingIdentity<Type>(arg: Type[]): Type[] {
//   console.log(arg.length);
//   return arg;
// }

/**
 * 创建一个接口约束
 */
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentity('1')

/**
 * 使用对象字面量类型（object literal type）的调用签名（call signature）
 * 来表示泛型类型
 */
// interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
// }

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// let myIdentity: GenericIdentityFn = identity;


/**
 * 将泛型参数提到接口层面不仅仅是方法单独使用
 */
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;


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
