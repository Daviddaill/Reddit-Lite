import navCSS from './nav.module.css'
import { NavLink } from 'react-router-dom'

const categories = [
	{ url: 'popular', title: "Popular" },
	{ url: 'sports', title: "Sports" },
	{ url: 'news', title: "News" },
	{ url: 'science', title: "Science" },
]

function Nav() {
	return (
		<nav className={navCSS.nav} id='nav'>
			<ul className={navCSS.ul}>
				{
					categories.map((category, index) => {
						return (
							<NavLink className={({ isActive }) => isActive? navCSS.activeNavLink : navCSS.inactiveNavLink} to={category.url} key={index}>
								<li className={navCSS.li} key={index}> {category.title} </li>
							</NavLink>
						)
					})
				}
			</ul>
		</nav>
	)
}

export default Nav