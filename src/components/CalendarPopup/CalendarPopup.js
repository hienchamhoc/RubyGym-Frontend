import { React, useState, useRef, useEffect } from 'react'
import { useTable } from 'react-table';
import './CalendarPopup.css';
import calendarAPI from '../../api/calendarAPI';

var calendarList;

// const column = [
//     { Header: 'ID', accessor: 'schedule_id' },
//     { Header: 'Bắt đầu', accessor: 'start_time' },
//     { Header: 'Kết thúc', accessor: 'finish_time' },
//     { Header: 'Địa điểm', accessor: 'location' },
//     { Header: 'Bài học', accessor: 'lecture' },
//     { Header: 'Nghỉ', accessor: 'is_cancelled' },
//     {
//         Header: 'Sua Xoa',
//         accessor: 'EditAndDelete',
//         Cell: row => (
//             <div>
//                 <button onClick={() => handleEdit(row)} className="btn btn-success">Sửa</button>
//                 <button onClick={() => handleDelete(row)} className="btn btn-danger">Xoá</button>
//             </div>
//         )
//     }
// ];
// const handleEdit = () => {

// }
// const handleDelete = async (row) => {
//     console.log(row.cell.row.id);
//     const currentSchedulesId = calendarList[row.cell.row.id]
//     const response = await calendarAPI.deleteCalendarDaily(currentSchedulesId);
//     console.log(response);
// }

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

        <table {...getTableProps()} className="table table-hover table-bordered table-borderless caption-top tablepopup">
            <caption className="table-caption">
                {function () {
                    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                }()}
            </caption>
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
function CalendarPopup(props) {
    let [showTable, setShowTable] = useState(false);
    const column = localStorage.getItem('role') == 'trainer' ?
        [
            { Header: 'Khung giờ', accessor: 'time_showed' },
            { Header: 'Địa điểm', accessor: 'location' },
            { Header: 'Bài học', accessor: 'lecture' },
            {
                Header: 'Nghỉ', accessor: 'is_cancelled',
                Cell: <input type='checkbox' />
            },
            {
                Header: 'Tùy chọn',
                accessor: 'EditAndDelete',
                Cell: row => (
                    <div>
                        {/* <button onClick={() => handleEdit(row)} className="btn btn-success">Sửa</button> */}
                        <button onClick={() => handleDelete(row)} className="btn btn-danger">Xóa</button>
                    </div>
                )
            }
        ] :
        [
            { Header: 'Khung giờ', accessor: 'time_showed' },
            { Header: 'Địa điểm', accessor: 'location' },
            { Header: 'Bài học', accessor: 'lecture' },
            {
                Header: 'Nghỉ', accessor: 'is_cancelled',
                Cell: <input type='checkbox' disabled={true} />
            },
        ];
    // const handleEdit = () => {

    // }
    const handleDelete = async (row) => {
        // console.log(row.cell.row.id);
        const currentSchedulesId = calendarList[row.cell.row.id].id;
        // console.log(currentSchedulesId);
        const response = await calendarAPI.deleteCalendarDaily(currentSchedulesId);
        // console.log(response);
    }
    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (props.trigger && ref.current && !ref.current.contains(e.target)) {
                props.setTrigger(false);
            }
        };

        document.addEventListener('click', checkIfClickedOutside, true);

        return () => {
            document.removeEventListener('click', checkIfClickedOutside, true);
        };
    }, [props.trigger]);
    return props.trigger ? (
        <>
            <div className="popupWrapper"  >
                <div className="popupInner" ref={ref}>
                    <button
                        className="btn-close close-btn"
                        onClick={() => {
                            props.setTrigger(false)
                        }}
                    ></button>
                    {props.data && props.data.length > 0 ? <Table
                        columns={column}
                        data={function () {
                            calendarList = props.data;
                            for (var i = 0; i < props.data.length; i++) {
                                var startHour = new Date(calendarList[i].start_time).getHours().toString(),
                                    startMinute = new Date(calendarList[i].start_time).getMinutes().toString();
                                if (startHour.length == 1) startHour += '0';
                                if (startMinute.length == 1) startMinute += '0';
                                var start_time_showed = startHour + ":" + startMinute;

                                var finishHour = new Date(calendarList[i].finish_time).getHours().toString(),
                                    finishMinute = new Date(calendarList[i].finish_time).getMinutes().toString();

                                if (finishHour.length == 1) finishHour += '0';
                                if (finishMinute.length == 1) finishMinute += '0';
                                var finish_time_showed = finishHour + ":" + finishMinute;

                                calendarList[i].time_showed = start_time_showed + ' - ' + finish_time_showed;
                            }
                            return calendarList;
                        }()}
                        date={props.date}
                    ></Table> : <h2 className='message'>Không có dữ liệu</h2>}
                </div>
            </div>
        </>
    ) : null;
}
export default CalendarPopup