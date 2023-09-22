import ArticlePreview from "../articlePreview/ArticlePreview";

const Articles = () => {
  const articles = [
    {
      key: '1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JZb1dRwy8UxASU66Oit--WrtJr0beom2ww&usqp=CAU',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      description: 'random image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      subReddit: 'Anna Kournikova',
      comments: '948',
      vote: '409',
    },
    {
      key: '2',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JZb1dRwy8UxASU66Oit--WrtJr0beom2ww&usqp=CAU',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      description: 'random image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      subReddit: 'Anna Kournikova',
      comments: '948',
      vote: '409',
    },
    {
      key: '3',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JZb1dRwy8UxASU66Oit--WrtJr0beom2ww&usqp=CAU',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      description: 'random image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      subReddit: 'Anna Kournikova',
      comments: '948',
      vote: '409',
    },
  ];

return(
 articles.map((article)=>{
  return (
  <ArticlePreview
    key={article.key}
    img={article.img}
    title={article.title}
    description={article.description}
    text={article.text}
    subReddit={article.subReddit}
    comments={article.comments}
    vote={article.vote}
  />
  )
 })
 
)

}

export default Articles;