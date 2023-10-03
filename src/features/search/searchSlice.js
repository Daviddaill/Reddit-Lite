import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const searchByTerm = createAsyncThunk(
  'search/searchByTerm',
  async (term) => {
    const redditUrl = `https://www.reddit.com/search.json?q=${term}`;
    const response = await fetch(redditUrl);
   // Check the HTTP status code and handle it
    if (!response.ok) {
      if (response.status === 429) {
        // Handle the 429 error   
        throw new Error('Rate limit exceeded');
      } 
    }
    const json = await response.json();
    return json;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    articles: [],
    isLoadingSearch: false,
    hasError: false
  },
  //for all async thunk action use extra reducers instead of reducer
  extraReducers: (builder) => {
   //The recommended way of using createReducer is the builder callback notation, as it works best with TypeScript and most IDEs
    builder
      .addCase(searchByTerm.pending, (state) => {
        state.isLoadingSearch = true;
        state.hasError = false;
      })
      .addCase(searchByTerm.fulfilled, (state, action) => {
        state.isLoadingSearch = false;
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
      .addCase(searchByTerm.rejected, (state, action) => {
        state.isLoadingSearch = false;
        state.hasError = true;
        state.articles = [];
      })
  },
});

export const selectAllArticles = (state) => state.search.articles;

export const isLoading = (state) => state.search.isLoadingSearch;
export const hasError= (state) => state.search.hasError

export default searchSlice.reducer;