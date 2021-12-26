import React, { useState, useEffect } from 'react'
import './TrainerDetail.css'
import { useParams } from 'react-router-dom'
import avatar from './../../../../store/imgs/trainer-1.png'
import { Popup, MyCalendar } from "../../../";
import Timetablee from './../../../Timetablee.js'
import managementAPI from '../../../../api/managementAPI'

function TrainerDetail() {
    let [trainerInfor, setTrainerInfor] = useState({});

    const {id} = useParams();
    
    useEffect(() =>{
        (async () =>{
            console.log('hi');
            const res = await managementAPI.trainerDetail({id});
            // console.log(res);
            trainerInfor = res.data.data;
            setTrainerInfor(trainerInfor);
            console.log(trainerInfor);
            
            // console.log(trainers)
        })();
        
    },[]);

    return (
        <div className="trainer-detail-wrapper">
            <div className="trainer-detail-header">
            <h1 className="trainer-heading">HUẤN LUYỆN VIÊN</h1>
            <button className="trainer-add-btn">Thêm</button>
            </div>
            <div className="trainer-detail-content">
                <div className="row">
                    <div className="col l-4">
                        <div className="trainer-avatar"
                            style={{
                                backgroundImage: `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
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
                                {trainerInfor.birthday}
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
                        {/* <table className="schedule-table">
                            <thead className="schedule-table-header">
                                <tr >
                                    <th>Thứ</th>
                                    <th>Thời gian</th>
                                    <th>Học viên</th>
                                    <th>Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody className="schedule-table-body">
                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Văn Đương</td>
                                </tr>



                            </tbody>
                        </table> */}
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
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Số điện thoại</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="students-table-body">
                                <tr>
                                    <td>1</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0123455674</td>
                                    <td><button>Xóa</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0123455674</td>
                                    <td><button>Xóa</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0123455674</td>
                                    <td><button>Xóa</button></td>
                                </tr><tr>
                                    <td>4</td>
                                    <td>Nguyễn Văn Đương</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0123455674</td>
                                    <td><button>Xóa</button></td>
                                </tr>




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerDetail
