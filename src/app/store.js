import { configureStore } from '@reduxjs/toolkit';
import  articlePreviewsReducer  from '../features/category/categorySlice';
import articleReducer from '../features/article/articleSlice'; 
import searchReducer from '../features/search/searchSlice';


export const store = configureStore({
  reducer: {
    // Add the 'articlePreviews' slice reducer to the store
    articlePreviews: articlePreviewsReducer,
    // Add the 'article' slice reducer to the store
    article: articleReducer,
    // Add the 'search' slice reducer to the store
    search: searchReducer,
  },
});
