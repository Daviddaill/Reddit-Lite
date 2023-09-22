import {articles} from '../data/data'
/** return an array of keys for all articles that has the term input in their title  **/
export const getKeysBySearchTerm = (input) => {
    const keys = [];

    // Replace with real data later on
    const arr= articles

    // Look for objects where title contains input and push their keys into the array
    arr.forEach(({title, key}) => {
      if (title.toLowerCase().includes(input.toLowerCase())) {
        keys.push(key);
      }
    });
    return keys;
  };
  