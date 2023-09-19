import ArticlesPreview from '../../features/articlesPreview/ArticlesPreview';
import Article from '../../features/article/Article';
import contentStyle from './content.module.css'

function Content(){
    return (
        <main className='content'>
        <ArticlesPreview />
        <Article />
       </main>
    )
}

export default Content;