import React from 'react'
import './AdminWelcome.css'
import logo from './../../../../store/imgs/red-logo 2.png'
import RUBYGYM from './../../../../store/imgs/RUBYGYM.png'

// import { TimeTableCustome } from './../../../'

function AdminWelcome() {
    return (
        <div className="admin-welcome">
            <p className="admin-welcome-name">
                TRANG QUẢN LÝ CỦA QUẢN TRỊ VIÊN
            </p>
            <p className="admin-welcome-logo">
                TRUNG TÂM THỂ HÌNH
            </p>
            <img src={logo} alt="" className="admin-logo-img" />
            <img src={RUBYGYM} alt="" className="ruby-img" />
            </div>
        // <TimeTableCustome />
    )
}

export default AdminWelcome
