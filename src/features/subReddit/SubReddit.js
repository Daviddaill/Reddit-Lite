import style from './subReddit.module.css'

const SubReddit = ({ subReddit, votes, comments, className }) => {

  return (
    <div className={className} data-testid='subReddit'>
      {/* Votes */}
      <div className={style.section} aria-label='number of votes'>
        <i className="fa-solid fa-arrow-up"></i>
        <p>{votes}</p>
      </div>
      {/* Comments */}
      <div className={style.section} aria-label='number of comments'>
        <i className="fa-regular fa-message"></i>
        <p>{comments}</p>
      </div>
      {/* Author's Name */}
      <div className={style.section} aria-label='subreddit name'>
        <i className="fa-brands fa-reddit-alien"></i>
        <p className={style.name}>{subReddit}</p>
      </div>
    </div>
  )
}

export default SubReddit;