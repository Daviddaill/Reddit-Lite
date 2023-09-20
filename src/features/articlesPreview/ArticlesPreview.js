import articlesCSS from './articlesPreview.module.css'
import Title from '../title/Title';

function ArticlesPreview() {
    return (
        <section className={articlesCSS.articlesPreview} aria-label='Articles Preview'>
            <div className={articlesCSS.card} >
                <Title title='card1' className={articlesCSS.title} />
            </div>
            <div className={articlesCSS.card}> preview 2...</div>
            <div className={articlesCSS.card}> previe 3...</div>
        </section>
    )
}

export default ArticlesPreview;