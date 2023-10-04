import { useState } from 'react';
import commentsCSS from './comments.module.css';
import ReactMarkdown from "react-markdown";

const Comment = ({comment}) => {
   const [showReplies, setShowReplies] = useState(false);

   const handleReplies = (e) => {
      setShowReplies(!showReplies);
   }

   return (
      <div className={commentsCSS.comment}>
         <p className={commentsCSS.author}>{comment.author}</p>
         {/* Comments may be written in Markdown, This component will transform MD into html:*/}
         <ReactMarkdown className={commentsCSS.text}>{comment.text}</ReactMarkdown>
         {comment.replies &&
         <p className={commentsCSS.replyButton} onClick={handleReplies}>{showReplies ? 'Hide Replies' : 'Show Replies'}</p>}
         {/* <div className={showReplies? commentsCSS.reply: commentsCSS.hideReply}> */}
         
            {comment.replies?.map(reply => {
               return (
                  <div className={showReplies? commentsCSS.reply: commentsCSS.hideReply}>
                  <div className={commentsCSS.comment}>
                     <p className={commentsCSS.author}>{reply.data.author}</p>
                     {/* Comments may be written in Markdown, This component will transform MD into html:*/}
                     <ReactMarkdown className={commentsCSS.text}>{reply.data.body}</ReactMarkdown>
                  </div>
                  </div>
               )

            })}
         
      </div>
   )
}

export default Comment;