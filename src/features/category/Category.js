import ArticlePreview from "../articlePreview/ArticlePreview";
import Loading from "../../component/loading/Loading";
import ErrorPage from '../../component/errorPage/ErrorPage'
import { useParams } from "react-router-dom";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadByCategory, isLoading, selectAllPreviews, hasError } from "./categorySlice";
import style from './category.module.css'

const Category = () => {
	const dispatch = useDispatch();
	//get State from categorySLice.js:
	const articlePreviews = useSelector(selectAllPreviews);
	const isLoadingPreviews = useSelector(isLoading);
	const hasLoadingError= useSelector(hasError);
	let { categoryName } = useParams();
 
	if (!categoryName) {
	  categoryName = 'popular';
	}
	//reload Data everytime change are made to the state or when a new category is selected:
	useEffect(() => {
		dispatch(loadByCategory(categoryName));
	}, [dispatch, categoryName]);

	if (isLoadingPreviews) {
	  return  <Loading />  
	}

	if (hasLoadingError) {
		return( <ErrorPage />)	
	}
 
	//Render a list of Article Previews 
	return (
	  <div className={style.container}>
		 {articlePreviews.map((article) => (
			<ArticlePreview
			  key={article.id} 
			  id={article.id}
			  img={article.img}
			  title={article.title}
			  description={article.description}
			  text={article.text}
			  subReddit={article.subReddit}
			  comments={article.comments}
			  score={article.score}
			/>
		 ))}
	  </div>
	);
 };
 
 export default Category;
 

