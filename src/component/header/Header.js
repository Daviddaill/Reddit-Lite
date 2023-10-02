import headerCSS from './header.module.css';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Header = ({ searchTerm, setSearchTerm,  navVisible, setNavVisible }) => {

	//const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const handleMenu = () => {
		const element = document.getElementById("nav");
		if (!navVisible) {
			element.style.display = 'flex';
		} else {
			element.style.display = 'none';
		}
		setNavVisible(!navVisible);
	}

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent form submission
		if (searchTerm !=="") {
			const searchQueryParams = {
				search: searchTerm
			}
			// use createSearchParams which takes an object and transforms it to a query string of the form order=ASC
			const searchQueryString = createSearchParams(searchQueryParams);
			// force a navigate by passing in an object with pathname indicating that path to navigate and search indicating the query parameters to append
			navigate({
				pathname: '/search',
				search: `?${searchQueryString}`
			})

			setSearchTerm(''); // Clear the input field
		};
	}
	return (
		<header title="header" className={headerCSS.header}>
			<h1 className={headerCSS.logo}>Reddit<span className={headerCSS.logoSpan}>Lite</span></h1>
			<form className={headerCSS.searchContainer} onSubmit={handleSubmit} >
				<input
					type="text"
					className={headerCSS.searchInput}
					id='searchInput'
					placeholder="Search..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}					
				/>
				<button type='submit' id={headerCSS.searchIcon} data-testid="submit-button">
					<i className="fas fa-search search-icon"  ></i>
				</button>
			</form>
			<div className={headerCSS.menu} onClick={handleMenu} aria-label='menu'>
				<i className="fa-solid fa-ellipsis-vertical"></i>
			</div>
		</header>
	);
}

export default Header;
