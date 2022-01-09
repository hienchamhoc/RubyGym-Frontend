import { React, useState, useRef, useEffect } from 'react'
import Select from 'react-select'
import Calendar from 'react-calendar';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import trainerProfileAPI from '../../../api/trainerProfileAPI';
import calendarAPI from '../../../api/calendarAPI';
// import calendarAPI from '../../../api/calendarAPI';
import './AddSchedule.css'
function AddSchedule(props) {
    const ref = useRef();
    let [schedule, setSchedule] = useState({
        member_id: '',
        start_time: new Date(),
        finish_time: new Date(),
        location: '',
        lecture: '',
        repeat_weekly: true
    })
    let [stateOnChange, setStateOnChange] = useState({
        start: '',
        end: ''
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
    ];
    const endTimeOptions = [
        { value: '7', label: '7:00' },
        { value: '8', label: '8:00' },
        { value: '9', label: '9:00' },
        { value: '10', label: '10:00' },
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
        schedule.start_time.setHours(stateOnChange.start);
        schedule.finish_time.setHours(stateOnChange.end);
        console.log(schedule);
        console.log(schedule.repeat_weekly);
        // const response = await calendarAPI.AddSchedule(schedule);
        // if (response && !response.status) {
        //     alert(response.message)
        // }
    }
    return props.trigger ? (
        <>
            <div className='AddSchedule-popupWrapper'>
                <div className='AddSchedule-popupInner' ref={ref} >

                    <b>Học viên</b>
                    <Select
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
                    <b>Ngày</b>
                    <DayPickerInput onDayChange={(date) => {
                        schedule.start_time = new Date(date);
                        schedule.finish_time = new Date(date);
                    }} />
                    <b>Bắt đầu</b>
                    <Select
                        options={startTimeOptions}
                        onChange={(e) => {
                            stateOnChange.start = e.value;
                        }}
                    />
                    <b>Kết thúc</b>
                    <Select
                        options={endTimeOptions}
                        onChange={(e) => {
                            stateOnChange.end = e.value;
                        }}
                    />
                    <b>Địa điểm</b>
                    <input
                        type="text"
                        onChange={(e) => {
                            schedule.location = e.target.value;
                        }}
                    >
                    </input><br />
                    {/* <Select
                        options={function () {
                            var myPlacesList = practiceLocations.map((item) => {
                                return {
                                    label: item.location
                                }
                            })
                            return myPlacesList;
                        }()}
                        onChange={(e) => {
                            schedule.location = e.label;
                            console.log(schedule.location);
                        }}
                    /> */}
                    <b>Lặp lại</b>
                    <input
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
                    <button
                        onClick={handleConfirm}
                    >Xác nhận</button>
                    <button>Huỷ</button>

                </div>
            </div>
        </>
    ) : null;
}
export default AddSchedule