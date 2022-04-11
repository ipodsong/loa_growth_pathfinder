import React from "react";
///import { MdAdd } from "react-icons/md";
import "./Button.scss";


function Button({ children }) {
    return <button className = "Button" > { children } < /button>;
}


export default Button;