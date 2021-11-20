import React from 'react'
import { Trainer } from './../'
import './TrainerList.css'


function TrainerList() {
    return (
        <div className="trainer-list-wrapper">
            <div className="trainer-list-header">
                <h1 className="trainer-heading">Huấn luyện viên</h1>
                <button className="trainer-add-btn">Thêm</button>
            </div>
            <div className="row">
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
                <Trainer />
            </div>
        </div>
    )
}

export default TrainerList
