//当进行一些数据断言
//在不想给某些javascript添加具体的数据类型时(和原生js一样)
let message: any = 'hello world';

message = 123;
message = true;
message = {
  name: 'code',
};

console.log(message);
