import ArticlePreview from "../articlePreview/ArticlePreview";
import Loading from "../../component/loading/Loading";
import ErrorPage from '../../component/errorPage/ErrorPage'
import { useParams } from "react-router-dom";
import {  useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadByCategory, isLoading, selectAllPreviews, hasError } from "./categorySlice";
import style from './category.module.css'

const Category = () => {
	const dispatch = useDispatch();
	const articlePreviews = useSelector(selectAllPreviews);
	const isLoadingPreviews = useSelector(isLoading);
	const hasLoadingError= useSelector(hasError);
	let { categoryName } = useParams();
 
	if (!categoryName) {
	  categoryName = 'popular';
	}

 
	useEffect(() => {
		dispatch(loadByCategory(categoryName));
	}, [dispatch, categoryName]);

	
 
	if (isLoadingPreviews) {
	  return  <Loading />  
	}

	if (hasLoadingError) {
		return( <ErrorPage />)	
	}
 
	return (
	  <div className={style.container}>
		 {articlePreviews.map((article) => (
			<ArticlePreview
			  key={article.id} // Don't forget to add a unique key for each element in the map
			  id={article.id}
			  img={article.img}
			  title={article.title}
			  description={article.description}
			  text={article.text}
			  subReddit={article.subReddit}
			  comments={article.comments}
			  vote={article.vote}
			/>
		 ))}
	  </div>
	);
 };
 
 export default Category;
 

