import ReactMarkdown from "react-markdown";

const Description = ({ text, className }) => {
    const markdownText = text
    return (
        <div className={className}>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
    )
}

export default Description