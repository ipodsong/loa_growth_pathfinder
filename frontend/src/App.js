import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home.js";
import Res from "./pages/res.js"
import NotFound from "./pages/notFound.js"




function App() {
    
        return(
            <div className='App'>
            <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/res' element={<Res />} />
                    <Route path='/*' element={<p>not found</p>} />
                </Routes>
            </Router>
            </div>
            </div>
        );
    
}



export default App;