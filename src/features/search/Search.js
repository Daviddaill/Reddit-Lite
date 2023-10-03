import ArticlePreview from "../../features/articlePreview/ArticlePreview";
import Loading from "../../component/loading/Loading";
import ErrorPage from '../../component/errorPage/ErrorPage'
//import {  articles } from "../../data/data";
import {   useSearchParams } from "react-router-dom";
import { selectAllArticles, isLoading, searchByTerm , hasError} from "./searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//import { getKeysBySearchTerm } from "../../util/helperFunctions";
import css from './search.module.css';


const Search = () => {
	//extract the searchParams  object
    const [ searchParams ] = useSearchParams();
	const dispatch = useDispatch();
    //get the search query
	const searchTerm= searchParams.get('search');
	//get the articles object
	const articlePreviews = useSelector(selectAllArticles);
	const hasErrorSearch = useSelector(hasError)
	//get the status
	const isLoadingSearch = useSelector(isLoading);

	useEffect(() => {
		dispatch(searchByTerm(searchTerm));
	}, [dispatch, searchTerm]);
 
	if (isLoadingSearch) {
		return(<Loading/>)
	  }
	
	  if (hasErrorSearch) {
		return( <ErrorPage />)	
	}
  
	return (
		<div className={css.container}>
			{
               		articlePreviews.map(article => {
					return (<ArticlePreview
						key={article.id}
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