import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div id='calendario'>
      <Calendar
        onChange={onChange}
        value={date}
      />
      {/*<p>Selected date: {date.toDateString()}</p>*/}
    </div>
  );
}

export default MyCalendar;