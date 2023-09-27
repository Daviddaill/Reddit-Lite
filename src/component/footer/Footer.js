import footerCSS from './footer.module.css'

function Footer() {
  return (
    <footer title='footer' className={footerCSS.footer}>
      <a href='./App' className={footerCSS.logo}>Reddit<span className={footerCSS.logoSpan}>Lite</span></a>
      <div className={footerCSS.contact}>
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