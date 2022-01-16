import React from "react";
import { Routes, Route } from 'react-router-dom'
import "./Content_Event.css";
import { Ct_Event_List, Ct_Event_Detail } from './../'
import sukien from "./../../store/imgs/sukien.png";

function Content_Event() {
    return (
        <div>
            <img className="banner-event" src={sukien} alt="" />
            <Routes>
                <Route path="" element={<Ct_Event_List />} />
                <Route path="detail/:id" element={<Ct_Event_Detail />} />
            </Routes>
        </div>
    );
}

export default Content_Event;
