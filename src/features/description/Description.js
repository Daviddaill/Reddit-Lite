import ReactMarkdown from "react-markdown";

//This is the optional Author's message of a post 
const Description = ({ text, className }) => {
    const markdownText = text
    return (
        <div className={className}>
            {/* Author's message may be writen in mardown, this component convert MD int HtML */}
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
    )
}

export default Description