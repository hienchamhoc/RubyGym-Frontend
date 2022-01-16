import React from "react";
import { Link } from "react-router-dom";
import "./Ct_Event_Element.css";
import sk1_event from "./../../../store/imgs/sk1_event.png";

function Ct_Event_Element({event}) {
    return (
        <div className="col l-4">
            <div className="event">
                <Link to={`/event/detail/${event.id}`} className="event-img" target='_blank'>
                    <img src={process.env.REACT_APP_API_URL + event.thumbnail_image_url}
                        width='100%'  alt="" />
                </Link>
                <Link to={`/event/detail/${event.id}`} className="event-name">{event.title}</Link>
                <div className="event-date">{event.start_time + ' - ' + event.finish_time}</div>
                <div className="event-ct">{event.content}</div>
            </div>
        </div>
    );
}

export default Ct_Event_Element;
