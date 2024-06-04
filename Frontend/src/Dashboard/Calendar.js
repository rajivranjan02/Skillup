import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Dash_Style/Calendar.css'
import 'react-calendar/dist/Calendar.css';

function EventCalendar() {
  const [date, setDate] = useState(new Date());
  const [noteValues, setNoteValues] = useState({
    single1: '', single2: '', single3: '', single4: '',
    single5: '', single6: '', single7: '', single8: ''
  });
  const [inputValue, setInputValue] = useState('');

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    // You can add your logic here to handle date selection, like storing events for the selected date
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e, noteId) => {
    if (e.key === 'Enter') {
      setNoteValues((prevValues) => ({
        ...prevValues,
        [noteId]: inputValue
      }));
      setInputValue('');
    }
  };

  const clearNote = (noteId) => {
    setNoteValues((prevValues) => ({
      ...prevValues,
      [noteId]: ''
    }));
  };

  return (
    <div className='EventCalendar_container'>
      <h2>Event Calendar</h2>
      <Calendar className='EventCalendar_container_table' onChange={handleDateChange} value={date} />
      <div className='main_Notes_div'>
        <div className='notes_div'>
          <div className='notes_single' id='single1'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => handleInputKeyDown(e, 'single1')}
              placeholder="Save your event"
            />
            <p>{noteValues.single1}</p>
            <div onClick={() => clearNote('single1')}>Clear</div>
          </div>
          <div className='notes_single' id='single2'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => handleInputKeyDown(e, 'single2')}
              placeholder="Enter text"
            />
            <p>{noteValues.single2}</p>
            <div onClick={() => clearNote('single2')}>Clear</div>
          </div>
          <div className='notes_single' id='single3'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => handleInputKeyDown(e, 'single3')}
              placeholder="Enter text"
            />
            <p>{noteValues.single3}</p>
            <div onClick={() => clearNote('single3')}>Clear</div>
          </div>
          <div className='notes_single' id='single4'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => handleInputKeyDown(e, 'single4')}
              placeholder="Enter text"
            />
            <p>{noteValues.single4}</p>
            <div onClick={() => clearNote('single4')}>Clear</div>
          </div>
        </div>
        
      </div>
      {/* Additional components or features related to the calendar can be added here */}
    </div>
  );
}

export default EventCalendar;