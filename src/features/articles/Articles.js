import ArticlePreview from "../articlePreview/ArticlePreview";
import { articles } from "../../data/data";
import style from './articles.module.css'

const Articles = () => {


  return (
    <div className={style.container}>
      {
        articles.map((article) => {
          return (                     
            <ArticlePreview
              key={article.id}
              id={article.id}
              img={article.img}
              title={article.title}
              description={article.description}
              text={article.text}
              subReddit={article.subReddit}
              comments={article.comments}
              vote={article.vote}
            />
            
          )
        })
      }
    </div>
  )
}

export default Articles;