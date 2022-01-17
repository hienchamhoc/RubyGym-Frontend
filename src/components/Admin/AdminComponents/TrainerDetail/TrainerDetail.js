import React, { useState, useEffect } from 'react'
import './TrainerDetail.css'
import { useParams } from 'react-router-dom'
import avatar from './../../../../store/imgs/trainer-1.png'
import { Popup, MyCalendar } from "../../../";
import Timetablee from './../../../Timetablee.js'
import { useNavigate } from "react-router-dom";
import managementAPI from '../../../../api/managementAPI'

function TrainerDetail() {
    const navigate = useNavigate();
    let [trainerInfor, setTrainerInfor] = useState({});
    let [members, setMembers] = useState({});

    const {id} = useParams();
    
    useEffect(() =>{
        (async () =>{
            // console.log('hi');
            const res = await managementAPI.trainerDetail({id});
            // console.log(res);
            trainerInfor = res.data.data;
            setTrainerInfor(trainerInfor);
            // console.log(trainerInfor);
            
            const _members = await managementAPI.memberListOfTrainer(id);
            // console.log(res);
            members = _members.data.data.member_list;
            setMembers(members);
            // console.log(members);
            // console.log(trainers)
        })();
        
    },[]);

    return (
        <div className="trainer-detail-wrapper">
            <div className="trainer-detail-header">
            <h1 className="trainer-headingg">HUẤN LUYỆN VIÊN</h1>
            {/* <button className="trainer-add-btn">Chỉnh sửa</button> */}
            </div>
            <div className="trainer-detail-content">
                <div className="row">
                    <div className="col l-4">
                        <div className="trainer-avatar"
                            style={{
                                backgroundImage: `url(${process.env.REACT_APP_API_URL + trainerInfor.avatar_url})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '300px'
                            }}
                        >
                        </div>
                    </div>
                    <div className="col l-8">
                        <div className="trainer-detail-infor">
                            <h2 className="trainer-name">
                                <span className="trainer-name-title">Họ và tên:</span>
                                {trainerInfor.name}
                            </h2>
                            <h2 className="trainer-sex">
                                <span className="trainer-sex-title">Giới tính:</span>
                                {trainerInfor.gender}
                            </h2>
                            <h2 className="trainer-birthday">
                                <span className="trainer-birthday-title">Ngày sinh:</span>
                                {function(){if (trainerInfor.birthday) return trainerInfor.birthday.substring(0, 10)}()}
                            </h2>
                            <h2 className="trainer-phone">
                                <span className="trainer-phone-title">Số điện thoại:</span>
                                {trainerInfor.phone}
                            </h2>
                            <h2 className="trainer-height">
                                <span className="trainer-height-title">Chiều cao:</span>
                                1m80
                            </h2>
                            <h2 className="trainer-weight">
                                <span className="trainer-weight-title">Cân nặng:</span>
                                70kg
                            </h2>
                            {/* <h2 className="trainer-account">
                                <span className="trainer-account-title">Tài khoản:</span>
                                dungnq123
                            </h2>
                            <h2 className="trainer-password">
                                <span className="trainer-password-title">Mật khẩu:</span>
                                dungtayto
                            </h2> */}
                            <h2 className="trainer-address">
                                <span className="trainer-address-title">Địa chỉ:</span>
                                {trainerInfor.address}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="trainer-schedule">
                        <h2 className="trainer-schedule-heading">Lịch huấn luyện</h2>
                        {/* <Timetablee /> */}
                        <MyCalendar 
                        id={id}
                        role='trainer'/>
                    </div>

                    

                    <div className="trainer-students">
                        <h2 className="trainer-students-heading">Danh sách học viên</h2>
                        <table className="students-table">
                            <thead className="students-table-header">
                                <tr >
                                    <th>Thứ tự</th>
                                    <th>Họ và tên</th>
                                    {/* <th>Tuổi</th> */}
                                    <th>Giới tính</th>
                                    <th>Số điện thoại</th>
                                    <th></th>
                                </tr>
                            </thead>
                            
                            <tbody className="students-table-body">
                                {members.length &&
                                    members.map((member, index) => {
                                        return <tr>
                                                <td>{index + 1}</td>
                                                <td>{member.name}</td>
                                                {/* <td>{member.name}</td> */}
                                                <td>{member.gender}</td>
                                                <td>{member.phone}</td>
                                                <td><button onClick={(e) => {
                                                    navigate('/admin/members/detail/' + member.id);
                                                }}>Chi tiết</button></td>
                                            </tr>
                                    })
                                }
                                {/* <tr>
                                    <td>1</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0123455674</td>
                                    <td><button>Xóa</button></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerDetail
