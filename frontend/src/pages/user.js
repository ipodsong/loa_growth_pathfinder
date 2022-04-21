import React from "react";
import { useParams } from "react-router";
///import { useParams } from "react-router";
//import SearchPage from "../containers/search/homeSearch";

//서버에 요청 보내기 구현



const User = () => { 
    //ID파라미터 받기
    const {userName} = useParams();  


    
    //서버에 요청 보내기
    //axios.get(SERVERURL).then(res=>console.log(res.data));
    


    return(
        <div className="user">
        <div>
            <p>User입니다</p>
        </div>
        <div>
            <p>username: {userName} </p>
        </div>
        </div>
    );
};


export default User;
