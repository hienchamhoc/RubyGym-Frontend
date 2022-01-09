import React, { useState, useEffect } from "react";
import "./EventAdd.css";
import managementAPI from "../../../../api/managementAPI";

function EventAdd() {
    return (
        <div className="event-detail-wrapper">
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
                <div className="infor-event edit-active">
                </div>

                {/* Tiêu đề chi tiết */}
                <h2>Tiêu đề chi tiết</h2>
                <div className="infor-event edit-active">
                </div>

                {/* Thời gian */}
                <div className="time-event">
                    <div className="start-time">
                        <h2>Ngày bắt đầu</h2>
                        <div className="infor-event edit-active">
                        </div>
                    </div>
                    <div className="finish-time">
                        <h2>Ngày kết thúc</h2>
                        <div className="infor-event edit-active">
                        </div>
                    </div>
                </div>

                {/* Nội dung */}
                <h2>Nội dung</h2>
                <div className="infor-event edit-active">
                    
                </div>
            </div>
            <div className="btn-update-cancel">
                <div>
                    <button className="event-update-btn">Lưu</button>
                    <button className="event-cancel-btn">Huỷ</button>
                </div>
            </div>
        </div>
    );
}

export default EventAdd;
