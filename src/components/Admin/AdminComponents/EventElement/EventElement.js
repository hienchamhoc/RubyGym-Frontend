import React from "react";
import { Link } from "react-router-dom";
import "./EventElement.css";
import sk1_event from "../../../../store/imgs/sk1_event.png";

function EventElement() {
    const id = 1;
    return (
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
    );
}

export default EventElement;
