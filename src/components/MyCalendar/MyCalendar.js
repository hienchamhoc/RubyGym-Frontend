import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendarAPI from '../../api/calendarAPI';
import './MyCalendar.css';
import { CalendarPopup } from './../';

function MyCalendar({ id, role, trigger }) {
  const [value, onChange] = useState(new Date());
  // const [refresh, setRefresh] = useState(0);
  const [calendarList, setCalendarList] = useState([]);
  const [calendarListDaily, setCalendarListDaily] = useState([]);
  var [_activeStartDate, _setActiveStartDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    (async () => {
        // const currentDate = new Date(_activeStartDate);
        let response;
      if (localStorage.getItem('role') === 'admin') {
        response = await calendarAPI.getCalendarMonthlyUser(_activeStartDate.getFullYear(), _activeStartDate.getMonth() + 1, id, role);

      }
      else {
        response = await calendarAPI.getCalendarMonthly(_activeStartDate.getFullYear(), _activeStartDate.getMonth() + 1);
      }
      // console.log(response.data.data);
      setCalendarList(prev => response.data.data);
    })();
  }, [_activeStartDate]);

  useEffect(() => {
    (async () => {
        // const currentDate = new Date(_activeStartDate);
        let response;
      if (localStorage.getItem('role') === 'admin') {
        response = await calendarAPI.getCalendarMonthlyUser(_activeStartDate.getFullYear(), _activeStartDate.getMonth() + 1, id, role);

      }
      else {
        response = await calendarAPI.getCalendarMonthly(_activeStartDate.getFullYear(), _activeStartDate.getMonth() + 1);
      }
      // console.log(response.data.data);
      setCalendarList(prev => response.data.data);
    })();
  }, [trigger]);

  const refreshData = async () => {
      // const currentDate = new Date(_activeStartDate);
      let response;
    if (localStorage.getItem('role') === 'admin') {
      response = await calendarAPI.getCalendarMonthlyUser(_activeStartDate.getFullYear(), _activeStartDate.getMonth() + 1, id, role);

    }
    else {
      response = await calendarAPI.getCalendarMonthly(_activeStartDate.getFullYear(), _activeStartDate.getMonth() + 1);
    }
    // console.log(response.data.data);
    setCalendarList(prev => response.data.data);
  };

  const tileClassName = ({ date, view }) => {
    if (view !== "month") return;
    const l = calendarList.length;
    // var content = [];

    for (var i = 0; i < l; i++) {
      const _date = new Date(calendarList[i].start_time);
      // console.log(calendarList[i])

      if (date.getDate() === _date.getDate()
        && date.getMonth() === _date.getMonth()
        && date.getYear() === _date.getYear()) {
          // console.log('hi')
        // content.push(<p>{new Date(calendarList[i].start_time).getHours()}h - {new Date(calendarList[i].finish_time).getHours()}h</p>);
          return 'day-training';
      }
    }

    // if (content.length !== 0) 
    // if (content.length === 0)
    //   return null;

    return;
  }



  const getCalendarDaily = async (value, event) => {
    const currentDate = new Date(value);
    console.log("click: " + currentDate);

    let response;
    if (localStorage.getItem('role') === 'admin') {
      response = await calendarAPI.getCalendarDailyUser(currentDate, id, role);
    }
    else {
      response = await calendarAPI.getCalendarDaily(currentDate);
    }

    
    setCalendarListDaily(prev => response.data.data);
    setShowPopup(true);
    onChange(value);
  }

  return (
    <div >
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
        onClickDay={getCalendarDaily}
        onActiveStartDateChange={({ activeStartDate, view }) => {
          if (view == 'month') {
            _activeStartDate = activeStartDate;
            _setActiveStartDate(_activeStartDate);
          }
        }}
        refreshData={refreshData}
        getCalendarDaily={getCalendarDaily}
      />
      <CalendarPopup
        trigger={showPopup}
        setTrigger={setShowPopup}
        data={calendarListDaily}
        date={value}
        refreshData={refreshData}
        getCalendarDaily={getCalendarDaily}
      />
      {/* <button onClick={callAPI}>Click me</button> */}
    </div>
  );
}
export default MyCalendar;