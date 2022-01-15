import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./EventAdd.css";
import eventAPI from "../../../../api/eventAPI";
import Popup from '../../../Popup/Popup'

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
                        <img src="" alt="" />
                        <button className="thumbnail-img-btn">
                            <i class="fal fa-camera"></i>
                        </button>
                        <div>(350 x 250)</div>
                    </div>
                    <div className="detail-img-event">
                        <img src="" alt="" />
                        <button className="detail-img-btn">
                            <i class="fal fa-camera"></i>
                        </button>
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
