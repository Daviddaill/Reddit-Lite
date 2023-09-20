const Description=({text,className, preview})=>{

    //check if preview, show only a certain amount of characters & add ...
    if(preview){
         
    }
    else{
    //if ! preview return the entire text
        return(
            <p className={className}> {text} </p>
        )
    }   
}

export default Description