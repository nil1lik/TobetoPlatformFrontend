import React from 'react'
import Calendar from './Calendar'

type Props = {

}

const CalendarDetail = (props: Props) => {
    const calendarProps = {
        id: "1", 
        title: ".net & react full stack",
        instructor:"Engin Demirog",
        start: new Date().toISOString().split("T")[0] + "T13:15:00"
      };
  return (
    <div>
        <Calendar {...calendarProps}/>
    </div>
  )
}

export default CalendarDetail