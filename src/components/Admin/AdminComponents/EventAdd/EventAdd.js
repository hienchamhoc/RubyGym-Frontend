import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./EventAdd.css";
import eventAPI from "../../../../api/eventAPI";
import Popup from '../../../Popup/Popup'
import userProfileAPI from "./../../../../api/userProfileAPI";

function EventAdd() {
    const navigate = useNavigate();
    let [showPopup, setShowPopup] = useState(false);
    let [errMsg, setErrMsg] = useState(false);
    let [formFalse, setFormFalse] = useState(false);
    let [eventInfor, setEventInfor] = useState({
        title: '',
        detail_title: '',
        content: '',
        start_time: formatDate(new Date()),
        finish_time: formatDate(new Date()),
        thumbnail_image_url: '/uploads/sk2_event.png', // default 
        detail_image_url: '/uploads/sk2.png' // default 
    });
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    const handleCreate = async () => {
        if (!eventInfor.title || !eventInfor.detail_title || !eventInfor.content || 
            !eventInfor.start_time || !eventInfor.finish_time || !eventInfor.thumbnail_image_url || 
            !eventInfor.detail_image_url) {
            setFormFalse(true);
            setErrMsg("Thông tin bắt buộc!");
        }
        
        const response = await eventAPI.createEvent(eventInfor);
        //console.log(response);
        if (response && response.data.status) {
            setShowPopup((prev) => !prev);
            setTimeout(() => navigate('/admin/events'), 2000);
        }
        if (response && !response.data.status && response.message) {
            setFormFalse(true);
            setErrMsg(response.data.message);
        }
    };

    const handleCancel = () => {
        navigate('/admin/events');
    };
    
    // Upload Avatar
    const handleUploadImage = async (e) => {
        console.log(e.target.id);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        const response = await userProfileAPI.updateAvatar(formData);

        if (e.target.id == 'thumbnailImageChoose') {
            eventInfor = {
                ...eventInfor,
                thumbnail_image_url:response.data.data.imageURL
            }
            setEventInfor(eventInfor);
            console.log(eventInfor);
        }
        else {
            eventInfor = {
                ...eventInfor,
                detail_image_url:response.data.data.imageURL
            }
            setEventInfor(eventInfor);
            console.log(eventInfor);
        }
        // if (
        //     response &&
        //     response.status &&
        //     response.data &&
        //     response.data.data
        // ) {
        //     userProfile = {
        //         ...userProfile,
        //         avatar_url: response.data.data.imageURL,
        //     };
        //     setUserProfile(userProfile);
        // }
        // if (response && !response.status) {
        //     alert(response.message);
        // }
    };
    return (
        <div>
            <div className="event-detail-header">
                <h1 className="event-headingg">THÊM SỰ KIỆN</h1>
            </div>
            <div className="event-detail-content">
                {/* Ảnh sự kiện */}
                <h2>Ảnh sự kiện</h2>
                <div className="img-event edit-active">
                    <div className="thumbnail-img-event">
                        <img src={process.env.REACT_APP_API_URL + eventInfor.thumbnail_image_url} alt="" />
                        <label className="thumbnail-img-btn" htmlFor="thumbnailImageChoose">
                            <i class="fal fa-camera"></i>
                        </label>
                        <input
                            type="file"
                            id="thumbnailImageChoose"
                            hidden
                            onChange={handleUploadImage}
                        />
                        <div>(350 x 250)</div>
                    </div>
                    <div className="detail-img-event">
                        <img src={process.env.REACT_APP_API_URL + eventInfor.detail_image_url} alt="" />
                        <label className="detail-img-btn" htmlFor="detailImageChoose">
                            <i class="fal fa-camera"></i>
                        </label>
                        <input
                            type="file"
                            id="detailImageChoose"
                            hidden
                            onChange={handleUploadImage}
                        />
                        <div>(1080 x 480)</div>
                    </div>
                </div>

                {/* Tiêu đề */}
                <h2>Tiêu đề</h2>
                <input className="infor-event edit-active" type="text"
                    onChange={(e) => {
                        setFormFalse(false);
                        eventInfor = {
                            title: e.target.value,
                            detail_title: eventInfor.detail_title,
                            content: eventInfor.content,
                            start_time: eventInfor.start_time,
                            finish_time: eventInfor.finish_time,
                            thumbnail_image_url: eventInfor.thumbnail_image_url,
                            detail_image_url: eventInfor.detail_image_url
                        }
                        setEventInfor(eventInfor);
                        // //console.log(eventInfor);
                    }}        
                ></input>

                {/* Tiêu đề chi tiết */}
                <h2>Tiêu đề chi tiết</h2>
                <input className="infor-event edit-active" type="text"
                    onChange={(e) => {
                        setFormFalse(false);
                        eventInfor = {
                            title: eventInfor.title,
                            detail_title: e.target.value,
                            content: eventInfor.content,
                            start_time: eventInfor.start_time,
                            finish_time: eventInfor.finish_time,
                            thumbnail_image_url: eventInfor.thumbnail_image_url,
                            detail_image_url: eventInfor.detail_image_url
                        }
                        setEventInfor(eventInfor);
                        // //console.log(eventInfor);
                    }}        
                ></input>

                {/* Thời gian */}
                <div className="time-event">
                    <div className="start-time">
                        <h2>Ngày bắt đầu</h2>
                        
                        <input type='date'
                            value={eventInfor.start_time.toString().substring(0, 10)}
                            onChange={(e) => {
                                setFormFalse(false);
                                eventInfor = {
                                    title: eventInfor.title,
                                    detail_title: eventInfor.detail_title,
                                    content: eventInfor.content,
                                    start_time: e.target.value,
                                    finish_time: eventInfor.finish_time,
                                    thumbnail_image_url: eventInfor.thumbnail_image_url,
                                    detail_image_url: eventInfor.detail_image_url
                                }
                                setEventInfor(eventInfor);
                                // //console.log(eventInfor);
                            }}
                        ></input>
                    </div>
                    <div className="finish-time">
                        <h2>Ngày kết thúc</h2>
                        
                        <input type='date'
                            value={eventInfor.finish_time.toString().substring(0, 10)}
                            onChange={(e) => {
                                setFormFalse(false);
                                eventInfor = {
                                    title: eventInfor.title,
                                    detail_title: eventInfor.detail_title,
                                    content: eventInfor.content,
                                    start_time: eventInfor.start_time,
                                    finish_time: e.target.value,
                                    thumbnail_image_url: eventInfor.thumbnail_image_url,
                                    detail_image_url: eventInfor.detail_image_url
                                }
                                setEventInfor(eventInfor);
                                // //console.log(eventInfor);
                            }}
                        ></input>
                    </div>
                </div>

                {/* Nội dung */}
                <h2>Nội dung</h2>
                
                <input className="infor-event edit-active" type="text"
                    onChange={(e) => {
                        setFormFalse(false);
                        eventInfor = {
                            title: eventInfor.title,
                            detail_title: eventInfor.detail_title,
                            content: e.target.value,
                            start_time: eventInfor.start_time,
                            finish_time: eventInfor.finish_time,
                            thumbnail_image_url: eventInfor.thumbnail_image_url,
                            detail_image_url: eventInfor.detail_image_url
                        }
                        setEventInfor(eventInfor);
                        // //console.log(eventInfor);
                    }}        
                ></input>
            </div>
            {formFalse && <div className="form-false-event-create">{errMsg}</div>}
            <div className="btn-update-cancel">
                <div>
                    <button className="event-update-btn" onClick={handleCreate}>Lưu</button>
                    <button className="event-cancel-btn" onClick={handleCancel}>Huỷ</button>
                </div>
            </div>
            
            <Popup trigger={showPopup} message="Thêm sự kiện thành công"></Popup>
        </div>
    );
}

export default EventAdd;
