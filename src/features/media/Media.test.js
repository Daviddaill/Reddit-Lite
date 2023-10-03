import { render, screen } from '@testing-library/react';
import Media from './Media'; // Import your Media component

describe('Media Component', () => {
  it('should render with the correct props', () => {
    // Define test props
    const source = 'https://www.example.com/image.jpg';
    const className = 'test-class';

    // Render the component with the test props
    render(<Media source={source} description={description} className={className} />);

    // Find the rendered elements
    const imgElement = screen.getByRole('img');
   
    // Assertions
    expect(imgElement).toBeInTheDocument(); // Check if the img element is in the document
    expect(imgElement).toHaveAttribute('src', source); // Check if the src attribute matches the source prop
    expect(imgElement).toHaveClass(className); // Check if the className prop is applied

  });
});