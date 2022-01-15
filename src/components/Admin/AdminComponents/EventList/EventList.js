import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EventElement } from "./../../../";
import "./EventList.css";
import eventAPI from "../../../../api/eventAPI";

function EventList() {
    let [events, setEvents] = useState([]);
    const handleDeleteEvent = (id) => {
        events = events.filter(event => event.id !== id);
        setEvents(events);
    };

    useEffect(() => {
        (async () => {
            const res = await eventAPI.eventList();
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
                    {
                        events.map((event, index)=>{
                            return <EventElement id={event.id} index={index + 1} title={event.title} handleDeleteEvent={handleDeleteEvent}
                                start_time={function(){
                                    const _date = new Date(event.start_time);
                                    const year = _date.getFullYear();
                                    const month = _date.getMonth() + 1;
                                    const date = _date.getDate();
                                    return date + '/' + month + '/' + year;
                                }()}
                                finish_time={function(){
                                    const _date = new Date(event.finish_time);
                                    const year = _date.getFullYear();
                                    const month = _date.getMonth() + 1;
                                    const date = _date.getDate();
                                    return date + '/' + month + '/' + year;
                                }()}
                                thumbnail_image_url={event.thumbnail_image_url}
                            />
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default EventList;
