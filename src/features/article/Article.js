import { useParams } from 'react-router-dom';
import articlesCSS from './article.module.css'
import Title from '../title/Title';
import Description from '../description/Description';
import Media from '../media/Media'
import SubReddit from '../subReddit/SubReddit';
import Comments from '../comments/Comments';
import Loading from '../../component/loading/Loading'
import ErrorPage from '../../component/errorPage/ErrorPage'
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingArticle, selectArticle, loadArticleById, selectComments, hasErrorArticle } from './articleSlice';
import { useEffect } from 'react';


function Article() {
  const dispatch = useDispatch();
  //get state from articleSlice.js
  const article = useSelector(selectArticle);
  const commentList = useSelector(selectComments);
  const isLoading = useSelector(isLoadingArticle);
  const hasError = useSelector(hasErrorArticle)
  const { id } = useParams()  //get the id from url to find article selected by user

  //dispatch state everytime ...
  useEffect(() => {
    dispatch(loadArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (<Loading />)
  }

  if (hasError) {
    return (<ErrorPage />)
  }
  //get article data from articleSlice.js 
  // Future improvement: possibility to Api call by re-using datas from the articlepreview state
  const { img, title, description, text, subReddit, comments, score } = article;

  return (
    <section className={articlesCSS.card} aria-label={'article'}>
      <div className={articlesCSS.post}>
        <Title className={articlesCSS.title} title={title} />
        {/* Author's text: */}
        <Description className={articlesCSS.description} text={text} preview={false} />
        <div className={articlesCSS.mediaContainer}>
          <Media className={articlesCSS.media} source={img} description={description} />
          {/* SubReddit component display author,  number of comments and number of votes: */}
          <SubReddit className={articlesCSS.subReddit} subReddit={subReddit} score={score} comments={comments} />
        </div>
      </div>
      <div className={articlesCSS.comments}>
        <Comments commentList={commentList} />
      </div>
    </section>
  )
}

export default Article;