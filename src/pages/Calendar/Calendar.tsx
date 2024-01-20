import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { EventContentArg } from '@fullcalendar/core';
import { DayCellContainer, addWeeks } from '@fullcalendar/core/internal';

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
      <>
        <b>{eventContent.timeText}</b>
        <b>{props.title} {eventContent.event.title}</b>
        <b>{props.instructor}</b>
      </>
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
        dayHeaderFormat={{weekday:'long'}}
      />
    </>
  );
}

export default Calendar;
