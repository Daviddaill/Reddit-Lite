import ArticlePreview from "../../features/articlePreview/ArticlePreview";
import {  articles } from "../../data/data";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { getKeysBySearchTerm } from "../../util/helperFunctions";



const Search = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    
	const search= searchParams.get('search');
  
    const articleIds = getKeysBySearchTerm(search, articles);
    console.log(articleIds)
	return (
		<div >
			{
               		articleIds.map(id => {
					console.log(id)
                    const index= id-1
					const article = articles[index];
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