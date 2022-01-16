import React from "react";
import "./Ct_Event_List.css";
import { Ct_Event_Element } from "./../../";
import { useEffect, useState } from "react";

import eventAPI from "./../../../api/eventAPI";

function Ct_Event_List() {
    let [events, setEvents] = useState([]);

    
    useEffect(() => {
        (async () => {
            const response = await eventAPI.eventList();
            // console.log(response);

            if (response && response.status && response.data.status) {
                events = response.data.data.event_list;
                setEvents(events);
                // console.log(events);
            }
        })();
    }, []);

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
                        {
                            events.map(event => {
                                return <Ct_Event_Element event={event} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ct_Event_List;
