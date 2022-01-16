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
    let [data, setData] = useState([]);


    const column = [
        {
            Header: 'Ảnh', accessor: 'avatar_url',
            Cell: row =>
                // <div className="MemberList-Avatar"
                //     style={{
                //         backgroundImage: row.value
                //             ? `url(${process.env.REACT_APP_API_URL + row.value})`
                //             : `url(${avatar})`,
                //         backgroundPosition: "center",
                //         backgroundSize: "cover",
                //         backgroundRepeat: "no-repeat",
                //     }}
                // ></div>
                <div
                        style={
                            row.value ? {
                                background: `url(${process.env.REACT_APP_API_URL + row.value})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '60px',
                                width: '60px',
                                margin: 'auto'
                            } : {
                                background: `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '50px',
                                width: '50px',
                                margin: 'auto'
                            }}
                        // className={clsx(styles.avatarImg)}
                    >
                    </div>
        },
        { Header: 'Họ và tên', accessor: 'name', Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> },
        { Header: 'Ngày sinh', accessor: 'birthday', Cell: row => <div style={{ textAlign: "center" }}>{row.value ? row.value.substring(0, 10) : ''}</div> },
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

    useEffect(() => {
        (async () => {
            const response = await trainerProfileAPI.getMyUser();
            // console.log(response);
            if (response && response.data.status) {
                console.log(response.data.data.member_list)
                data = response.data.data.member_list;
                setData(data);
            }
        })();
    }, []);

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