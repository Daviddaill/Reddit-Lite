import { configureStore } from '@reduxjs/toolkit';
import  articlePreviewsReducer  from '../features/category/categorySlice';
import articleReducer from '../features/article/articleSlice'; 
import searchReducer from '../features/search/searchSlice';


export const store = configureStore({
  reducer: {
    articlePreviews: articlePreviewsReducer,
    article: articleReducer,
    search: searchReducer,
  },
});
