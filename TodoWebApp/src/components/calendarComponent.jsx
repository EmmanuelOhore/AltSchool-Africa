import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import FullCalendar from "@fullcalendar/react";
import BarIcon from "./smaller components/barIcon";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/calendar.css";
import { TodoContext } from "./../utlis/todoContext";
const Calendar = () => {
  const { todo } = useContext(TodoContext);
  const events = todo.map((todo) => ({
    title: todo.title,
    start: todo.due_date,
    id: todo.id,
  }));

  const handleEventClick = (info) => {
    toast.success(`Todo: ${info.event.title}`);
  };
  return (
    <>
      <ToastContainer />
      <BarIcon />

      <section className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          events={events}
          eventClick={handleEventClick}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek",
          }}
          dayHeaderClassNames="custom-day-header"
        />
      </section>
    </>
  );
};

export default Calendar;
