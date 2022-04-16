import React from 'react';
import {BrowserRouter as  Router , Route, Routes} from "react-router-dom";
import Home from './pages/home.js'
import Res from './pages/res.js'
import './App.css';


function App() {


    
        return(
            <div className='App'>
            <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/res/user/:userName' element={<Res />} />
                    <Route path='/*' element={<p>not found</p>} />
                </Routes>
            </Router>
            </div>
            </div>
        );
    

}


export default App;