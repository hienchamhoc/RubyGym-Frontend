// import React, { useState, useEffect } from 'react'
// import { CustomerDetail } from '../../..'
// import AdminHeader from '../AdminHeader/AdminHeader'
// import axiosClient from '../../../../api/axiosClient'
// import managementAPI from '../../../../api/managementAPI'

// import './CustomerList.css'
// import CustomerElement from '../CustomerElement/CustomerElement'


// function CustomerList() {
//     let [members, setMembers] = useState([]);

//     useEffect(() =>{
//         (async () =>{
//             const res = await managementAPI.memberList();
//             console.log(res);
//             members = res.data.data.memberList;
//             setMembers(members);
            
//             // console.log(members)
//         })();
        
//     },[]);


//     return (
//         <div className="customer-list-wrapper">
//             <AdminHeader heading="Hội viên" />
//             <div className="customer-list-content">
//                 {
//                     members.map((member) => {
//                         return <CustomerElement infor={member}/>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default CustomerList
import React, { useState, useEffect } from "react";
import { CustomerDetail } from "../../..";
import AdminHeader from "../AdminHeader/AdminHeader";
import axiosClient from "../../../../api/axiosClient";
import managementAPI from "../../../../api/managementAPI";

import "./CustomerList.css";
import CustomerElement from "../CustomerElement/CustomerElement";

function CustomerList() {
    let [members, setMembers] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await managementAPI.memberList();
            console.log(res);
            members = res.data.data.memberList;
            setMembers(members);

            // console.log(members)
        })();
    }, []);

    return (
        <div className="customer-list-wrapper">
            <AdminHeader heading="Hội viên" />
            <div className="customer-table-wrapper">
                <table className="customer-table">
                    <tr className="customer-title">
                        <th className="img-customer">Ảnh</th>
                        <th className="name-customer">Họ và tên</th>
                        <th className="gender-customer">Giới tính</th>
                        <th className="phone-customer">Số điện thoại</th>
                        <th className="trainer-customer">Huấn luyện viên</th>
                        <th className="status-customer">Trạng thái</th>
                        <th className="btn-customer"></th>
                    </tr>
                    {
                     members.map((member) => {
                         return <CustomerElement infor={member}/>
                     })
                    }
                </table>
            </div>
        </div>
    );
}

export default CustomerList;
