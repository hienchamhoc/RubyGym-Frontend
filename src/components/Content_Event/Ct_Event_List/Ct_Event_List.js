import React from "react";
import "./Ct_Event_List.css";
import { Ct_Event_Element } from "./../../";

function Ct_Event_List() {
    return (
        <div>
            <div className="content-event">
                <h1>SỰ KIỆN</h1>
                <h2>
                    Hàng tháng sẽ có các sự kiện được tổ chức tại trung tâm để
                    khích lệ hoạt động luyện tập của khách hàng
                </h2>
                <div className="grid wide">
                    <div className="row">
                        <Ct_Event_Element />
                        <Ct_Event_Element />
                        <Ct_Event_Element />
                        <Ct_Event_Element />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ct_Event_List;
