import { render, screen } from '@testing-library/react';
import Description from './Description'; 

describe('Description Component', () => {
  it('should render with the correct text and class', () => {
    // Define test props
    const text = 'Test description';
    const className = 'test-class';

    // Render 
    render(<Description text={text} className={className} />);

    // Find the rendered paragraph element
    const descriptionElement = screen.getByText(text);

    // Assertions
    expect(descriptionElement).toBeInTheDocument(); 
    expect(descriptionElement).toHaveClass(className); 
  });
}); 