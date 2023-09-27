import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import Nav from '../../nav/Nav'

// Mock the setKeys and setSearchTerm functions
const mockSetKeys = jest.fn();
const mockSetSearchTerm = jest.fn();
jest.mock('../../../data/data', ()=>({
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



describe('Header Component', () => {
  it('renders correctly', () => {
    render(
      <Header
        searchTerm="test"
        setSearchTerm={mockSetSearchTerm}
        setKeys={mockSetKeys}
        navVisible={false}
        setNavVisible={jest.fn()}
      />
    );

    const titleElement= screen.getByRole('heading')
    // Assert that elements with specific attributes are present
    expect(titleElement.textContent).toBe('RedditLite');
    //expect().toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

   it('handles form submission', () => {
    render(
       <Header
         searchTerm="Mock Title 1"
         setSearchTerm={mockSetSearchTerm}
         setKeys={mockSetKeys}
         navVisible={false}
         setNavVisible={jest.fn()}
       />
     );

     const input = screen.getByPlaceholderText('Search...');
     const submitButton = screen.getByTestId('submit-button');


    fireEvent.change(input, { target: { value: 'Mock Title' } });
    fireEvent.click(submitButton)

     expect(mockSetSearchTerm).toHaveBeenCalledWith('Mock Title');  
     expect(mockSetKeys).toHaveBeenCalledWith(["mock1"]);  
     
     
  }); 

  it('handles menu click when navVisible is false', () => {
    const mockSetNavVisible = jest.fn();
    render(<>
     <Header
        searchTerm="test"
        setSearchTerm={mockSetSearchTerm}
        setKeys={mockSetKeys}
        navVisible={false}
        setNavVisible={mockSetNavVisible}
      />
      <Nav />
    </>
     
    );

    const menuElement = screen.getByLabelText("menu");
    fireEvent.click(menuElement);
    expect(mockSetNavVisible).toHaveBeenCalledWith(true);
    
  });
  it('handles menu click when navVisible is true', () => {
    const mockSetNavVisible = jest.fn();
    render(<>
     <Header
        searchTerm="test"
        setSearchTerm={mockSetSearchTerm}
        setKeys={mockSetKeys}
        navVisible={true}
        setNavVisible={mockSetNavVisible}
      />
      <Nav />
    </>
     
    );

    const menuElement = screen.getByLabelText("menu");
    fireEvent.click(menuElement);
    expect(mockSetNavVisible).toHaveBeenCalledWith(false);
    
  });
});






