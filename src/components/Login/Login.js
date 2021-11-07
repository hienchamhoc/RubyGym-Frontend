import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login-wrapper">
            <div className="grid wide">
                <div className="login-content">
                    <h1 className="login-heading">Đăng nhập</h1>
                    <h1 className="login-username">Tên đăng nhập</h1>
                    <div className="login-password">Mật khẩu</div>
                </div>
            </div>
        </div>
    )
}

export default Login
