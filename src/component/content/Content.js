import Articles from '../../features/articles/Articles';
import Article from '../../features/article/Article';
//import contentStyle from './content.module.css'

function Content(){
    return (
        <main className='content'>
        <Articles />
        <Article />
       </main>
    )
}

export default Content;