import React, { useParams, useState, useEffect } from 'react'
import clsx from 'clsx'
import avatar from './../../../../store/imgs/loading.gif'
import { Link } from 'react-router-dom'


import styles from './CustomerElement.module.css'
import axiosClient from '../../../../api/axiosClient'
import { useNavigate } from 'react-router-dom'
import { Popup } from './../../../'

//Từng học viên trong danh sách các học viên

function CustomerElement({ infor, admin }) {
    let [showPopup, setShowPopup] = useState(false);
console.log(infor);
    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                setShowPopup((prev) => !prev);
            }, 1000);
        }
        
        return () => {
            clearTimeout(id);
        };
    }, [showPopup]);


    const handleDeleteCustomer = () => {

    }

    const handleRescover = () => {

    }


    return (
        <div className={clsx(styles.wrapper)}>
            <Link
                to={`/admin/members/detail/${infor.id}`}
                className={clsx(styles.content)}
            >
                <div className={clsx(styles.avatarField)}>
                    <div
                        style={
                            infor.avatar_url ? {
                                background: `url(${process.env.REACT_APP_API_URL + infor.avatar_url})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '60px',
                                width: '60px',
                            } : {
                                background: `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '50px',
                                width: '50px'
                            }}
                        className={clsx(styles.avatarImg)}
                    >
                    </div>
                    <div className={clsx(styles.name)}>{infor.name}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    {
                        infor.active == 1
                            ? <div className={clsx(styles.inforContent, styles.status)}>Hoạt động</div>
                            : <div className={clsx(styles.inforContent, styles.status, styles.inactive)}>Không hoạt động</div>
                    }
                    {/* <div className={clsx(styles.inforContent, styles.status)}>Hết hạn</div> */}
                </div>

                <div className={clsx(styles.inforField)}>
                    <i class={clsx(styles.inforIcon, styles.gender, infor.gender === 'Nữ' ? "fas fa-female" : "fas fa-male")}></i>
                    <div className={clsx(styles.inforContent)}>{infor.gender}</div>
                </div>

                {/* <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.birthday, "fas fa-birthday-cake")}
                        style={{
                            color: 'rgb(241, 122, 142)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{infor.birthday}</div>
                </div> */}

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-mobile")}
                        style={{
                            color: 'rgb(184, 184, 58)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{infor.phone}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-chalkboard-teacher")}
                        style={{
                            color: 'rgb(48, 48, 240)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{infor.trainer_name}</div>
                </div>

            </Link>

            {
                admin &&
                <div className={clsx(styles.updateField)}>
                    <div className={clsx(styles.inforField, styles.editField)}>
                        <i class={clsx(styles.editIcon, "fas fa-edit")}></i>
                        <Link to={`/admin/members/${infor.id}`} className={clsx(styles.updateContent, styles.edit)}>
                            Sửa
                        </Link>
                    </div>

                    <div className={clsx(styles.inforField, styles.deleteField)}>
                        <i class={clsx(styles.deleteIcon, "fas fa-user-minus")}></i>
                        {infor.status == "Hoạt động" && <div
                            onClick={handleDeleteCustomer}
                            className={clsx(styles.updateContent, styles.delete)}>
                            Xóa
                        </div>}
                        {infor.status !== "Hoạt động" && <div
                            onClick={handleRescover}
                            className={clsx(styles.updateContent, styles.delete)}>
                            Khôi phục
                        </div>}
                    </div>
                </div>
            }

            {/* {
                trainer &&
                <div className={clsx(styles.updateField)}>
                    <div className={clsx(styles.inforField, styles.editField)}>
                        <i class={clsx(styles.editIcon, "fas fa-clock")}></i>
                        <div
                            className={clsx(styles.updateContent, styles.edit)}
                            onClick={() => setMakeSchedule(prev => !prev)}
                        >
                            Lên lịch
                        </div>
                    </div>
                </div>
            } */}

            <Popup trigger={showPopup} message="Thành công" />
            {/* {makeSchedule && <MakeSchedule infor={infor} />} */}
        </div>
    )
}

export default CustomerElement
