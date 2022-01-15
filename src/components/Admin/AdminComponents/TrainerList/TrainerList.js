import React, { useEffect, useState } from 'react'
import { TrainerElement } from './../../../'
import AdminHeader from '../AdminHeader/AdminHeader'
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
        <AdminHeader trainer="true" heading="Huấn luyện viên" />
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
