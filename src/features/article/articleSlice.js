import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const loadArticleById = createAsyncThunk(
	'article/loadArticleById',
	async (id) => {
		const redditUrl = `https://www.reddit.com/${id}.json`;
		const data = await fetch(redditUrl);
		const json = await data.json();
		console.log(id)
		return json;
	}
);

export const articleSlice = createSlice({
	name: 'article',
	initialState: {
		article: [],
		isLoadingArticle: false,
		hasError: false
	},
	//for all async thunk action use extra reducers instead of reducer
	extraReducers: (builder) => {
		//The recommended way of using createReducer is the builder callback notation, as it works best with TypeScript and most IDEs
		builder
			.addCase(loadArticleById.pending, (state) => {
				state.isLoadingArticle = true;
				state.hasError = false;
			})
			.addCase(loadArticleById.fulfilled, (state, action) => {
				state.isLoadingArticle = false;
				//get the array
				const res = action.payload[0].data.children[0].data
				state.article = {
					title:res.title,
					id: res.id,
					text: res.selftext,
					img: res.thumbnail,
					description: "",
					vote: res.score,
					comments: res.num_comments,
					subReddit: res.author,
				}
					;
				//console.log(action.payload.data)
				
			})
			.addCase(loadArticleById.rejected, (state, action) => {
				state.isLoadingArticle = false;
				state.hasError = true;
				state.article = {};
			})
	},
});

export const selectArticle = (state) => state.article.article;

export const isLoadingArticle = (state) => state.article.isLoadingArticle;

export default articleSlice.reducer;