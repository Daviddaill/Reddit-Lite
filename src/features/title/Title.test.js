import { screen, render, fireEvent } from "@testing-library/react"
import Title from "./Title";

describe('cards title', ()=>{
    it('should show the title passed as props',()=>{
                //render a component
                render(<Title title='my title' className='my class' />) 
                //find elements
                const title = screen.getByRole("heading")
                //interact with it
        
                //assert
                expect(title.textContent).toBe('my title');  
    })
})