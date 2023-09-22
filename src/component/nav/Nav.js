import navCSS from './nav.module.css'

function Nav(){
    return (
        <nav className={navCSS.nav} id='nav'>
            <ul className={navCSS.ul}>
                <li className={navCSS.li}>Popular </li>
                <li className={navCSS.li}>Cinema </li>
                <li className={navCSS.li}>Sport </li>
                <li className={navCSS.li}>News </li>
                <li className={navCSS.li}>Science </li>
            </ul>
        </nav>
    )
}

export default Nav