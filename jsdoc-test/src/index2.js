
/**
 * @type {Promise<string>}
 */
let obj;

// obj.

/**
 * @type {string}
 */
let a;
a = 1

/**
 * @type {(a:string,b:boolean)=>number}
 */
let fn;

fn('1',true)


/**
 * @typedef {(a:string,b:boolean)=>number} MyFunc
 */

/** @type{MyFunc} */
let func;

/** @type{MyFunc} */
let func2;
func()
func2()


//引入 d.ts 文件
/**
 * @type {import("./fugui").Fugui}
 */
let func3;
func3()


/**
 * @param {string} p1
 * @param {number=} p2 可选参数
 * @param {boolean} [p3] 可选参数第二种写法
 * @param {string} [p4="123"] 可选+默认值
 */
function func4(p1,p2,p3,p4){
  return p1+p2+p3+p4
}

func4()



//泛型
/**
 * @template T
 * @param {T} x 参数 x
 * @returns {Promise<T>}
 */
function func5(x){
  return Promise.resolve(x)
}

const fugui = func5(1)
const fugui1 = func5('1')



