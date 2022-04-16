import React, {useState} from "react";
import {BrowserRouter as  Router , useNavigate} from "react-router-dom";
import axios from 'axios';
import ReactDOM from "react-dom";
import "./button.scss";





function Button({ children }) {
    const [setID, submitID] = useState("");
    const navigate = useNavigate()
    const handleChange = ({target:{value}})=>submitID(value);
    const handleSubmit = async event=>{
        event.preventDefault();
        navigate(`/res/user/${ setID }`);
    };
    function onClickButton(){
        // 서버 요청 및 /res로 이동
        //axios.get(SERVERURL).then(res=>console.log(res.data));
        
        navigate('/res');

    };
    return (
        <form onSubmit={handleSubmit} placeholder="ID를 입력하세요">
            <input
              id = "input"
              type="text"
              name="ID"
              value={setID}
              onChange={handleChange}
            />
            <button type="submit">
                {children}
            </button>
        </form>
        
        
    );
};

//<button className = "Button" onClick={onClickButton} > 
//            { children } 
//        </button>

const SERVERURL = 'http://localhost:8000/';

export default Button;