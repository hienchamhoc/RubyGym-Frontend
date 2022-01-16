import React, { useState, useEffect } from "react";
import "./EventDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import Popup from '../../../Popup/Popup'
import eventAPI from "../../../../api/eventAPI";

function EventDetail(props) {
    const navigate = useNavigate();
    let [isPTag, setPTag] = useState(true);
    let [showPopup, setShowPopup] = useState(false);
    let [eventInfor, setEventInfor] = useState({
        id: '',
        title: '',
        detail_title: '',
        content: '',
        start_time: new Date(),
        finish_time: '',
        thumbnail_image_url: '',
        detail_image_url: ''
    });
    let [eventInforOnChange, setEventInforOnChange] = useState({
        id: '',
        title: '',
        detail_title: '',
        content: '',
        start_time: '',
        finish_time: '',
        thumbnail_image_url: '',
        detail_image_url: ''
    });
    const handleEdit = () => {
        setPTag(false);
    };
    const handleCancel = () => {
        setPTag(true);
        setEventInforOnChange({...eventInfor});
    };
    const handleUpdate = async () => {
        //console.log(eventInforOnChange);
        const response = await eventAPI.updateEvent(eventInfor.id, eventInforOnChange);
        //console.log(response);
        if (response && response.status) {
            setShowPopup((prev) => !prev);
            setEventInfor({...eventInforOnChange});
            setPTag(true);
            setTimeout(() => {
                setShowPopup((prev) => !prev);
            }, 1000);
        }
        if (response && !response.status && response.message) {
            alert(response.message);
        }
    };

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            console.log("hi", id);
            const res = await eventAPI.eventDetail(id);
            console.log(res);
            eventInfor = res.data.data;
            eventInforOnChange = res.data.data;
            setEventInfor(eventInfor);
            setEventInforOnChange(eventInforOnChange);
        })();
    }, []);

    return (
        <div className="event-detail-wrapperr">
            <div className="event-detail-header">
                <h1 className="event-headingg">SỰ KIỆN</h1>
                {isPTag && (
                    <button onClick={handleEdit} className="event-edit-btn">
                        Chỉnh sửa
                    </button>
                )}
            </div>
            <div className="event-detail-content">
                {/* Ảnh sự kiện */}
                <h2>Ảnh sự kiện</h2>
                <div className={isPTag ? "img-event" : "img-event edit-active"}>
                    <div className="thumbnail-img-event">
                        <img src={process.env.REACT_APP_API_URL + eventInfor.thumbnail_image_url} alt="" />
                        {!isPTag && (
                            <button className="thumbnail-img-btn">
                                <i class="fal fa-camera"></i>
                            </button>
                        )}
                        <div>(350 x 250)</div>
                    </div>
                    <div className="detail-img-event">
                        <img src={process.env.REACT_APP_API_URL + eventInfor.detail_image_url} alt="" />
                        {!isPTag && (
                            <button className="detail-img-btn">
                                <i class="fal fa-camera"></i>
                            </button>
                        )}
                        <div>(1080 x 480)</div>
                    </div>
                </div>

                {/* Tiêu đề */}
                <h2>Tiêu đề</h2>
                {isPTag ? 
                    <div className={isPTag ? "infor-event" : "infor-event edit-active"}>
                        {eventInfor.title}
                    </div>
                    : <input className="infor-event edit-active" type="text"
                        value={eventInforOnChange.title}
                        onChange={(e) => {
                            eventInforOnChange = {
                                title: e.target.value,
                                detail_title: eventInforOnChange.detail_title,
                                content: eventInforOnChange.content,
                                start_time: eventInforOnChange.start_time,
                                finish_time: eventInforOnChange.finish_time,
                                thumbnail_image_url: eventInforOnChange.thumbnail_image_url,
                                detail_image_url: eventInforOnChange.detail_image_url
                            }
                            setEventInforOnChange(eventInforOnChange);
                            // //console.log(eventInforOnChange);
                        }}                
                    ></input>
                }

                {/* Tiêu đề chi tiết */}
                <h2>Tiêu đề chi tiết</h2>
                {isPTag ? 
                <div className="infor-event">
                    {eventInfor.detail_title}
                </div> 
                : <input className="infor-event edit-active" type="text"
                    value={eventInforOnChange.detail_title}
                    onChange={(e) => {
                        eventInforOnChange = {
                            title: eventInforOnChange.title,
                            detail_title: e.target.value,
                            content: eventInforOnChange.content,
                            start_time: eventInforOnChange.start_time,
                            finish_time: eventInforOnChange.finish_time,
                            thumbnail_image_url: eventInforOnChange.thumbnail_image_url,
                            detail_image_url: eventInforOnChange.detail_image_url
                        }
                        setEventInforOnChange(eventInforOnChange);
                        // //console.log(eventInforOnChange);
                    }}                
                ></input>}

                {/* Thời gian */}
                <div className="time-event">
                    <div className="start-time">
                        <h2>Ngày bắt đầu</h2>
                        <input type='date' disabled={isPTag}
                            value={isPTag ? eventInfor.start_time.toString().substring(0, 10) : eventInforOnChange.start_time.toString().substring(0, 10)}
                            onChange={(e) => {
                                eventInforOnChange = {
                                    title: eventInforOnChange.title,
                                    detail_title: eventInforOnChange.detail_title,
                                    content: eventInforOnChange.content,
                                    start_time: e.target.value,
                                    finish_time: eventInforOnChange.finish_time,
                                    thumbnail_image_url: eventInforOnChange.thumbnail_image_url,
                                    detail_image_url: eventInforOnChange.detail_image_url
                                }
                                setEventInforOnChange(eventInforOnChange);
                                // //console.log(eventInforOnChange);
                            }}
                        ></input>
                    </div>
                    <div className="finish-time">
                        <h2>Ngày kết thúc</h2>
                        <input type='date' disabled={isPTag}
                            value={isPTag ? eventInfor.finish_time.toString().substring(0, 10) : eventInforOnChange.finish_time.toString().substring(0, 10)}
                            onChange={(e) => {
                                eventInforOnChange = {
                                    title: eventInforOnChange.title,
                                    detail_title: eventInforOnChange.detail_title,
                                    content: eventInforOnChange.content,
                                    start_time: eventInforOnChange.start_time,
                                    finish_time: e.target.value,
                                    thumbnail_image_url: eventInforOnChange.thumbnail_image_url,
                                    detail_image_url: eventInforOnChange.detail_image_url
                                }
                                setEventInforOnChange(eventInforOnChange);
                                // //console.log(eventInforOnChange);
                            }}
                        ></input>
                    </div>
                </div>

                {/* Nội dung */}
                <h2>Nội dung</h2>
                {isPTag ? 
                    <div className={isPTag ? "infor-event" : "infor-event edit-active"}>
                        {eventInfor.content}
                    </div>
                    : <input className="infor-event edit-active" type="text"
                        value={eventInforOnChange.content}
                        onChange={(e) => {
                            eventInforOnChange = {
                                title: eventInforOnChange.title,
                                detail_title: eventInforOnChange.detail_title,
                                content: e.target.value,
                                start_time: eventInforOnChange.start_time,
                                finish_time: eventInforOnChange.finish_time,
                                thumbnail_image_url: eventInforOnChange.thumbnail_image_url,
                                detail_image_url: eventInforOnChange.detail_image_url
                            }
                            setEventInforOnChange(eventInforOnChange);
                            // //console.log(eventInforOnChange);
                        }}                
                    ></input>
                }
            </div>
            <div className="btn-update-cancel">
                {!isPTag && (
                    <div>
                        <button
                            onClick={handleUpdate}
                            className="event-update-btn"
                        >
                            Lưu
                        </button>
                        <button
                            onClick={handleCancel}
                            className="event-cancel-btn"
                        >
                            Huỷ
                        </button>
                    </div>
                )}
            </div>
            <Popup trigger={showPopup} message="Cập nhật thành công" />
        </div>
    );
}

export default EventDetail;
