import { React, useState, useRef, useEffect } from 'react'
import Select from 'react-select'
import Calendar from 'react-calendar';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import trainerProfileAPI from '../../../api/trainerProfileAPI';
import calendarAPI from '../../../api/calendarAPI';
// import calendarAPI from '../../../api/calendarAPI';
import './AddSchedule.css'
import { ToastBody } from 'react-bootstrap';

function AddSchedule(props) {
    const ref = useRef();
    let [ConfirmFalse, setConfirmFalse] = useState(false);
    let [schedule, setSchedule] = useState({
        member_id: '',
        start_time: new Date(),
        finish_time: new Date(),
        location: '',
        lecture: '',
        repeat_weekly: true
    })
    let [stateOnChange, setStateOnChange] = useState({
        start: 0,
        end: 0
    });
    const member = [
        { member_id: 1, name: 'Hien' },
        { member_id: 2, name: 'Dai' },
        { member_id: 3, name: 'Dung' },
        { member_id: 4, name: 'Duong' }
    ];
    const startTimeOptions = [
        { value: '6', label: '6:00' },
        { value: '7', label: '7:00' },
        { value: '8', label: '8:00' },
        { value: '9', label: '9:00' },
        { value: '10', label: '10:00' },
        { value: '11', label: '11:00' },
        { value: '12', label: '12:00' },
        { value: '13', label: '13:00' },
        { value: '14', label: '14:00' },
        { value: '15', label: '15:00' },
        { value: '16', label: '16:00' },
        { value: '17', label: '17:00' },
    ];
    const endTimeOptions = [
        { value: '7', label: '7:00' },
        { value: '8', label: '8:00' },
        { value: '9', label: '9:00' },
        { value: '10', label: '10:00' },
        { value: '11', label: '11:00' },
        { value: '12', label: '12:00' },
        { value: '13', label: '13:00' },
        { value: '14', label: '14:00' },
        { value: '15', label: '15:00' },
        { value: '16', label: '16:00' },
        { value: '17', label: '17:00' },
        { value: '18', label: '18:00' },

    ];
    const practiceLocations = [
        { location: 'tang 1' },
        { location: 'tang 2' },
        { location: 'tang 3' },
    ]
    // useEffect(() => {
    //     (async () => {
    //         const response = await trainerProfileAPI.getMyUser();
    //         if (response && response.status && response.data.status) {
    //            member = response.data.data
    //         }
    //     })();
    // }, []);
    // useEffect(() => {
    //     (async () => {
    //         const response = await calendarAPI.getPracticeLocations();
    //         if (response && response.status && response.data.status) {
    //             practiceLocations = response.data.data;
    //         }
    //     })();
    // }, []);
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

    const handleConfirm = async () => {
        if (stateOnChange.end - stateOnChange.start > 0) {
            setConfirmFalse(false);
            schedule.start_time.setHours(stateOnChange.start);
            schedule.finish_time.setHours(stateOnChange.end);
            console.log(schedule);
            console.log(schedule.repeat_weekly);
            // const response = await calendarAPI.AddSchedule(schedule);
            // if (response && !response.status) {
            //     alert(response.message)
            // }
        } else {
            setConfirmFalse(true);
            console.log(stateOnChange.start);
        }
    }
    return props.trigger ? (
        <>
            <div className='AddSchedule-popupWrapper'>
                <div className='AddSchedule-popupInner' ref={ref} >
                    <div className='AddSchedule-Container'>
                        <div className='AddSchedule-MemberList'>
                            <b className='AddSchedule-Text'>Học viên</b>
                            <Select
                                className='AddSchedule-Select AddSchedule-Select-Name '
                                classNamePrefix='AddSchedule-Select-Prefix'
                                // isSearchable="true"
                                placeholder="Họ tên"
                                maxMenuHeight={180}
                                options={function () {
                                    var myMembersList = member.map((item) => {
                                        return {
                                            label: item.name,
                                            member_id: item.member_id
                                        }
                                    })
                                    return myMembersList;
                                }()}
                                onChange={(e) => {
                                    schedule.member_id = e.member_id;
                                    console.log(e);
                                    console.log(schedule.member_id);
                                }}
                            />
                        </div>
                        <div className='AddSchedule-Day'>
                            <b className='AddSchedule-Text' >Thời gian</b>
                            {/* <DayPickerInput
                                onDayChange={(date) => {
                                    schedule.start_time = new Date(date);
                                    schedule.finish_time = new Date(date);
                                }}
                                classNames='AddSchedule-DayPicker'
                                placeholder='Ngày'
                            /> */}
                            <input
                                type="date"
                                className='AddSchedule-DayPicker'

                                onChange={(e) => {
                                    console.log(e.target.value);
                                    schedule.start_time = new Date(e.target.value);
                                    schedule.finish_time = new Date(e.target.value);
                                }}
                            ></input>

                            <br />
                            {/* <b className='AddSchedule-Text'>Giờ</b><br /> */}

                            <div className='AddSchedule-Day-Start'>
                                {/* <b className='AddSchedule-Text'>Bắt đầu</b> */}
                                <Select
                                    className='AddSchedule-Select AddSchedule-Select-StartEnd'
                                    placeholder="Bắt đầu"
                                    menuPlacement="auto"
                                    maxMenuHeight={180}

                                    options={startTimeOptions}
                                    onChange={(e) => {
                                        stateOnChange.start = e.value;
                                    }}
                                />
                            </div>
                            <div className='AddSchedule-Day-End '>
                                {/* <b className='AddSchedule-Text'>Kết thúc</b> */}
                                <Select
                                    className='AddSchedule-Select AddSchedule-Select-StartEnd'
                                    placeholder="Kết thúc"
                                    maxMenuHeight={180}
                                    options={endTimeOptions}
                                    onChange={(e) => {
                                        stateOnChange.end = e.value;
                                    }}
                                />
                            </div>
                        </div>
                        <div className='AddSchedule-Location'>
                            <b className='AddSchedule-Text'>Địa điểm</b>
                            <input
                                className='AddSchedule-InputText'
                                type="text"
                                placeholder="VD: Tầng 1 Phòng 2"
                                onChange={(e) => {
                                    schedule.location = e.target.value;
                                }}
                            >
                            </input><br />
                        </div>
                        <div className='AddSchedule-Lecture'>
                            <b className='AddSchedule-Text'>Bài học</b>
                            <input
                                className='AddSchedule-InputText'
                                type="text"
                                placeholder="VD: Tập bụng"
                                onChange={(e) => {
                                    schedule.lecture = e.target.value;
                                }}
                            >
                            </input><br />
                        </div>
                        <div className='AddSchedule-Repeat'>
                            <b className='AddSchedule-Text'>Lặp lại</b>
                            <input
                                className='AddSchedule-InputCheckbox'
                                type="checkbox"
                                onChange={(e) => {
                                    console.log(e);
                                    var repeat_weekly = e.target.checked;
                                    setSchedule({
                                        ...schedule,
                                        repeat_weekly: repeat_weekly
                                    })
                                }}
                                defaultChecked="true"
                            ></input><br />
                        </div>
                        <div>
                            {ConfirmFalse ? (<b className='AddSchedule-ConfirmFalse'>Nhập chưa chính xác!</b>) : null}
                        </div>
                        <div className='AddSchedule-Button'>
                            <button
                                className='btn btn-success AddSchedule-Button-Confirm'
                                onClick={handleConfirm}
                            >Xác nhận</button>
                            <button
                                className='btn btn-danger AddSchedule-Button-Cancel'
                                onClick={() => {
                                    props.setTrigger(false);
                                }}
                            >Huỷ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
}
export default AddSchedule