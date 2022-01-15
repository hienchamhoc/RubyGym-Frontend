import React, { useState, useEffect } from 'react'
import { CustomerDetail } from '../../..'
import AdminHeader from '../AdminHeader/AdminHeader'
import axiosClient from '../../../../api/axiosClient'
import managementAPI from '../../../../api/managementAPI'

import './CustomerList.css'
import CustomerElement from '../CustomerElement/CustomerElement'


function CustomerList() {
    let [members, setMembers] = useState([]);

    useEffect(() =>{
        (async () =>{
            const res = await managementAPI.memberList();
            console.log(res);
            members = res.data.data.memberList;
            setMembers(members);
            
            // console.log(members)
        })();
        
    },[]);


    return (
        <div className="customer-list-wrapper">
            <AdminHeader heading="Hội viên" />
            <div className="customer-list-content">
                {
                    members.map((member) => {
                        return <CustomerElement infor={member}/>
                    })
                }
            </div>
        </div>
    )
}

export default CustomerList
