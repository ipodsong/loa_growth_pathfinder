import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home.js";
import Res from "./Res.js";
import NotFound from "./NotFound";

const router = () =>{
    
    return(
        
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/res' element={<Res />} />
                <Route path='/notFound/*' element={<NotFound />} />
            </Routes>
        </Router>
    );
    
}

export default router;