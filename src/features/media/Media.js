
const Media=({source,description, className})=>{

    return(
        <img className={className} src={source} alt={description} width='80%' height='auto'/>
    )
}

export default Media