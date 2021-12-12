import React from 'react'
import { TrainerElement } from './../../../'
import './TrainerList.css'


function TrainerList() {
    return (
        <div className="trainer-list-wrapper">
            <div className="trainer-list-header">
                <h1 className="trainer-heading">HUẤN LUYỆN VIÊN</h1>
                <div className="search-trainer-box">
                    <div className="search-trainer-box-input">
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input type="search" id="search-trainer" placeholder="Search..." />
                    </div>
                </div>
                <button className="trainer-add-btn">Thêm</button>
            </div>
            <div className="row">
                <TrainerElement />
                <TrainerElement />
                <TrainerElement />
                <TrainerElement />
                <TrainerElement />
                <TrainerElement />
                <TrainerElement />
                <TrainerElement />
                <TrainerElement />
                <TrainerElement />

            </div>
        </div>
    )
}

export default TrainerList
