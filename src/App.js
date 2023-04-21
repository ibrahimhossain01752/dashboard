import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import User from './User';
import Order from './Order';

const App2 = () => {
    return (
       <BrowserRouter>
         <div class="d-flex">
           <div class="w-auto">
                <Sidebar/>
           </div>
           <div class="col overflow-auto">
           
                <Routes>
                    <Route path="/" element={<><Nav/><Home/></>}></Route>
                    <Route path="/users" element={<><User/></>}></Route>
                    <Route path="/orders" element={<><Order/></>}></Route>
                </Routes>
           
                
           </div>
        </div>
       </BrowserRouter>
    );
};

export default App2;