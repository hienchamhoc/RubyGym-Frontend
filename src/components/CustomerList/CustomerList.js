import React from 'react'

import './CustomerList.css'


function CustomerList() {
    return (
        <div className="customer-list-wrapper">
            <h1 className="customer-heading">Học viên</h1>
            <div className="trainer-students">
                <h2 className="trainer-students-heading">Danh sách học viên</h2>
                <table className="students-table">
                    <thead className="students-table-header">
                        <tr >
                            <th>Thứ tự</th>
                            <th>Họ và tên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Số điện thoại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="students-table-body">
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn Đương</td>
                            <td>29</td>
                            <td>Nam</td>
                            <td>0123455674</td>
                            <td><button>Xóa</button></td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn Đương</td>
                            <td>29</td>
                            <td>Nam</td>
                            <td>0123455674</td>
                            <td><button>Xóa</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn Đương</td>
                            <td>29</td>
                            <td>Nam</td>
                            <td>0123455674</td>
                            <td><button>Xóa</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn Đương</td>
                            <td>29</td>
                            <td>Nam</td>
                            <td>0123455674</td>
                            <td><button>Xóa</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerList
