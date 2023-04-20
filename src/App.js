import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Nav from './Nav';

const App2 = () => {
    return (
        <div class="d-flex">
           <div class="w-auto">
                <Sidebar/>
           </div>
           <div class="col">
                <Nav/>
           </div>
        </div>
    );
};

export default App2;