import React from 'react'
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom'
import ResourcesComponent from './components/Resources'

// import Greetings from './components/Greetings'
// import Animal from './components/Animal'
import Home from './pages/HomePage'
import ResourcesPage from './pages/ResourcesPage'


const App = () => {
    // const age:number = 10

    return (<>
        {/* <div>App</div>
        <Animal/> */}
            <div id="nav">
                <Link to="/">Home</Link>
                <Link to="/posts">Data</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/posts" element={< ResourcesPage />}/>
            </Routes>
    </>)
    
}

export default App