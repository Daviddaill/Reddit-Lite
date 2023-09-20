import style from './subReddit.module.css'

const SubReddit=({subReddit,vote, comments})=>{


    return (
        <div className={style.div}>
            <div  className={style.section}>
            <i className="fa-solid fa-arrow-up"></i>
                <p>{vote}</p>
            </div>
            <div className={style.section}>
            <i className="fa-regular fa-message"></i>
                <p>{comments}</p>
            </div>
            <div className={style.section}>
                <p>posted By: <span> {subReddit} </span></p>
            </div>
        </div>
    )
}

export default SubReddit;