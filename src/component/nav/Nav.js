import navCSS from './nav.module.css'
import { NavLink } from 'react-router-dom'

const categories = [
	{ url: 'popular', title: "Popular" },
	{ url: 'sport', title: "Sport" },
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
							<NavLink className={({ isActive }) => isActive? navCSS.activeNavLink : navCSS.inactiveNavLink} to={category.url}>
								<li className={navCSS.li}> {category.title} </li>
							</NavLink>
						)
					})
				}
			</ul>
		</nav>
	)
}

export default Nav