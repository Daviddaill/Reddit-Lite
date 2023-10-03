import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const loadArticleById = createAsyncThunk(
	'article/loadArticleById',
	async (id) => {
		const redditUrl = `https://www.reddit.com/${id}.json`;
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

export const articleSlice = createSlice({
	name: 'article',
	initialState: {
		article: [],
		comments:[],
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
				console.log(action.payload)
				state.isLoadingArticle = false;
				//get the array
				const res = action.payload[0].data.children[0].data
				state.article = {
					title: res.title,
					id: res.id,
					text: res.selftext,
					img: res.thumbnail,
					description: "",
					vote: res.score,
					comments: res.num_comments,
					subReddit: res.author,
				};
				const commentsData = action.payload[1].data.children
				const comments=[]
				commentsData.map(comment=>{
					 comments.push({
						author: comment.data.author,
						text: comment.data.body
					})
				});
				state.comments= comments
				
			})
			.addCase(loadArticleById.rejected, (state, action) => {
				state.isLoadingArticle = false;
				state.hasError = true;
				state.article = {};
			})
	},
});

export const selectArticle = (state) => state.article.article;
export const selectComments= (state) => state.article.comments

export const isLoadingArticle = (state) => state.article.isLoadingArticle;
export const hasErrorArticle= (state) => state.article.hasError

export default articleSlice.reducer;