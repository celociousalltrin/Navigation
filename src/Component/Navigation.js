import React from 'react';
import { BrowserRouter,NavLink,Routes,Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Setting from '../Pages/Setting';
import Profile from '../Pages/Profile';
import "./navigation.css";
import Error from "../Pages/404";
import Redx from '../Pages/redx';
import Toredx from '../Pages/toredx';

const Navigation = () => {
  return (
    <BrowserRouter>
    <div className='Navigation'>
    <NavLink to="/">LoginPage</NavLink> 
    <NavLink to="/Home">HomePage</NavLink> 
    <NavLink to="/Profile">ProfilePage</NavLink> 
    <NavLink to="/Setting">SettingPage</NavLink> 

    <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Profile" element={<Toredx/>} /> 
        <Route path="/Setting" element={<Redx/>} />
        <Route path="*" element={<Error />} />
    </Routes>

    </div>
    </BrowserRouter>
    
  )
}

export default Navigation