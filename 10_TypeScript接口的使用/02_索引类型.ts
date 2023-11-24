// 通过interface 定义索引类型
interface IndexLanguage {
  [index: number]: string;
}
const frontLanguage: IndexLanguage = {
  0: 'HTmL',
  1: 'CSS',
  2: 'JS',
  3: 'Vue',
  4: 'React',
};
console.log(frontLanguage[4]);


