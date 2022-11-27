import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <header>
            <h1>this is appointment banner</h1>
           <div className='flex flex-col items-center justify-center py-20'>
           <DayPicker 
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}/>
             <p>you have selected: {format(selectedDate, 'PP')}</p>
           </div>
          

            
        </header>
    );
};

export default AppointmentBanner;