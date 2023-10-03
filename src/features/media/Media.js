//**future improvement:** 
//get the proper media and choose from video or image
//get a proper default image maybe imported into the app
const Media=({source, className})=>{
const defaultImg= 'https://www.apalaweb.org/wp-content/plugins/pt-content-views-pro/public/assets/images/default_image.png'

    return(
        <img className={className} src={source!=='default' && source!=='self' && source!=='' ? source: defaultImg} alt='' width='98%' height='auto'/>
    )
}

export default Media