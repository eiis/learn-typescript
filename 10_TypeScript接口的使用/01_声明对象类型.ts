//通过type别名声明对象类型
// type InfoType = {
//   name: string;
//   age: number;
// };

//声明对象类型 接口interface 定义接口前面加个I
interface IInfoType {
  name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const info: IInfoType = {
  name: 'code',
  age: 20,
  friend: {
    name: 'kobe',
  },
};

console.log(info.friend?.name);
