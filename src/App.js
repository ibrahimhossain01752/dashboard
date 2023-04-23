import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import User from './User';
import Order from './Order';

const App2 = () => {
  const [toggle, setToggle] = useState(false);
  function Toggle(){
    setToggle(!toggle);
  }

  useEffect(()=> {
    const handleSize = () => {
      if(window.innerWidth > 768){
        setToggle(false);
      }
      window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      }
    }
  },[])
    return (
       <BrowserRouter>
         <div class="d-flex">
           <div class={toggle ? "d-none" : "w-auto position-fixed"}>
                <Sidebar/>
           </div>
           <div class={toggle ? "d-none" : "invisible"}>
                <Sidebar/>
           </div>
           <div class="col overflow-auto">
              <Nav setToggle={Toggle}/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/users" element={<User/>}></Route>
                    <Route path="/orders" element={<Order/>}></Route>
                </Routes>
           
                
           </div>
        </div>
       </BrowserRouter>
    );
};

export default App2;