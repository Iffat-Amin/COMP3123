import React, { Component } from 'react';
import { Routes, Route, BrowserRouter, Link,NavLink } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Axios and Navigation</h1>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <NavLink to="/contact/Iffat" >Contact</NavLink>
            <NavLink to="/userlist" >UserList</NavLink>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<UserList />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}



