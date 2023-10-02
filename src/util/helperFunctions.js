
/** return an array of keys for all articles that has the term input in their title  **/
export const getKeysBySearchTerm = (input, articleList) => {
  const keys = [];
  // Replace with real data later on
  // Look for objects where title contains input and push their keys into the array
  articleList?.forEach(({ title, id }) => {
    if (input && title.toLowerCase().includes(input.toLowerCase())) {
      keys.push(id);
    }
  });
  return keys;
};

export const getDataByCategory = (category) => {
  const redditUrl = `https://www.reddit.com/r/${category}.json`;
  
  return fetch(redditUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const res = data.data.children;
      const list = res.map((article) => ({
        id: article.data.id,
        title: article.data.title,
        text: article.data.author_flair_text,
        img: article.data.thumbnail,
        description: "",
        vote: article.data.score,
        comments: article.data.num_comments,
        subReddit: article.data.subReddit,
      }));
      return list;
    })
    .catch((error) => {
      console.error(error);
      throw error; // Re-throw the error to handle it in the component
    });
};

