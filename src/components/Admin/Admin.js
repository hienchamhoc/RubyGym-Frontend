import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../store/imgs/logo.png'
import { Routes, Route } from 'react-router-dom'
import { TrainerList, CustomerList, Category, AdminWelcome, TrainerDetail, CustomerDetail, RenewPackage, EventList, EventDetail, EventAdd, AddMember, AddTrainer} from './../'
import Notfoundpage from '../../pages/Notfoundpage'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
import authAPI from '../../api/authAPI'

function Admin() {
    const navigate = useNavigate();
    return (
        <div className="admin-wrapper">
            <div className="admin-header-wrapper">
                <div className="grid wide">
                    <div className="admin-header">
                        <div className="admin-header-logo">
                            <Link to='/admin'><img src={logo} alt="" className="logo-img" /></Link>
                            <Link to='/admin' className="logo-name">RUBYGYM</Link>
                        </div>
                        <div className="admin-header-heading">
                            Quản lý
                        </div>
                        <div
                            className="admin-header-logout"
                            onClick={() => { 
                                authAPI.logout(); 
                                navigate('/');
                            }}
                        ><i class="fas fa-sign-out-alt"></i>
                            Đăng xuất
                        </div>
                    </div>
                </div>
            </div>
            <main className="admin-main">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-2 m-0">
                            <Category />
                        </div>
                        <div className="col l-10 m-12">
                            <div className="admin-content">
                                <Routes>
                                    <Route path="trainers" element={<TrainerList />} />
                                    <Route path="trainers/detail/:id" element={<TrainerDetail />} />
                                    <Route path="trainers/add" element={<AddTrainer />} />
                                    <Route path="members" element={<CustomerList />} />
                                    <Route path="members/detail/:id" element={<CustomerDetail />} />
                                    <Route path="members/add" element={<AddMember />} />
                                    <Route path="packages/renew/:member_id" element={<RenewPackage />} />
                                    <Route path="packages/renew" element={<RenewPackage />} />
                                    <Route path="" element={<AdminWelcome />} />
                                    <Route path="events" element={<EventList />} />
                                    <Route path="events/add" element={<EventAdd />} />
                                    <Route path="events/detail/:id" element={<EventDetail />} />
                                </Routes>
                            </div>
                        </div>
                    </div>                   
                </div>
            </main >
    </div>
                )
}

                export default Admin
