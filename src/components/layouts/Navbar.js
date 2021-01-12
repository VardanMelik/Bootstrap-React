import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link
                    to="/"
                    className="navbar-brand ml-5" href="#">
                    <img src={logo} alt="logo" style={{ width: '35px'}} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fas fa-bars" style={{ 'color' : 'white'}}></i>
                </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link 
                            to="/"
                            className="nav-link text-white text-uppercase active ml-5" 
                            aria-current="page" href="#">Home&nbsp;
                            <i className="fas fa-home"></i>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link
                            to="/news"
                            className="nav-link text-white text-uppercase ml-5" href="#">News</Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="contacts" 
                            className="nav-link text-white text-uppercase ml-5" href="#">Contact</Link>
                    </li>

                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary ml-2" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
