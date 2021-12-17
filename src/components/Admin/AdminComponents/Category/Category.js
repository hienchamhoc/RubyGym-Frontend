import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

function Category() {
    let [trainerCustomer, setTrainerCustomer] = useState(false);
    let [clickUser, setClickUser] = useState('');
    return (
        <div className="admin-category">
            <ul className="manage-list">
                <li className="manage-item" onClick={() => setTrainerCustomer(!trainerCustomer)}>
                    {!trainerCustomer && <i class="fas fa-caret-right left-icon"></i>}
                    {trainerCustomer && <i class="fas fa-caret-down down-icon"></i>}
                    Quản lý tài khoản
                </li>
                {trainerCustomer &&
                    <li className="manage item">
                        <div className="trainer-customer">
                            <Link to="trainers">
                                <div className={clickUser === 'trainer' ? "manage-account-active" : "manage-account"} 
                                onClick={() => setClickUser('trainer')}>
                                <i className="fas fa-user-chart"></i>
                                Huấn luyện viên
                                </div>
                            </Link>
                            <Link to="customers">
                                <div className={clickUser === 'customer' ? "manage-account-active" : "manage-account"} 
                                onClick={() => setClickUser('customer')}>
                                <i className="fas fa-user"></i>
                                Hội viên
                                </div>
                            </Link>
                        </div>
                    </li>
                }
                <li className="manage-item">Sự kiện</li>
                <li className="manage-item">Tạo blog</li>
                <li className="manage-item">Sản phẩm</li>
            </ul>
        </div>
    )
}

export default Category
