import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendarAPI from '../../api/calendarAPI';
import './MyCalendar.css';
import {CalendarPopup} from './../';

function MyCalendar() {
  const [value, onChange] = useState(new Date());
  const [calendarList, setCalendarList] = useState([]);
  const [calendarListDaily, setCalendarListDaily] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => { 
    (async () => {
      const currentDate = new Date();
      const response = await calendarAPI.getCalendarMonthly(currentDate.getFullYear(), currentDate.getMonth() + 1);
      console.log(response.data.data);
      setCalendarList(prev=>response.data.data);
    })();
  }, []);

  // useEffect(() => { 
  //   (async () => {
      
  //   })();
  // }, [calendarList]);

  const tileContent = ({date, view}) => {
    if (view !== "month") return;

    const l = calendarList.length;
    var content = [];

    for (var i = 0; i < l; i++){
      const _date = new Date(calendarList[i].date);

      if (date.getDate() === _date.getDate() 
        && date.getMonth() === _date.getMonth()
        && date.getYear() === _date.getYear()) {
        content.push(<p>{calendarList[i].start_time}h - {calendarList[i].finish_time}h</p>);
      }
    }
    
    // if (content.length !== 0) 
    if (content.length === 0) 
    return null;
    
    return content;
  }

  const getCalendarDaily = async (value, event) => {
    const currentDate = new Date(value);
    console.log("click: " + currentDate);
    const response = await calendarAPI.getCalendarDaily(currentDate);
    setCalendarListDaily(prev=>response.data.data);
    setShowPopup(true);
    onChange(value);
  }

  return (
    <div >
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={tileContent}          
        onClickDay={getCalendarDaily}
      />
      <CalendarPopup 
        trigger={showPopup}
        setTrigger={setShowPopup} 
        data={calendarListDaily}
        date={value}
      />
      {/* <button onClick={callAPI}>Click me</button> */}
    </div>
  );
}
export default MyCalendar;