import ArticlePreview from "../articlePreview/ArticlePreview";
import { articles } from "../../data/data";


const Articles = () => {


  return (
    <div >
      {
        articles.map((article) => {
          return (
                      
            <ArticlePreview
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