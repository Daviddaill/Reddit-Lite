import { screen, render } from "@testing-library/react";
import Footer from "../Footer";
describe('Footer component',()=>{
    it('should render component',()=>{
        render(<Footer />)
        const footerElement= screen.getByTitle('footer'); 
        expect(footerElement).toBeInTheDocument
    })
})