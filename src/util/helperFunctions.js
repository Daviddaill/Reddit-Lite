
/** return an array of keys for all articles that has the term input in their title  **/
export const getKeysBySearchTerm = (input, articleList) => {
    const keys = [];

    // Replace with real data later on
  
  
    // Look for objects where title contains input and push their keys into the array
    articleList?.forEach(({title, key}) => {
      if ( input && title.toLowerCase().includes(input.toLowerCase())) {
        keys.push(key);
      }
    });
    return keys; 
  };
  