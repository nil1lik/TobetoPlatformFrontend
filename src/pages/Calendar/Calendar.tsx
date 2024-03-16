import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { EventContentArg } from "@fullcalendar/core";
import calendarService from "../../services/calendarService";
import { GetCalendarItem } from "../../models/responses/calendar/getCalendarResponse";
import { useLoadingContext } from "../../contexts/LoadingContext";

const Calendar = () => {
  const [calendar, setCalendar] = useState<GetCalendarItem[]>([]);
  const { handleSetLoading } = useLoadingContext();

  const fetchCalendar = async () => {
    try {
      handleSetLoading((prev: any) => prev + 1); // Veri getirme başladığında loading durumunu artır
      const result = await calendarService.getCalendar(0, 50);
      setCalendar(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    } finally {
      handleSetLoading((prev: any) => prev - 1); // Veri getirme tamamlandığında loading durumunu azalt
    }
  };

  useEffect(() => {
    fetchCalendar(); // fetchCalendar fonksiyonunu direkt olarak çağır
  }, []);

  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <div className="d-flex flex-column ms-4 my-1">
        <span>
          {
            eventContent.event.start
              ?.toTimeString()
              .split("GMT")[0]
              .slice(0, 5) /*eventContent.timeText*/
          }
        </span>
        <span className="text-truncate">
          {eventContent.event.title} {/*eventContent.event.title*/}
        </span>
        <span className="text-truncate">{`${eventContent.event.extendedProps.firstName} ${eventContent.event.extendedProps.lastName}`}</span>
      </div>
    );
  };

  return (
    <>
      <FullCalendar
        dayCellClassNames={"eventEnded eventNotStarted eventToday"}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: `today prev,next`,
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
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
          week: "Hafta",
        }}
        initialView={"dayGridMonth"}
        dayMaxEvents={2}
        events={calendar.map((calendar) => ({
          id: calendar.id.toString(),
          title: calendar.educationPathName,
          firstName: calendar.firstName,
          lastName: calendar.lastName,
          start: calendar.startDate,
        }))}
        dayHeaderFormat={{ weekday: "long" }}
      />
    </>
  );
};

export default Calendar;
