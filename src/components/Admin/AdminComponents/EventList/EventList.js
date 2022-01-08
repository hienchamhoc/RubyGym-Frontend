import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EventElement } from "./../../../";
import "./EventList.css";
import managementAPI from "../../../../api/managementAPI";
import sk1_event from "../../../../store/imgs/sk1_event.png";

function EventList() {
    let [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await managementAPI.EventList();
            events = res.data.data.event_list;
            setEvents(events);

        })();
    }, []);

    return (
        <div className="event-list-wrapper">
            <div className="event-list-header">
                <h1 className="event-headingg">SỰ KIỆN</h1>
                <div className="search-event-box">
                    <div className="search-event-box-input">
                        <span className="icon">
                            <i className="fa fa-search"></i>
                        </span>
                        <input
                            type="search"
                            id="search-event"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <Link to={`add`}>
                    <button className="event-add-btn">Thêm</button>
                </Link>
            </div>
            <div className="event-table-wrapper">
                <table className="event-table">
                    <tr className="title">
                        <th className="stt">STT</th>
                        <th className="img">Ảnh</th>
                        <th className="title-event">Tiêu đề</th>
                        <th className="start">Ngày bắt đầu</th>
                        <th className="finish">Ngày kết thúc</th>
                        <th className="btn-delete"></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src={sk1_event} alt="" />
                        </td>
                        <td>
                            <Link to={`detail/1`} className="event-link">
                                ĐIỀU ƯỚC GIÁNG SINH
                            </Link>
                        </td>
                        <td>07/12/2021</td>
                        <td>24/12/2021</td>
                        <td>
                            <button>Xóa</button>
                        </td>
                    </tr>
                    
                    <EventElement />
                    <EventElement />
                    <EventElement />
                    <EventElement />
                </table>
            </div>
        </div>
    );
}

export default EventList;
