import { React, useState, useRef, useEffect } from 'react'
import { useTable } from 'react-table';
import './CalendarPopup.css';
const column = [
    { Header: 'ID', accessor: 'schedule_id' },
    { Header: 'Bắt đầu', accessor: 'start_time' },
    { Header: 'Kết thúc', accessor: 'finish_time' },
    { Header: 'Địa điểm', accessor: 'location' },
    { Header: 'Bài học', accessor: 'lecture' },
    { Header: 'Nghỉ', accessor: 'is_cancelled' }
];

function Table({ columns, data }) {
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
                {/* {data[0].date} */}
                {function () {
                    const date = new Date(data[0].date);
                    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
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
    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (props.trigger && ref.current && !ref.current.contains(e.target)) {
                props.setTrigger(false);
            }
        };

        document.addEventListener('click', checkIfClickedOutside, true);

        return () => {
            // Cleanup the event listener
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
                    <Table
                        columns={column}
                        data={function () {
                            var calendarList = props.data;

                            for (var i = 0; i < props.data.length; i++) {
                                calendarList[i].date = new Date(calendarList[i].start_time);
                                calendarList[i].start_time = '' + new Date(calendarList[i].start_time).getHours()
                                    + ":" + new Date(calendarList[i].start_time).getMinutes();;
                                calendarList[i].finish_time = '' + new Date(calendarList[i].finish_time).getHours()
                                    + ":" + new Date(calendarList[i].finish_time).getMinutes();
                            }
                            return calendarList;
                        }()}
                    ></Table>
                </div>
            </div>
        </>
    ) : null;
}
export default CalendarPopup