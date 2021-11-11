import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import logo from './../../store/imgs/logo.png';


function Header() {

    let [showOption, setShowOpTion] = useState(false);

    const handleShowOption = () => {
        setShowOpTion(!showOption);
    }

    return (
        <header className="header">
            <div className="grid wide">
                <div className="header-wrapper">
                    <div className="logo-navbar">
                        <div className="header-logo">
                            <Link to='/'><img src={logo} alt="" className="logo-img" /></Link>
                            <Link to='/' className="logo-name">RUBYGYM</Link>
                        </div>
                        <nav className="header-navbar">
                            <ul className="nav-list">
                                <li className="nav-item"><NavLink to="/">Trang chủ</NavLink></li>
                                <li className="nav-item"><NavLink to="/">Dịch vụ</NavLink></li>
                                <li className="nav-item"><NavLink to="/">Góp ý - Phản hồi</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-login">
                        <Link to='/login'><i className="fas fa-user login-icon"></i></Link>
                        <Link to='/login'>Đăng nhập</Link>
                    </div>
                    <div className="header-user" onClick={handleShowOption}>
                        <h2 className="header-user-name">Nguyễn Quang Dũng</h2>
                        <i className="fas fa-user-circle header-user-icon"></i>
                        {showOption &&
                            <div className="header-user-option">
                                <ul className="user-option-list">
                                    <li onClick={handleShowOption} className='user-option-item'><Link to="/login">Thông tin cá nhân</Link></li>
                                    <li onClick={handleShowOption} className='user-option-item'><Link to="">Đăng xuất</Link></li>
                                </ul>
                            </div>
                        }
                    </div>
                    {showOption && <div className="virtual-modal" onClick={handleShowOption} ></div>}
                </div>
            </div>
        </header>
    );
}

export default Header;
