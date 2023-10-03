import articleCSS from './articlePreview.module.css'
import Title from '../title/Title';
import Media from '../media/Media';
import SubReddit from '../subReddit/SubReddit';
import { Link } from 'react-router-dom';


function ArticlePreview({ id, img, title, description, text, subReddit, comments, vote }) {
  return (
    <div className={articleCSS.card} aria-label='article-preview' data-testid="article-preview">
      <Link to={`/articles/${id}`}  className={articleCSS.container}>

        <figure className={articleCSS.figure} id={articleCSS.figure}>
          <Media
            source={img}
            description={description}
            className={articleCSS.media} />
        </figure>
        <Title title={title} className={articleCSS.title} />
        <SubReddit className={articleCSS.subReddit} vote={vote} comments={comments} subReddit={subReddit} type='preview' />
      </Link>
    </div>
  )
}

export default ArticlePreview;