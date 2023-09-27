import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlePreview from './ArticlePreview'; // Adjust the import path

describe('ArticlePreview Component', () => {
    const mockProps = {
        img: 'image.jpg',
        title: 'Sample Title',
        description: 'Sample Description',
        text: 'Sample Text',
        subReddit: 'Sample SubReddit',
        comments: '10',
        vote: '5',
    };

    it('should render ArticlePreview component with correct data', () => {
        //Render
        render(<ArticlePreview {...mockProps} />);
        //Find
        const titleElement = screen.queryAllByRole('heading');
        const imgElement= screen.getByRole('img')
        //const textElement= screen.getByLabelText('preview-text');
        const subRedditElement= screen.getByLabelText("subreddit name") 
        const voteElement= screen.getByLabelText("number of votes") 
        const commentsElement= screen.getByLabelText("number of comments") 

        //Assert
        expect(screen.getByTestId('article-preview')).toBeInTheDocument();
        expect(titleElement[1].textContent).toBe(mockProps.title);
        expect(titleElement[2]).not.toBeNull();
        expect(imgElement).toHaveAttribute('src', mockProps.img) 
        //expect(textElement.textContent).toBe(mockProps.text);
        expect(subRedditElement).toHaveTextContent(mockProps.subReddit)
        expect(voteElement).toHaveTextContent(mockProps.vote)
        expect(commentsElement).toHaveTextContent(mockProps.comments) 
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<ArticlePreview {...mockProps} />);
        // Use snapshot testing to ensure component renders consistently
        expect(asFragment()).toMatchSnapshot();
    });
});
