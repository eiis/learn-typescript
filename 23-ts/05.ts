

const example1: {} = 'star'
const example2: {} = 1

/**
 * 如果你想构造一个对象类型 使用Record<Keys,Type>
 */

type EmptyObj = Record<string, never>
const example5: EmptyObj = {}

/**
 * 如果在tsconfig中关闭 "strictNullChecks": false 就不会报错
 * null 和 undefined 实际上并不会被认为是所有类型的一部分
 */
const example3: {} = null

const example4: {} = undefined

