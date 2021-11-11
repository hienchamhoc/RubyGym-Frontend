<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import logo from './../../store/imgs/logo.png';


=======
import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import logo from './../../imgs/logo.png';
import loginicon from './../../imgs/login-icon.png';
import logoheading from './../../imgs/RUBYGYM.png';
>>>>>>> 05ddadc622ee7547456bb38cf5927f9c79a0a14b
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 05ddadc622ee7547456bb38cf5927f9c79a0a14b
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
