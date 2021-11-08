import React from "react";
import {useEffect} from "react"
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import logo from './../../imgs/logo.png';


function Header() {
    return (
        <header className="header">
            <div className="grid wide">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <img src="./../../imgs/logo.png" alt="" className="img-logo" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
