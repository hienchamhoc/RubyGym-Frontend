import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'customer'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <div className="login-body">
                <div className="container">
                    <div className="brand-logo" />
                    <div className="brand-title">RUBYGYM</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <p className="brand-select">Chọn vai trò đăng nhập</p>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="admin">Admin</option>
                                <option value="trainer">Huấn luyện viên</option>
                                <option value="customer">Học Viên</option>
                            </select>
                        </label>
                    </form>
                    <div className="inputs">
                        <label>TÀI KHOẢN</label>
                        <input type="account" placeholder="Tài khoản" />
                        <label>MẬT KHẨU</label>
                        <input type="password" placeholder="Mật khẩu" />
                        <button type="submit">ĐĂNG NHẬP</button>
                    </div>
                </div>
                <Link to="/" className="login-back">Trở về</Link>
            </div>
        );
    }
}

export default Login;