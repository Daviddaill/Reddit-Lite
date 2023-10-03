import loadingCSS from './loading.module.css'
function Loading(){
    return(
        <div className= {loadingCSS.container}>
		<p className= {loadingCSS.text}> loading</p>
		<img className= {loadingCSS.gif} src="https://www.valottery.com/images/spinner_green.gif" alt="loding icon"></img>
	</div>
    )
}

export default Loading;