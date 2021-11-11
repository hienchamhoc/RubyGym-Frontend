import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Footer } from '..'
import logo from './../../store/imgs/logo.png'
import muscleicon from './../../store/imgs/muscle-icon.png'
import './Login.css'

function Login() {

    let [role, setRole] = useState('admin');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        console.log({ role: role, username: username, password: password });
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
            < main className="login-body" >
                <div className="login-body-wrapper">
                    <h2 className="login-body-heading">Chọn vai trò đăng nhập</h2>
                    <div className="login-inner">
                        <div className="login-role">
                            <div
                                className={role === 'admin' ? "role-detail role-active" : "role-detail"}
                                onClick={() => setRole('admin')}
                            >
                                <i class="fas fa-user-lock"></i>
                                Quản trị viên
                            </div>
                            <div className="role-detail-wrapper">
                                <div
                                    className={role === 'trainer' ? "role-detail role-active" : "role-detail"}
                                    onClick={() => setRole('trainer')}
                                >
                                    <img src={muscleicon} alt="" />
                                    Huấn luyện viên
                                </div>
                                <div
                                    className={role === 'customer' ? "role-detail role-active" : "role-detail"}
                                    onClick={() => setRole('customer')}
                                >
                                    <i class="fas fa-user"></i>
                                    Học viên
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Nhập tên đăng nhập"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Nhập mật khẩu"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className={username && password ? "usersubmit-btn" : "usersubmit-btn inactive"}>Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Login



