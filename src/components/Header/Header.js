import React from "react";
import { Link } from "react-router-dom";
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
                            <div className="nav-list">
                                <Link to='/' className="nav-item">Trang chủ</Link>
                                <Link to='/service' >Dịch vụ</Link>
                                <Link to='/feedback' >Góp ý</Link>
                            </div>
                        </nav>
                    </div>
                    <div className="header-login">
                        <Link to='/login'>
                            <img src={loginicon} alt="" className="login-icon" />
                            <div className="login-heading">Đăng nhập</div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
