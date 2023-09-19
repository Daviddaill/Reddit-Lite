import footerCss from './footer.module.css'

function Footer(){
    return(
        <footer className='footer'>
        <a href='./App' className={footerCss.logo}>Reddit<span className={footerCss.logoSpan}>Lite</span></a>
        <div className={footerCss.contact}>
        <p> <a href="tel:+94 766 553 844"><i className="fa-solid fa-mobile-screen fa-1x"></i></a></p>
        <p> <a href="mailto: dailleredavid@gmail.com"><i className="fa-solid fa-envelope fa-1x"></i></a> </p>
        <p><a href="https://github.com/Daviddaill"><i className="fa-brands fa-github fa-1x"></i></a></p>
        <p><a href="https://www.linkedin.com/in/david-daillere-7a1103161/"><i
                    className="fa-brands fa-linkedin fa-1x"></i></a></p>      
        </div>
      </footer>
    )
}
export default Footer;