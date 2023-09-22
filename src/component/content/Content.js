import Articles from '../../features/articles/Articles';
import Article from '../../features/article/Article';
import contentCSS from './content.module.css'

function Content(){
    return (
        <main className={contentCSS.content}>
        <Articles />
        <Article />
       </main>
    )
}

export default Content;