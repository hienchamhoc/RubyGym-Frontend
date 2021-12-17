import React from 'react'
import { CustomerDetail } from '../../..'

import './CustomerList.css'


function CustomerList() {
    return (
        <div className="customer-list-wrapper">
            <div className="customer-list-header">
                <h1 className="customer-heading">HỘI VIÊN</h1>
                <div className="search-customer-box">
                    <div className="search-customer-box-input">
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input type="search" id="search-customer" placeholder="Search..." />
                    </div>
                </div>
                <button className="customer-add-btn">Thêm</button>
            </div>
            <div className="">
                <CustomerDetail/>
            </div>
        </div>
    )
}

export default CustomerList
