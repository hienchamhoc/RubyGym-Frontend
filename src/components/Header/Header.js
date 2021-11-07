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
                        <Link to="/">
                            <img src={logo} className="logo-img" alt="" />
                        </Link>
                    </div>
                    <nav className="header-navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" onlyActiveOnIndex to='/'>Trang Chủ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" to='/about'>Giới Thiệu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" to='/schedule'>Lịch Tập</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" to='/products'>Sản Phẩm</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-login">
                        <Link to="/login" className="login-btn">Đăng nhập</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
