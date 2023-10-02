import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const loadByCategory = createAsyncThunk(
  'articlePreviews/loadByCategory',
  async (category) => {
    const redditUrl = `https://www.reddit.com/r/${category}.json`;
    const data = await fetch(redditUrl);
    const json = await data.json();
    
    return json;
  }
);

export const articlePreviewsSlice = createSlice({
  name: 'articlePreviews',
  initialState: {
    articles: [],
    isLoadingArticlePreviews: false,
    hasError: false
  },
  //for all async thunk action use extra reducers instead of reducer
  extraReducers: (builder) => {
   //The recommended way of using createReducer is the builder callback notation, as it works best with TypeScript and most IDEs
    builder
      .addCase(loadByCategory.pending, (state) => {
        state.isLoadingArticlePreviews = true;
        state.hasError = false;
      })
      .addCase(loadByCategory.fulfilled, (state, action) => {
        state.isLoadingArticlePreviews = false;
        const res = action.payload.data.children;
        const list = res.map((article) => ({
        id: article.data.id,
        title: article.data.title,
        text: article.data.selftext,
        img: article.data.thumbnail,
        description: "",
        vote: article.data.score,
        comments: article.data.num_comments,
        subReddit: article.data.author,
        
      }));
      state.articles= list;
      })
      .addCase(loadByCategory.rejected, (state, action) => {
        state.isLoadingArticlePreviews = false;
        state.hasError = true;
        state.articles = [];
      })
  },
});

export const selectAllPreviews = (state) => state.articlePreviews.articles;

export const isLoading = (state) => state.articlePreviews.isLoading;

export default articlePreviewsSlice.reducer;