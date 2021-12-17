import { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import trainerApi from '../api/trainerAPI'
import { Popup } from '../components';
import 'react-calendar/dist/Calendar.css';
function TestPage() {
    let [showPopup, setShowPopup] = useState(false);
    let [content, setContent] = useState(false);
    let [trainerState, setTrainerState] = useState({
        name: 'Tran Hien',
        sex: 'nam',
        date: '12/2/2021',
        phone: '0964387413',
        address: 'so 1 hai ba trung',
        avatar_url: ''
    });
    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                setShowPopup(prev => !prev);
            }, 1000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup])


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
    }
    const tileContentTrainer = (date, view) => {
        const day1 = new Date();
        if (isSameDay(date, day1)) {
            return 'today';
        }
        return 'nothing';
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
            <Calendar
                onClickDay={hanldeClickDay}
                tileContent={tileContentTrainer}
            //tileDisabled={tileDisabledTrainer}

            ></Calendar>
            <button
                onClick={() => {
                    setContent(true)
                }}
            >bam vao day</button>
        </>
    )
}
export default TestPage