
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

const App = () => {
    return <>
        {/* <h1>App</h1> */}
        {/* <Greeting firstname = "RK" lastname = "Lama" />
        <Button>Add</Button> */}
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link><br/>
                <Link to="/button">Button</Link><br/>
                <Link to="/chuck">Chuck</Link>
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