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

