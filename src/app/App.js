
import {
	Route, BrowserRouter, Routes
} from "react-router-dom";
import './App.css'
import AppLayout from './AppLayout';
import Article from "../features/article/Article";
import Category from "../features/category/Category";
import Search from "../features/search/Search";

function App() {


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />} >
					{/* display popular articles in home page */}
					<Route index element={<Category />} />
					{/* display  articles preview for the category selected */}
					<Route path=":categoryName" element={<Category />} />
					{/* display the article by accessing its ID */}
					<Route path="/articles/:id" element={<Article />} />
					{/* search an article using the url query */}
					<Route path="/search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>


	);
}

export default App;
