import ArticlePreview from "../../features/articlePreview/ArticlePreview";
//import {  articles } from "../../data/data";
import {   useSearchParams } from "react-router-dom";
import { selectAllArticles, isLoading, searchByTerm } from "./searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//import { getKeysBySearchTerm } from "../../util/helperFunctions";



const Search = () => {
	//extract the searchParams  object
    const [ searchParams ] = useSearchParams();
	const dispatch = useDispatch();
    //get the search query
	const searchTerm= searchParams.get('search');
	//get the articles object
	const articlePreviews = useSelector(selectAllArticles);
	//get the status
	const isLoadingPreviews = useSelector(isLoading);

	useEffect(() => {
		dispatch(searchByTerm(searchTerm));
	}, [dispatch, searchTerm]);
 
	if (isLoadingPreviews) {
	  return <p>Loading...</p>;
	}
  
	return (
		<div >
			{
               		articlePreviews.map(article => {
					return (<ArticlePreview
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

export default Search;