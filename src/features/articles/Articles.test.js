import {screen, render} from "@testing-library/react";
import Articles from "./Articles";

jest.mock('../../data/data', ()=>({
    articles: [
        {
            key: 'mock1',
            img: 'https://example.com/mock-image1.jpg',
            title: 'Mock Title 1',
            description: 'Mock Description 1',
            text: 'Mock Text 1',
            subReddit: 'Mock SubReddit 1',
            comments: '11',
            vote: '110',
        },
        {
            key: 'mock2',
            img: 'https://example.com/mock-image2.jpg',
            title: 'Mock Title 2',
            description: 'Mock Description 2',
            text: 'Mock Text 2',
            subReddit: 'Mock SubReddit 2',
            comments: '22',
            vote: '220',
        },
    ]
}))

describe('Articles component',()=>{
    it('should render the right amount of articles',()=>{
        render(<Articles/>)
        const articlesELement= screen.getAllByLabelText(/article-preview/i);
        expect(articlesELement.length).toBe(2);
    })

    it('should render the correct data',()=>{
        render(<Articles/>)
       
        const titlesElement = screen.queryAllByRole('heading');
        const imgsElement= screen.getAllByRole('img')    
        const subRedditElements= screen.getAllByLabelText("subreddit name") 
        const voteElements= screen.getAllByLabelText("number of votes") 
        const commentsElements= screen.getAllByLabelText("number of comments") 

        //Assert
        // expect(screen.getByTestId('article-preview')).toBeInTheDocument();
         expect(titlesElement[0].textContent).toBe('Mock Title 1'); 
         expect(titlesElement[2].textContent).toBe('Mock Title 2');

        expect(imgsElement[0]).toHaveAttribute('src', 'https://example.com/mock-image1.jpg') 
        expect(imgsElement[1]).toHaveAttribute('src', 'https://example.com/mock-image2.jpg') 
        //expect(textElement.textContent).toBe(mockProps.text);
        expect(subRedditElements[0]).toHaveTextContent('Mock SubReddit 1')
        expect(subRedditElements[1]).toHaveTextContent('Mock SubReddit 2') 

        expect(voteElements[0]).toHaveTextContent('110')
        expect(voteElements[1]).toHaveTextContent('220')
        expect(commentsElements[0]).toHaveTextContent('11') 
        expect(commentsElements[1]).toHaveTextContent('22') 
      //  expect(articlesELement).toBe(2);
        
    })

})