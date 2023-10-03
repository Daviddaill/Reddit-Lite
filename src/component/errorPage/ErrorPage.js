import css from './errorPage.module.css'
export default function ErrorPage() {
 
  return (
    <div id="error-page" className={css.container}>
      <h3 className={css.title}>Oops!</h3>
      <p className={css.text} >Rate Limit Exceeded, please wait a few minutes...</p>

      <img className={css.gif} src='https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif' alt="error icon"></img>
    </div>
  );
}