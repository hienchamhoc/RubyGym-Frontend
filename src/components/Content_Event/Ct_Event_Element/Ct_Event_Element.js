import React from "react";
import { Link } from "react-router-dom";
import "./Ct_Event_Element.css";
import sk1_event from "./../../../store/imgs/sk1_event.png";

function Ct_Event_Element() {
    return (
        <div className="col l-4">
            <div className="event">
                <Link to={`detail/1`} className="event-img">
                    <img src={sk1_event} alt="" />
                </Link>
                <Link to={`detail/1`} className="event-name">
                    ĐIỀU ƯỚC GIÁNG SINH
                </Link>
                <div className="event-date">06-12-2021</div>
                <div className="event-ct">
                    Chào mừng Giáng Sinh sắp tới, cả nhà cùng tham gia sự kiện
                    vòng quay Giáng Sinh với RUBYGYM nha! Cách thức tham gia vô
                    cùng đơn giản, chỉ cần tham gia là có quà mà phần thưởng thì
                    vô cùng hấp dẫn và giá trị nhé!
                </div>
                <Link to={`detail/1`} className="event-next">
                    TIẾP
                    <i class="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
}

export default Ct_Event_Element;
