import React, { useEffect, useState } from 'react'
import { TrainerElement } from './../../../'
import './TrainerList.css'
import managementAPI from '../../../../api/managementAPI'


function TrainerList() {
    let [trainers, setTrainers] = useState([]);

    useEffect(() =>{
        (async () =>{
            const res = await managementAPI.trainerList();
            // console.log(res);
            trainers = res.data.data.trainer_list
            setTrainers(trainers)
            
            // console.log(trainers)
        })();
        
    },[]);

    return (
        <div className="trainer-list-wrapper">
            <div className="trainer-list-header">
                <h1 className="trainer-headingg">HUẤN LUYỆN VIÊN</h1>
                <div className="search-trainer-box">
                    <div className="search-trainer-box-input">
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input type="search" id="search-trainer" placeholder="Search..." />
                    </div>
                </div>
                <button className="trainer-add-btn">Thêm</button>
            </div>
            <div className="row">
                {
                    trainers.map((trainer)=>{
                        return <TrainerElement 
                            trainer={trainer}
                        />
                    })
                }
                
            </div>
        </div>
    )
}

export default TrainerList
