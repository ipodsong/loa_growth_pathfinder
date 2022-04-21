import React from 'react';
import {BrowserRouter as  Router} from "react-router-dom";
import NavBar from './containers/nav/navBar';
import RoutePage from './pages/router';
import './App.css';



function App() {


    
        return(
            <div className='App'>

            <div>
            <Router>
                <NavBar/>
                <RoutePage/>
            </Router>
            </div>
            </div>
        );
    

}


export default App;