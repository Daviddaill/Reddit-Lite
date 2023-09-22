import articleCSS from './articlePreview.module.css'
import Title from '../title/Title';
import Media from '../media/Media';
import Description from '../description/Description';
import SubReddit from '../subReddit/SubReddit';


function ArticlePreview({ img, title, description, text, subReddit, comments, vote }) {
  return (
    <div className={articleCSS.card} >
      <Title title={title} className={articleCSS.titleMobile} /> {/* title use only in mobile screen size */}
      <div className={articleCSS.mainDiv}>
        <figure className={articleCSS.section} id={articleCSS.figure}>
          <Media source={img} description={description} className={articleCSS.media} />
        </figure>
        <article className={articleCSS.section} id={articleCSS.article}>
          <Title className={articleCSS.title} title={title} />
          <Description className={articleCSS.description} text={text} />
          <SubReddit className={articleCSS.subReddit} vote={vote} comments={comments} subReddit={subReddit} type='preview' />
        </article>
      </div>
    </div>
  )
}

export default ArticlePreview;