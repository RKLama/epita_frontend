
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom"

import Button from "./components/Button"
// import Greeting from "./components/Greeting"
import Home from "./pages/Home"
import Chuck from "./pages/Chuck"

import "./styles/main.css"

const App = () => {
    return <>
        {/* <h1>App</h1> */}
        {/* <Greeting firstname = "RK" lastname = "Lama" />
        <Button>Add</Button> */}
        <BrowserRouter>
            <div id="nav">
                <Link to="/">Home</Link>
                <Link to="/button">Button</Link>
                <Link to="/chuck">Chuck Norris Fact</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/button" element={<Button />} />
                <Route path="/chuck" element={<Chuck />}/>
            </Routes>
        </BrowserRouter>
    </> 
}

export default App