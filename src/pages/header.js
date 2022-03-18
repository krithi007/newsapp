import React from "react";
import '../styles/header.css';
import Comments from "./comments";
import Login from './login';
import Notfound from "./notfound";
import Posts from "./posts";
import Welcome from "./welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Contact from "./contact";



export default class Header extends React.Component {
    render() {
        return (
            <>
            <div className="header-container">
                <nav>
                    
                    <a href="/"><FaHome className='home'/></a> 
                    <a href="/posts">News</a> 
                    <a href="/contact/">Contact</a> 

                    <div className="dropdown">
  <span>Profile</span>
  <div className="dropdown-content">
  <p><Login /></p>
  </div>
</div>
                </nav>
            </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}/>
          <Route path="posts" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />

      </Routes>
    </BrowserRouter>
            </>

       )
    }
}