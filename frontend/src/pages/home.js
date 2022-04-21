import React from 'react';
//import ReactDOM from 'react-dom';
//import Button from '../components/buttons/homeButton.js';
import SearchPage from '../containers/search/homeSearch.js';

//home page
function Home() {
    return ( 
    
    <div className = 'home' >
        <div className='Search'>
            <SearchPage> Search </SearchPage>
        </div>


    </div>

    );
}

export default Home;
//        <div className='search-container'>
//            <SearchContainer/>        
//        </div>