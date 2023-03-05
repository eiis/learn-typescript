/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-05 21:11:38
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-03-05 21:17:47
 * @FilePath: /typescript/20-ts/04.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//接口多类型

interface ArticleInterface<B,C>{
  title:string,
  isLock:B,
  comments:C[]
}

type CommentType ={
  content:string,
  author?:string
}

const zd:ArticleInterface<boolean,CommentType> = {
  title:'dashu',
  isLock:true,
  comments:[{content:'dashu',author:'fugui'}]
}

console.log('zd',zd)

