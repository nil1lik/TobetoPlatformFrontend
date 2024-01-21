import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { EventContentArg } from '@fullcalendar/core';
import { DayCellContainer, addWeeks } from '@fullcalendar/core/internal';
import { start } from 'repl';

type Props = {
  id: string,
  title: string,
  instructor: string,
  start: string
}

const Calendar = (props: Props) => {
  const initialEvent = {
    id: props.id, 
    title: props.title,
    instructor:props.instructor,
    start: props.start
  };

  const renderEventContent =(eventContent:EventContentArg)=>{
    return(
      <div className='d-flex flex-column ms-4 my-1'>
        <span>{props.start.split("T")[1]/*eventContent.timeText*/}</span>
        <span className='text-truncate'>{props.title} {/*eventContent.event.title*/}</span>
        <span className='text-truncate'>{props.instructor}</span>
      </div>
    )
  }


  
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: `today prev,next`,
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        locales={allLocales}
        locale={"tr"}
        selectable={true}
        editable={true}
        eventContent={renderEventContent}
        initialEvents={[initialEvent]} 
        buttonText={{
          day: "Gün",
          nextYear: "Sonraki Yıl",
          prevYear: "Önceki Yıl",
          month: "Ay",
          today: "Bugün",
          week: "Hafta"
        }}
         events={
         [
           {id:props.id,title:props.title,start:props.start},
           {id:'4',title:props.title, start:'2024-01-09',end:'2024-01-09'},
           {id:'2',title:props.title, start:'2024-01-09T13:15:00',end:'2024-01-09T15:00:00'},
           {id:'3',title:props.title, start:'2024-01-29'}
        ]
      }

        dayHeaderFormat={{weekday:'long'}}
      />
    </>
  );
}

export default Calendar;
