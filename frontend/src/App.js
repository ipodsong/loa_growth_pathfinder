import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home.js";
import Res from "./pages/res.js"
import NotFound from "./pages/notFound.js"




function App() {
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
    return ( <
        div className = 'App' >
        <
        div className = 'buttons' >
        <
        Button > BUTTON < /Button> < /
        div > <
        /div>
    );
=======
>>>>>>> Stashed changes
    
        return(
            <div className='App'>
            <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
<<<<<<< Updated upstream
                    <Route path='/res' element={<Res />} />
=======
                    <Route path='/res/user/:userName' element={<Res />} />
>>>>>>> Stashed changes
                    <Route path='/*' element={<p>not found</p>} />
                </Routes>
            </Router>
            </div>
            </div>
        );
    
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}



export default App;