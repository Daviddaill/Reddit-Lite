import articleCSS from './article.module.css'
import Title from '../title/Title';
import Description from '../description/Description';
import Media from '../media/Media'
import SubReddit from '../subReddit/SubReddit';


function Article(){
    const text= 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';

    return (
        <section className={articleCSS.card} aria-label='read article: '> 
         <Title className={articleCSS.title} title='Article 1'/>
         <Description className={articleCSS.description} text={text} preview={false} />
         <Media className={articleCSS.media} source={"https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png"} description='description here'/>
         <SubReddit subReddit='David d.'  vote='234' comments='43'/>
        </section>
    )
}

export default Article;