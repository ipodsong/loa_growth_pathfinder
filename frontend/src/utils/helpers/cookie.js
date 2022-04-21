import {Cookies} from "react-cookie";


const cookies = new Cookies()

export const setCookie = (name, value) =>{
    const expires = new Date();
    expires.setFullYear(expires.getFullYear()+10);
    return (
        cookies.set(name, value,
            {
                path:'/',
                expires
            }
        )
    );
}
///document.cookie
export const getCookie = (name) =>{
    return cookies.get(name);
}

export const removeCookie = (name) =>{
    return cookies.remove(name);
}

export const refreshCookie = (name, value) =>{
        removeCookie(name)
        return (
            setCookie(name, value)
        );
}

