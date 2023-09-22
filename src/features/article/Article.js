import articlesCSS from './article.module.css'
import Title from '../title/Title';
import Description from '../description/Description';
import Media from '../media/Media'
import SubReddit from '../subReddit/SubReddit';


function Article() {
  const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';
  return (
    <section className={articlesCSS.card} aria-label='read article: '>
      <Title className={articlesCSS.title} title='Article 1' />
      <Description className={articlesCSS.description} text={text} preview={false} />
      <div className={articlesCSS.mediaContainer}>
      <Media className={articlesCSS.media} source={"https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png"} description='description here' />
      <SubReddit className={articlesCSS.subReddit} subReddit='David d.' vote='234' comments='43' />
      </div>
      
    </section>
  )
}

export default Article;