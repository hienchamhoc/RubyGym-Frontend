import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EventElement.css";
import eventAPI from "../../../../api/eventAPI";
import Popup from '../../../Popup/Popup'

function EventElement(props) {
    let [showPopup, setShowPopup] = useState(false);
    const { index, id, title, start_time, finish_time, thumbnail_image_url } = props;

    console.log(props)

    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={process.env.REACT_APP_API_URL + thumbnail_image_url} alt="Anh minh hoa" />
            </td>
            <td>
                <Link to={`detail/${id}`} className="event-link">
                    {title}
                </Link>
            </td>
            <td>{start_time}</td>
            <td>{finish_time}</td>
            <td>
                <button
                onClick={async (e) => {
                    const res = await eventAPI.deleteEvent(id);
                    if (res.data.status) {
                        console.log("ok");
                        props.handleDeleteEvent(id);
                    }
                    else {

                    }
                }}
                >Xóa</button>
            </td>
        </tr>
    );
}

export default EventElement;
