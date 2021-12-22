import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendarAPI from '../../api/calendarAPI';
import './MyCalendar.css';

function MyCalendar() {
  const [value, onChange] = useState(new Date());
  const [calendarList, setCalendarList] = useState([]);

  useEffect(() => { 
    (async () => {
      const response = await calendarAPI.getCalendar();
      console.log(response.data.data);
      setCalendarList(prev=>response.data.data);
      // console.log(calendarList);
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
    return <p> - </p>;
    
    return content;
  }

  const callAPI = async (e) => {
    e.preventDefault();

    // const response = await calendarAPI.getCalendar();
    // console.log(response.data.data);

    // setCalendarList(response.data.data);
    // console.log(calendarList);

    // const num = calendarList.length;
    // for (var i = 0; i < num; i++) {
    //   const calendar = calendarList[i];
      
    // }
    // if (view === 'month') {
    //   return <p>8h - 9h</p>;
    // }
    // if (date == calendarList.date)
    
  }

  return (
    <div >
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={tileContent}          
      />
      {/* <button onClick={callAPI}>Click me</button> */}
    </div>
  );
}
export default MyCalendar;