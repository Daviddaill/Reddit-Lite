import { screen, render, fireEvent } from "@testing-library/react"
import SubReddit from "./SubReddit"

describe('subReddit component', () => {

    it('should render', () => {
        //render a component
        render(<SubReddit subReddit="jordan" vote="12" comments="45" className="my class" />)
        //find elements
        const containerElement = screen.getByTestId('subReddit')

        //assert
        expect(containerElement).toBeInTheDocument()

    })
    it('should render subreddit Name pass by props ', () => {
        //render a component
        render(<SubReddit subReddit="jordan" vote="12" comments="45" className="my class" />)
        //find elements
        const subReddit = screen.getByLabelText('subreddit name')
        //assert    
        expect(subReddit.textContent).toBe('jordan')
    })
    it('should render comments amount pass by props ', () => {
        //render a component
        render(<SubReddit subReddit="jordan" vote="12" comments="45" className="my class" />)
        //find elements
        const comment = screen.getByLabelText('number of comments')
        //assert    
        expect(comment.textContent).toBe('45')
    })
    it('should render votes amount pass by props ', () => {
        //render a component
        render(<SubReddit subReddit="jordan" vote="12" comments="45" className="my class" />)
        //find elements
        const votes = screen.getByLabelText('number of votes')
        //assert    
        expect(votes.textContent).toBe('12')
    })
})