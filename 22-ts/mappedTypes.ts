
/**
 * 映射类型
 * 使用PropertyKeys（通常通过keyof操作符创建）的联合类型来遍历键，
 * 并对每个键应用同样的类型转换，以创建一个新的类型
 */

type Features = {
  [key: string]: any;
  color: string;
  age: number
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Partial<Type> = {
  [K in keyof Type]?: Type[K];
};

type Partial1 = Partial<Features>

const obj: Partial1 = {
  color: 'red',
  age: 1
}

type MyType = {
  a: number;
  b: string;
};

type PrefixedMyType = {
  [K in keyof MyType as `prefixed_${K}`]: MyType[K];
};

type FeatureOptions = OptionsFlags<Features>



/**
 * 在映射类型中，如果某个键映射到never，那么这个键就会被过滤掉
 * 下面这个类型过滤了属性值是string类型的键
 */
type NonStringKeys<T> = {
  [K in keyof T as T[K] extends string ? never : K]: T[K]
};

type NonStringKeysOptinos = NonStringKeys<Features>


/**
 * 实现内置Record类型
 */

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type MYType = MyRecord<'a' | 'b', number>
export { };
