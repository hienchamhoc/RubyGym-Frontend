import { React, useState, useRef, useEffect } from 'react'
import { useTable } from 'react-table';
import clsx from "clsx";
import { TrainerRating } from './../../';
import avatar from "../../../store/imgs/avatar.jpg";
import styles from "./MemberList.module.css"
import trainerProfileAPI from '../../../api/trainerProfileAPI';



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

        <table {...getTableProps()} className={clsx(styles.tableMemberList)}>

            <thead>
                {headerGroups.map(headerGroup => (
                    <tr className={clsx(styles.tableHeader)} {...headerGroup.getHeaderGroupProps()}>
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

    const data = [
        { avatar_url: '', name: 'Trần Ngọc Hiển', birthday: '20/11/2008', gender: 'Nam', phone: '0968372613' }

    ];


    const column = [
        {
            Header: 'Ảnh', accessor: 'avatar',
            Cell: row =>
                <div className="MemberList-Avatar"
                    style={{
                        backgroundImage: data.avatar_url
                            ? `url(${data.avatar_url})`
                            : `url(${avatar})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
        },
        { Header: 'Họ và tên', accessor: 'name', Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> },
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
                    <button className={clsx(styles.btnRating)}
                        onClick={() => {
                            setShowPopup(true);
                        }}>Đánh giá</button>
                </div>
            )
        }
    ]

    // useEffect(() => {
    //     (async () => {
    //         const response = await trainerProfileAPI.getMyUser();
    //         if (response && response.status && response.data.status) {
    //             data = response.data.data
    //         }
    //     })();
    // }, []);

    return (
        <>
            <Table
                columns={column}
                data={data}
            />
            <TrainerRating trigger={showPopup} setTrigger={setShowPopup} data={data} />
        </>
    )
}
export default MemberList