import { React, useState, useRef, useEffect } from 'react'
import { useTable } from 'react-table';
import './CalendarPopup.css';
const column = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Bắt đầu', accessor: 'starttime' },
    { Header: 'Kết thúc', accessor: 'finishtime' },
    { Header: 'Địa điểm', accessor: 'location' },
    { Header: 'Bài học', accessor: 'lecture' },
    { Header: 'Nghỉ', accessor: 'absent' }
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
                {data[0].date}
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
            <div>Calendar   popup</div>
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
                        data={props.data}

                    ></Table>
                </div>
            </div>
        </>
    ) : null;
}
export default CalendarPopup