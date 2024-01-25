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
        initialEvents={[initialEvent]} 
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
           [
             {id:'2',title:props.title, start:'2024-01-09', end:'2024-01-09'},
             {id:'3',title:props.title, start:'2024-01-09', end:'2024-01-09'},
             {id:'4',title:props.title, start:'2024-01-09', end:'2024-01-09'},
             {id:'5',title:props.title, start:'2024-01-09', end:'2024-01-09'},
             {id:'6',title:props.title, start:'2024-01-09', end:'2024-01-09'},
             {id:'7',title:props.title, start:'2024-01-09', end:'2024-01-09'},
             {id:'8',title:props.title, start:'2024-01-29'},
             {id:'9',title:props.title, start:'2024-01-29'},
             {id:'10',title:props.title, start:'2024-01-29'},
             {id:'11',title:props.title, start:'2024-01-29'},
             {id:'12',title:props.title, start:'2024-01-29'}
           ]
         }
                
        dayHeaderFormat={{weekday:'long'}}
      />
    </>
  );
}

export default Calendar;
