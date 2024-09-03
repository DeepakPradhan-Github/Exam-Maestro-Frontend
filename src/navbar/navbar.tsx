import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.tsx';
import About from './about.tsx';
import Contact from './contact.tsx';
import Login from './login.tsx';
import { Outlet, Link } from 'react-router-dom';
import  './nav.css';

function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }
  
  function navbar() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

export default navbar;