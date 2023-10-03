import { screen , render} from "@testing-library/react"
import App from "../App"

describe('App',()=>{
    it('should render App',()=>{
        render(<App/>)
        const appElement= screen.getByTitle(/app/i)
        expect(appElement).toBeInTheDocument
    })
})