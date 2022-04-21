import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./home.js";
import User from "./user.js";
import NotFound from "./notFound";


//page로 라우팅하는 함수
const RoutePage = () =>{
    
    return(
        
        
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/:userName' element={<User />} />
                <Route path='/*' element={<NotFound/>} />
            </Routes>
        
    );
    
}

export default RoutePage;