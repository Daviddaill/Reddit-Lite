import navCss from './nav.module.css'

function Nav(){
    return (
        <nav className='nav' id='nav'>
            <ul className={navCss.ul}>
                <li className={navCss.li}>Popular </li>
                <li className={navCss.li}>Cinema </li>
                <li className={navCss.li}>Sport </li>
                <li className={navCss.li}>News </li>
                <li className={navCss.li}>Science </li>
            </ul>
        </nav>
    )
}

export default Nav