import { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import trainerProfileAPI from '../api/trainerProfileAPI'
import { Popup } from '../components';
import 'react-calendar/dist/Calendar.css';
import CalendarPopup from '../components/CalendarPopup/CalendarPopup';
import MyCalendar from '../components/MyCalendar/MyCalendar';


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
    const handleClick = () => {
        setShowPopup(true);
    }
    const handleEnter = () => {
        console.log("enter");
    }
    const handleLeave = () => {
        console.log("leave");
    }
    const hanldeClickDay = (e) => {
        console.log(e);
        setTestDate(e);
        console.log(testDate);
    }
    const tileDisabledTrainer = (e) => {
        //e.getDay() === 0
    }

    return (
        <>
            {/* <h1>day la test page</h1>

            <button
                onClick={handleClick}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >day ne</button>
            <Popup trigger={showPopup} message="Cập nhật thành công nhé" /> */}
            {/* <Calendar
                onClickDay={hanldeClickDay}
                tileClassName={}
            ></Calendar> */}
            <button
                className="btn btn-primary"
                onClick={() => {
                    setShowPopup(true)
                }}
            >bam vao day</button>
            <p>Ngày {date.getDay()}/{date.getMonth()}</p>
            <p>Giờ là {date.getHours()}:{date.getMinutes()}</p>
            {/* <MyCalendar /> */}
            <CalendarPopup trigger={showPopup} setTrigger={setShowPopup} data={datas} />
        </>
    )
}
export default TestPage