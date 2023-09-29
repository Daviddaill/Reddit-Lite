import ArticlePreview from "../../features/articlePreview/ArticlePreview";
import { categories, articles } from "../../data/data";
import { useParams } from "react-router-dom";

const Category = () => {

	let { categoryId } = useParams()

	if ( ! categoryId ) {
		categoryId = 'popular';
	}
	//in the category object get the matching keys
	const articleIds = categories[categoryId];
	return (
		<div >
			{
				// each vaue in the array, return a Article preview component providing the data from that article
				articleIds?.map(id => {
					console.log(id)
					const article = articles[id];
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

export default Category;