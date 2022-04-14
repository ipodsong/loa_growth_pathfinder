import React from "react";
import {BrowserRouter as  Router , useNavigate} from "react-router-dom";
import axios from 'axios';
import "./button.scss";





function Button({ children }) {

    const navigate = useNavigate()

    function onClickButton(){
        // 서버 요청 및 /res로 이동
        //axios.get(SERVERURL).then(res=>console.log(res.data));
        
        navigate('/res');

    }
    return (
        <button className = "Button" onClick={onClickButton} > 
            { children } 
        </button>
        
    );
};



const SERVERURL = 'http://localhost:8000/';

export default Button;