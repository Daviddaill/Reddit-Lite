import articleCSS from './articlePreview.module.css'
import Title from '../title/Title';
import Media from '../media/Media';
import Description from '../description/Description';
import SubReddit from '../subReddit/SubReddit';
import { Link } from 'react-router-dom';


function ArticlePreview({id, img, title, description, text, subReddit, comments, vote }) {
  return (
    <div className={articleCSS.card} aria-label='article-preview' data-testid="article-preview">
      <Link to={`/articles/${id-1}`}>
      <Title title={title} className={articleCSS.titleMobile} /> {/* title use only in mobile screen size */}
      <div className={articleCSS.mainDiv}>
        <figure className={articleCSS.section} id={articleCSS.figure}>
          <Media source={img} description={description} className={articleCSS.media} />
        </figure>
        <article className={articleCSS.section} id={articleCSS.article}>
          <Title className={articleCSS.title} title={title} ariaLabel="preview-title" />
          <Description className={articleCSS.description} text={text}  ariaLabel="preview-text"/>
          <SubReddit className={articleCSS.subReddit} vote={vote} comments={comments} subReddit={subReddit} type='preview' />
        </article>
      </div>
      </Link>
      
    </div>
  )
}

export default ArticlePreview;