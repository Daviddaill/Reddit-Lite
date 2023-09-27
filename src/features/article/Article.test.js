import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

// Mock the data import to use the mockData
jest.mock('../../data/data', () => ({
    articles: [
        {
          key: 'mock1',
          img: 'https://example.com/mock-image.jpg',
          title: 'Mock Title',
          description: 'Mock Description',
          text: 'Mock Text',
          subReddit: 'Mock SubReddit',
          comments: '42',
          vote: '99',
        },
      ],
  }));
  

describe('Article Component', () => {
    

    it('renders correctly', () => {
        
        //render
        render(<Article  />);
        //find
        const articleElement= screen.getByLabelText('article')
        //Assert
        
        const titleElement = screen.getByText("Mock Title");
        const imgElement= screen.getByRole('img')
        //const textElement= screen.getByLabelText('preview-text');
        const subRedditElement= screen.getByLabelText("subreddit name") 
        const voteElement= screen.getByLabelText("number of votes") 
        const commentsElement= screen.getByLabelText("number of comments") 

    //Assert
    expect(articleElement).toBeInTheDocument();
    expect(titleElement.textContent).toBe('Mock Title')
    expect(imgElement).toHaveAttribute('src','https://example.com/mock-image.jpg' )
    expect(subRedditElement).toHaveTextContent('Mock SubReddit')
    expect(voteElement).toHaveTextContent('99')
    expect(commentsElement).toHaveTextContent('42')         
    });
}); 