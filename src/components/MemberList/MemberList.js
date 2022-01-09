import { React, useState, useRef, useEffect } from 'react'
import { useTable } from 'react-table';
import { TrainerRating } from '..';
import avatar from "./../../store/imgs/avatar.jpg";
import "./MemberList.css"




function Table({ columns, data, date }) {
    // Use the state and functions returned from useTable to build your UI

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (

        <table {...getTableProps()} className="table table-hover table-bordered table-borderless tablepopup">

            <thead className=" table-thread">
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )
}
function MemberList() {
    let [showPopup, setShowPopup] = useState(false);

    const column = [
        {
            Header: 'Ảnh', accessor: 'avatar',
            Cell: row =>
                <img className="MemberList-Avatar"

                    src={avatar}
                ></img>
        },
        { Header: 'Họ tên', accessor: 'name', Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> },
        { Header: 'Ngày sinh', accessor: 'birthday', Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> },
        { Header: 'Giới tính', accessor: 'gender', Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> },
        { Header: 'Số điện thoại', accessor: 'phone', Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> },

        {
            Header: '',
            accessor: 'EditAndDelete',
            Cell: row => (
                <div
                    style={{ textAlign: "center" }}
                >
                    <button className="btn btn-danger"
                        onClick={() => {
                            setShowPopup(true);
                        }}>Đánh giá</button>
                </div>
            )
        }
    ]
    const datas = [
        { avatar: '', name: 'Hien', birthday: '20/11/2008', gender: 'Nam', phone: '0968372613' }

    ]
    return (
        <>
            <Table
                columns={column}
                data={datas}
            />
            <TrainerRating trigger={showPopup} setTrigger={setShowPopup} />
        </>
    )
}
export default MemberList