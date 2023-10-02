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
					categories.map((category) => {
						return (
							<NavLink className={({ isActive }) => isActive? navCSS.activeNavLink : navCSS.inactiveNavLink} to={category.url} key={category.id}>
								<li className={navCSS.li} key={`li${category.id}`}> {category.title} </li>
							</NavLink>
						)
					})
				}
			</ul>
		</nav>
	)
}

export default Nav