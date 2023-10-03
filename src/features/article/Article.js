import { useParams } from 'react-router-dom';
import articlesCSS from './article.module.css'
import Title from '../title/Title';
import Description from '../description/Description';
import Media from '../media/Media'
import SubReddit from '../subReddit/SubReddit';
import Comments from '../comments/Comments';
import Loading from '../../component/loading/Loading'
import ErrorPage from '../../component/errorPage/ErrorPage'
//import { articles as data } from '../../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingArticle, selectArticle, loadArticleById, selectComments, hasErrorArticle } from './articleSlice';
import { useEffect } from 'react';

function Article() {
	const dispatch = useDispatch();
	const article = useSelector(selectArticle);
  const commentList= useSelector(selectComments);
	const isLoading = useSelector(isLoadingArticle);
  const hasError= useSelector(hasErrorArticle)
  const { id }= useParams()
 
  useEffect(() => {
   dispatch(loadArticleById(id));
  }, [dispatch, id]);
 
	if (isLoading) {
	  return(<Loading/>)
	}

  if(hasError){
    return( <ErrorPage />)	
  }



  const { img, title, description, text, subReddit, comments, vote} = article;
  
  return (
    <section className={articlesCSS.card} aria-label={'article'}>
      <Title className={articlesCSS.title} title={title} />
      <Description className={articlesCSS.description} text={text} preview={false} />
      <div className={articlesCSS.mediaContainer}>
      <Media className={articlesCSS.media} source={img} description={description} />
      <SubReddit className={articlesCSS.subReddit} subReddit={subReddit} vote={vote} comments={comments} />
      </div>
      <div className={articlesCSS.comments}>
        <Comments commentList={commentList}/>
      </div>
      
    </section>
  )
}

export default Article;