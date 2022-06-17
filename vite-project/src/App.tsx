import React from 'react'
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom'

// import Greetings from './components/Greetings'
// import Animal from './components/Animal'
import Home from './pages/HomePage'
// import ResourcesPage from './pages/ResourcesPage'
import Resources from './components/Resources'
import RegisterPage from './pages/RegisterPage'

const App = () => {
    // const age:number = 10

    return (<>
        {/* <div>App</div>
        <Animal/> */}
            <div id="nav">
                <Link to="/">Home</Link>
                <Link to="/comments">Data</Link>
                <Link to="/register">Register</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                {/* <Route path="/jokes" element={< ResourcesPage />}/> */}
                <Route path="/comments" element={< Resources />}/>
                <Route path="/register" element={< RegisterPage />}/>
            </Routes>
    </>)
    
}

export default App