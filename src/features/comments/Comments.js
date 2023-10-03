import commentsCSS from './comments.module.css';
import ReactMarkdown from "react-markdown";

function Comments({ commentList }) {

	if(commentList.length===0){
		return
	}

	return (
		<div className={commentsCSS.container}>
			<h3>Comments: </h3>
			<div className={commentsCSS.comments}>
				{commentList.map(comment => {
					return (
						<div className={commentsCSS.comment}>
							<p className={commentsCSS.author}>{comment.author}</p>
							<ReactMarkdown className={commentsCSS.text}>{comment.text}</ReactMarkdown>
						</div>
					)
				})}
			</div>
		</div>

	)

}

export default Comments