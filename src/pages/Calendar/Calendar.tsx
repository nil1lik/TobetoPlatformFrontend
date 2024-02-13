import React, { useEffect, useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { EventContentArg } from '@fullcalendar/core';
import { DayCellContainer, addWeeks } from '@fullcalendar/core/internal';
import { start } from 'repl';
import calendarService from '../../services/calendarService';
import { GetCalendarItem } from '../../models/responses/calendar/getCalendarResponse';



const Calendar = () => {
  const [calendar,setCalendar] = useState<GetCalendarItem[]>([]);
  const fetchCalendar = async () => {
    try {
      const result = await calendarService.getCalendar(0, 50);
      setCalendar(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };
  useEffect(() => {
    fetchCalendar();
  },[]);

  const renderEventContent =(eventContent:EventContentArg)=>{
    return(
          <div className='d-flex flex-column ms-4 my-1'>
          <span>{eventContent.event.start?.toTimeString().split("GMT")[0].slice(0,5)/*eventContent.timeText*/}</span>
          <span className='text-truncate'>{eventContent.event.title} {/*eventContent.event.title*/}</span>
          <span className='text-truncate'>{eventContent.event.extendedProps.instructor}</span>
        </div>
    )
  }

  return (
    <>
      <FullCalendar dayCellClassNames={"eventEnded eventNotStarted eventToday"}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: `today prev,next`,
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        locales={allLocales}
        locale={"tr"}
        selectable={true}
        editable={false}    
        eventContent={renderEventContent}
        buttonText={{
          day: "Gün",
          nextYear: "Sonraki Yıl",
          prevYear: "Önceki Yıl",
          month: "Ay",
          today: "Bugün",
          week: "Hafta"
        }}
        initialView={"dayGridMonth"}
        dayMaxEvents={2}
        
        events={
           calendar.map((calendar)=>({
            id: calendar.id.toString(),
            title: calendar.educationPathName,
            instructor: calendar.firstName,
            start: calendar.startDate
           }))
           
         }
                
        dayHeaderFormat={{weekday:'long'}}
      />
    </>
  );
}

export default Calendar;
