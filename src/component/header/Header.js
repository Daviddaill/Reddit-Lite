import headerCSS from './header.module.css';
let toggleMenu = false;
const handleMenu = () => {
    const element = document.getElementById("nav");
    if (!toggleMenu) {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
    toggleMenu = !toggleMenu;


}

function Header() {
    return (
        <header className='header'>
            <h1 className={headerCSS.logo}>Reddit<span className={headerCSS.logoSpan}>Lite</span></h1>
            <form className={headerCSS.searchContainer}>
                <input type="text" className={headerCSS.searchInput} id='searchBtn' placeholder="Search..." />
                <i className="fas fa-search search-icon" id={headerCSS.searchIcon} type='submit'></i>
            </form>
            <div className={headerCSS.menu} onClick={handleMenu}><i class="fa-solid fa-ellipsis-vertical" ></i></div>
            
        </header>
    )
}

export default Header;