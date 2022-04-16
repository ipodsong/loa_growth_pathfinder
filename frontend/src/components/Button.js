<<<<<<< Updated upstream
import React from "react";
import {BrowserRouter as  Router , useNavigate} from "react-router-dom";
import axios from 'axios';
import "./button.scss";





function Button({ children }) {

<<<<<<< Updated upstream
    const navigate = useNavigate()

=======
=======
import React, {useState} from "react";
import {Link, BrowserRouter as  Router , useNavigate} from "react-router-dom";
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
>>>>>>> Stashed changes
    function onClickButton(){
        // 서버 요청 및 /res로 이동
        //axios.get(SERVERURL).then(res=>console.log(res.data));
        
        navigate('/res');

<<<<<<< Updated upstream
    }
    return (
        <button className = "Button" onClick={onClickButton} > 
            { children } 
        </button>
=======
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
        
>>>>>>> Stashed changes
        
    );
};

<<<<<<< Updated upstream


const SERVERURL = 'http://localhost:8000/';
=======
//<button className = "Button" onClick={onClickButton} > 
//            { children } 
//        </button>

const SERVERURL = 'http://localhost:8000/';
>>>>>>> Stashed changes
>>>>>>> Stashed changes

export default Button;