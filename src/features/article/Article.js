import articlesCSS from './article.module.css'
import Title from '../title/Title';
import Description from '../description/Description';
import Media from '../media/Media'
import SubReddit from '../subReddit/SubReddit';
import { articles as data } from '../../data/data';



function Article() {
  const {key, img, title, description, text, subReddit, comments, vote} = data[0];

  return (
    <section className={articlesCSS.card} aria-label={'article'}>
      <Title className={articlesCSS.title} title={title} />
      <Description className={articlesCSS.description} text={text} preview={false} />
      <div className={articlesCSS.mediaContainer}>
      <Media className={articlesCSS.media} source={img} description={description} />
      <SubReddit className={articlesCSS.subReddit} subReddit={subReddit} vote={vote} comments={comments} />
      </div>
      
    </section>
  )
}

export default Article;