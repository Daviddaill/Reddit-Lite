import headerCSS from './header.module.css';
import { getKeysBySearchTerm } from '../../util/helper function';

const  Header=({searchTerm, setSearchTerm, setKeys, navVisible, setNavVisible})=> {
	

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
			const searchResults = getKeysBySearchTerm(searchTerm);
			setKeys(searchResults);
			console.log(searchResults);
			setSearchTerm(''); // Clear the input field
		};

		return (
			<header className={headerCSS.header}>
				<h1 className={headerCSS.logo}>Reddit<span className={headerCSS.logoSpan}>Lite</span></h1>
				<form className={headerCSS.searchContainer} onSubmit={handleSubmit}>
					<input
						type="text"
						className={headerCSS.searchInput}
						id='searchInput'
						placeholder="Search..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button type='submit' id={headerCSS.searchIcon}>
						<i className="fas fa-search search-icon"  ></i>
					</button>
				</form>
				<div className={headerCSS.menu} onClick={handleMenu}>
					<i className="fa-solid fa-ellipsis-vertical"></i>
				</div>
			</header>
		);
	}

	export default Header;
