import ArticlePreview from "../articlePreview/ArticlePreview";
//import { categories, articles } from "../../data/data";
import { useParams } from "react-router-dom";
import { getDataByCategory } from "../../util/helperFunctions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadByCategory, isLoading, selectAllPreviews } from "./categorySlice";


const Category = () => {
	const dispatch = useDispatch();
	const articlePreviews = useSelector(selectAllPreviews);
	const isLoadingPreviews = useSelector(isLoading);
	let { categoryName } = useParams();
 
	if (!categoryName) {
	  categoryName = 'popular';
	}

 
	useEffect(() => {
		dispatch(loadByCategory(categoryName));
	}, [dispatch, categoryName]);
 
	if (isLoadingPreviews) {
	  return <p>Loading...</p>;
	}
 
	return (
	  <div>
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
 

