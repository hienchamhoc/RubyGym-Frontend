import React from "react";
import { useEffect } from "react"
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import logo from './../../imgs/logo.png';
import loginicon from './../../imgs/login-icon.png';
import logoheading from './../../imgs/RUBYGYM.png';


function Header() {
    return (
        <header className="header">
            <div className="grid wide">
                <div className="header-wrapper">
                    <div className="logo-navbar">
                        <div className="header-logo">
                            <img src={logo} alt="" className="img-logo" />
                            <img src={logoheading} alt="" className="img-heading" />
                        </div>
                        <nav className="header-navbar">
                            <ul className="nav-list">
                                <li className="nav-item">Trang chủ</li>
                                <li className="nav-item">Dịch vụ</li>
                                <li className="nav-item">Góp ý</li>
                                <li className="nav-item">Phản hồi</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-login">
                        <img src={loginicon} alt="" className="login-icon" />
                        <div className="login-heading">Đăng nhập</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
