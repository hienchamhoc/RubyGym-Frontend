import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import styles from './AddMember.module.css'
import { AdminHeader, Popup } from './../../../'
import axiosClient from './../../../../api/axiosClient';
import managementAPI from '../../../../api/managementAPI';
import { useNavigate } from 'react-router-dom'

// Trang thêm huấn luyện viên

function AddMember() {
    let [showPopup, setShowPopup] = useState(false);
    let [customer, setCustomer] = useState({});

    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                showPopup = false;
                setShowPopup(showPopup);
            }, 2000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup])

    const handleAddCustomer = async () => {
        console.log(customer);
        const response = await managementAPI.memberAdd(customer);
        console.log(response);
        if(response && response.data.status) {
            setShowPopup(prev => !prev);
        }
        else {
            alert(response.data.message);
        }
    }

    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Thêm học viên" trainer={false} />
            <div className={clsx(styles.contentWrapper)}>
                <div className="grid">
                    <div className={clsx(styles.innerWrapper)}>
                        <div className={clsx(styles.heading)}>
                            Thêm học viên
                        </div>
                        <div className="row no-gutters">
                            <div className="col l-6">
                                <div className={clsx(styles.content)}>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-user"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập họ và tên"
                                            onChange={(e) => {
                                                setCustomer(prev => ({
                                                    ...customer,
                                                    "name": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>


                                    <div className={clsx(styles.contentField)}>
                                        <i class="fas fa-address-card"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập địa chỉ nhà"
                                            onChange={(e) => {
                                                setCustomer(prev => ({
                                                    ...customer,
                                                    "address": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>



                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-birthday-cake"></i>
                                        <input
                                            type="date"
                                            className={clsx(styles.contentText)}
                                            placeholder="Ngày sinh"
                                            onChange={(e) => {
                                                setCustomer(prev => ({
                                                    ...customer,
                                                    "birthday": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="col l-6">
                                <div className={clsx(styles.content)}>



                                <div className={clsx(styles.contentField)}>

                                    <i className="fas fa-transgender"></i>
                                    <select
                                        onChange={(e) => {
                                            setCustomer(prev => ({
                                                ...customer,
                                                "gender": e.target.value
                                            }))
                                        }}
                                    >
                                        <option value="Chọn">Chọn</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>  
                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-mobile"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập số điện thoại"
                                            onChange={(e) => {
                                                setCustomer(prev => ({
                                                    ...customer,
                                                    "phone": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-save"></i>
                                        <button
                                            onClick={handleAddCustomer}
                                            className={
                                                    customer.name && customer.phone
                                                    && customer.birthday && customer.gender && customer.address

                                                    ? clsx(styles.trainerAddBtn)
                                                    : clsx(styles.trainerAddBtn, styles.inactive)}>
                                            Thêm hội viên
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <Popup trigger={showPopup} message="Thêm thành công" />
        </div>
    )
}

export default AddMember
