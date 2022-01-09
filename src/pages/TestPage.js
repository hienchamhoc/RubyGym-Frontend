import { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import trainerProfileAPI from '../api/trainerProfileAPI'
import { Popup } from '../components';
import 'react-calendar/dist/Calendar.css';
import CalendarPopup from '../components/CalendarPopup/CalendarPopup';
import MyCalendar from '../components/MyCalendar/MyCalendar';
import { AddSchedule } from '../components';
import { TrainerRating } from '../components';
import { MemberList } from '../components';

function TestPage() {
    let [showPopup, setShowPopup] = useState(false);
    let [content, setContent] = useState(false);
    const [testDate, setTestDate] = useState(null);
    var date = new Date();
    let [trainerState, setTrainerState] = useState({
        name: 'Tran Hien',
        sex: 'nam',
        date: '12/2/2021',
        phone: '0964387413',
        address: 'so 1 hai ba trung',
        avatar_url: ''
    });
    const datas = [
        { id: "1", starttime: "9h", finishtime: "10h", date: "20/10/2020", location: "tầng 2", lecture: "tập bụng", absent: "vắng" },
        { id: "5", starttime: "9h", finishtime: "10h", location: "tầng 2", lecture: "tập bụng", absent: "vắng" },
        { id: "9", starttime: "9h", finishtime: "10h", location: "tầng 2", lecture: "tập bụng", absent: "vắng" },

    ]
    const members = [
        { name: 'Hien' },
        { name: 'Dai' },
        { name: 'Dung' },
        { name: 'Duong' }
    ];
    const places = [
        { location: 'tang 1' },
        { location: 'tang 2' },
        { location: 'tang 3' }
    ];

    // useEffect(() => {
    //     if (showPopup) {
    //         var id = setTimeout(() => {
    //             setShowPopup(prev => !prev);
    //         }, 10000)
    //     }
    //     return () => {
    //         clearTimeout(id);
    //     }
    // }, [showPopup])


    // useEffect(() => {
    //     (async () => {
    //         console.log("goi lan 1");
    //         const response = await trainerApi.getTrainerInfo();
    //         //if (response && response.status && response.status.data) {
    //         //useState = { ...response.data.data }
    //         //console.log(useState);
    //         //setTrainerState(trainerState);
    //         //}
    //         if (response.status) console.log("hien ok");
    //         else console.log("hien not ok");
    //         //console.log(response.data);
    //         console.log(trainerState);
    //         console.log(trainerState.id);
    //         trainerState = { ...response.data };
    //         setTrainerState = { trainerState };

    //         console.log(trainerState);
    //         console.log(trainerState.id);
    //     })()
    // })
    const handleAddCalendar = () => {

        setShowPopup(true);
    }
    return (
        <>
            <h1>day la test page</h1>

            <button
                className="btn btn-success"
                onClick={handleAddCalendar}
            >Them</button>
            <AddSchedule trigger={showPopup} setTrigger={setShowPopup} />
            {/* <TrainerRating trigger={showPopup} setTrigger={setShowPopup} />
            <MemberList /> */}
        </>
    )
}
export default TestPage