import React from 'react'
import background from './../../store/imgs/moi.png'
import { Link, NavLink } from 'react-router-dom'
import logo from './../../store/imgs/logo.png'
import muscleicon from './../../store/imgs/muscle-icon.png'
import './Login.css' 

function Login() {

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login-wrapper">
            {/* Header */}
            <div className="login-header-wrapper">
                <div className="grid wide">
                    <div className="login-header">
                        <div className="login-header-logo">
                            <Link to='/'><img src={logo} alt="" className="logo-img" /></Link>
                            <Link to='/' className="logo-name">RUBYGYM</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header body */}
            <main className="login-body">
                <div className="login-body-wrapper">
                    <h2 className="login-body-heading">Chọn vai trò đăng nhập</h2>
                    <div className="login-role">
                        <div className="role-detail">
                            <i class="fas fa-user"></i>
                            Quản trị viên
                        </div>
                        <div className="role-detail-wrapper">
                            <div className="role-detail">
                                <img src={muscleicon} alt="" />
                                Huấn luyện viên
                            </div>
                            <div className="role-detail">
                                <i class="fas fa-users-cog"></i>
                                Học viên
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input className="userinput" type="text" name="username" id="username" placeholder="Nhập tên đăng nhập" />
                        </div>
                        <div className="form-group">
                            <input className="userinput" type="password" name="password" id="password" placeholder="Nhập mật khẩu" />
                        </div>
                        <button className="usersubmit-btn">Đăng nhập</button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login



