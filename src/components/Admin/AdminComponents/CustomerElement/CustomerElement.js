import React, { useParams, useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import avatar from './../../../../store/imgs/loading.gif';

import axiosClient from "../../../../api/axiosClient";
import { useNavigate } from "react-router-dom";
import { Popup } from "./../../../";
import managementAPI from "../../../../api/managementAPI";

//Từng học viên trong danh sách các học viên

function CustomerElement({ infor, admin }) {
    let [showPopup, setShowPopup] = useState(false);

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

    const handleDeleteCustomer = async () => {
        const res = await managementAPI.memberDelete({id: infor.id});
        console.log(res);
        if (res && res.data && res.data.status) {
            setShowPopup(true);
            infor.active = 0;
        }
    };

    const handleRestore = async () => {
        const res = await managementAPI.memberRestore({id: infor.id});
        console.log(res);
        if (res && res.data && res.data.status) {
            setShowPopup(true);
            infor.active = 1;
        }
        console.log(infor)
    };

    return (
        <tr>
            <td> <div
                        style={
                            infor.avatar_url ? {
                                background: `url(${process.env.REACT_APP_API_URL + infor.avatar_url})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '60px',
                                width: '60px',
                                margin: 'auto'
                            } : {
                                background: `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '50px',
                                width: '50px',
                                margin: 'auto'
                            }}
                        // className={clsx(styles.avatarImg)}
                    >
                    </div>
            </td>
            <td>
                <Link
                    to={`/admin/members/detail/${infor.id}`}
                    className="customer-link"
                >
                    {infor.name}
                </Link>
            </td>
            <td>{infor.gender}</td>
            <td> {infor.phone}</td>
            <td>{infor.trainer_name}</td>
            <td>
                {infor.active == 1 ? (
                    <div className="active-status">Hoạt động</div>
                ) : (
                    <div className="no-active-status">Không hoạt động</div>
                )}
                {/* <div className={clsx(styles.inforContent, styles.status)}>Hết hạn</div> */}
            </td>
            <td>
                {(
                    <div>
                        <div>
                            {infor.active == 1 && (
                                <div
                                    onClick={handleDeleteCustomer}
                                    className="delete-customer"
                                >
                                    Xóa
                                </div>
                            )}
                            {infor.active != 1 && (
                                <div
                                    onClick={handleRestore}
                                    className="restore-customer"
                                >
                                    Khôi phục
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </td>
            <Popup trigger={showPopup} message="Thành công" />
            {/* {makeSchedule && <MakeSchedule infor={infor} />} */}
        </tr>
    );
}

export default CustomerElement;
