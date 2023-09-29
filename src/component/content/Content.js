import Articles from '../../features/articles/Articles';
import Article from '../../features/article/Article';
import contentCSS from './content.module.css'
import { Outlet } from 'react-router-dom';

function Content(){
    return (
        <main className={contentCSS.content}>
        <Outlet />
       </main>
    )
}

export default Content;