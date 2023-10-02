
import {
  Route, BrowserRouter, Routes
} from "react-router-dom";
import './App.css'
import AppLayout from './AppLayout';
import Articles from "../features/articles/Articles";
import Article from "../features/article/Article";
import Category from "../features/category/Category";
import Search from "../features/search/Search";
import ErrorPage from "../component/errorPage/ErrorPage";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} errorElement={<ErrorPage/>} >
          <Route index element={<Category />} />
         <Route path=":categoryName" element={<Category />} />         
          <Route path="/articles" element={<Articles />} ></Route>
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/search" element={<Search />} />

        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
