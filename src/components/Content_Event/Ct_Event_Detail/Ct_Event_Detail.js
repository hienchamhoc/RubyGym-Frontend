import React from "react";
import { Link } from "react-router-dom";
import "./Ct_Event_Detail.css";
import { Ct_Event_Element } from "./../../";
import sk1 from "./../../../store/imgs/sk1.png";

function Ct_Event_Detail() {
    return (
        <div>
            <div className="content-event-detail">
                <div className="event-detail-wrapper">
                    <Link to="/event" className="event-back">
                        <i class="fas fa-arrow-left"></i>
                        SỰ KIỆN
                    </Link>
                    <div className="event-detail-name">
                        THAM GIA VÒNG QUAY GIÁNG SINH, NHẬN NGAY IPHONE 13
                        PROMAX TẠI RUBYGYM!
                    </div>
                    <div className="event-detail-time">
                        <i class="fal fa-calendar-alt"></i>
                        <div>07/12/2021</div>
                        <div>-</div>
                        <div>24/12/2021</div>
                    </div>
                    <img src={sk1} className="event-detail-image" alt="" />
                    <div className="event-detail-infor">
                        Chào mừng Giáng Sinh sắp tới, cả nhà cùng tham gia sự
                        kiện vòng quay Giáng Sinh tại trung tâm RUBYGYM nha!
                        Cách thức tham gia vô cùng đơn giản, chỉ cần tham gia là
                        có quà mà phần thưởng thì vô cùng hấp dẫn và giá trị
                        nhé! Đối tượng tham gia: Tất cả các hội viên của trung
                        tâm Cách thức tham gia: Quay trực tiếp tại trung tâm Cơ
                        cấu giải thưởng: Thẻ điện thoại 100k, Thẻ hội viên 3
                        tháng miễn phí, Phiếu mua hàng, và đặc biệt là Iphone 13
                        PROMAX
                    </div>
                </div>
                <h1>SỰ KIỆN KHÁC</h1>
                <div className="row">
                    <Ct_Event_Element />
                    <Ct_Event_Element />
                    <Ct_Event_Element />
                </div>
            </div>
        </div>
    );
}

export default Ct_Event_Detail;
