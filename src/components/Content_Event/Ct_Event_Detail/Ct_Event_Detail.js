import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./Ct_Event_Detail.css";
import { Ct_Event_Element } from "./../../";
import eventAPI from "./../../../api/eventAPI";

function Ct_Event_Detail() {

    const {id} = useParams();
    let [event, setEvent] = useState([]);
    let [events, setEvents] = useState([]);
    
    useEffect(() => {
        (async () => {
            console.log(id);
            const response = await eventAPI.eventDetail(id);
            console.log(response);
            if (response && response.status && response.data.status) {
                event = response.data.data;
                setEvent(event);
            }

            
            const responseL = await eventAPI.eventList();
            // console.log(response);

            if (responseL && responseL.status && responseL.data.status) {
                var _events = [];
                const eList = responseL.data.data.event_list;
                _events.push(eList[eList.length - 1]);
                _events.push(eList[eList.length - 2]);
                _events.push(eList[eList.length - 3]);
                events = _events;
                setEvents(events);
                // console.log(events);
            }
        })();
    }, []);


    return (
        <div>
            <div className="content-event-detail">
                <div className="event-detail-wrapper">
                    <Link to="/event" className="event-back">
                        <i class="fas fa-arrow-left"></i>
                        SỰ KIỆN
                    </Link>
                    <div className="event-detail-name">{event.detail_title}</div>
                    <div className="event-detail-time">
                        <i class="fal fa-calendar-alt"></i>
                        <div>{event.start_time ? event.start_time.substring(0, 10) : ''}</div>
                        <div>-</div>
                        <div>{event.finish_time ? event.finish_time.substring(0, 10) : ''}</div>
                    </div>
                    <img src={process.env.REACT_APP_API_URL + event.thumbnail_image_url} className="event-detail-image" alt="" />
                    <div className="event-detail-infor">{event.content}</div>
                </div>
                <h1>SỰ KIỆN KHÁC</h1>
                <div className="row">
                    {
                        events.map(event => {
                            return <Ct_Event_Element event={event} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Ct_Event_Detail;
