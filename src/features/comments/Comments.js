import { useEffect, useState } from 'react';
import commentsCSS from './comments.module.css';
import ReactMarkdown from "react-markdown";

function Comments({ commentList }) {
	const [showReplies, setShowReplies] = useState(false);

	const handleReplies = () => {
		setShowReplies(!showReplies);
	}


	if (commentList.length === 0) {
		return
	}

	return (
		<div className={commentsCSS.container}>
			<h3>Comments: </h3>
			<div className={commentsCSS.comments}>
				{commentList.map((comment, index) => {
					return (
						<div className={commentsCSS.comment}>
							<p className={commentsCSS.author}>{comment.author}</p>
							{/* Comments may be written in Markdown, This component will transform MD into html:*/}
							<ReactMarkdown className={commentsCSS.text}>{comment.text}</ReactMarkdown>
							<p className={commentsCSS.replyButton} onClick={handleReplies}>{showReplies?'Hide Reply':'Show Reply'}</p>
							<div className={showReplies? commentsCSS.reply: commentsCSS.hideReply}>
								{comment.replies?.map(reply => {
									return (
										<div className={commentsCSS.comment}>
											<p className={commentsCSS.author}>{reply.data.author}</p>
											{/* Comments may be written in Markdown, This component will transform MD into html:*/}
											<ReactMarkdown className={commentsCSS.text}>{reply.data.body}</ReactMarkdown>
										</div>
									)

								})}
							</div>


						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Comments