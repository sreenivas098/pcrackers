import {render} from "@testing-library/react"
import App from "./App.js"
test("render an h1", () => {
    const {getByText} = render(<App />);
    const h1 = getByText(/Hello/i)
    expect(h1).toHaveTextContent("Hello")


})