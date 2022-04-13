import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  getDay,
  startOfWeek,
  locales,
});

const events = [
  {
    title: "Job stuff",
    start: new Date(2022, 3, 1),
    end: new Date(2022, 3, 2),
  },
  {
    title: "Deep meditation",
    start: new Date(2022, 3, 25),
    end: new Date(2022, 3, 25),
  },
  {
    title: "Girlfriend things",
    allDay: true,
    start: new Date(2022, 3, 22),
    end: new Date(2022, 3, 24),
  },
];
const Home = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents(...allEvents, newEvent);
  };

  return (
    <div className="calendar">
      <header>Calendar</header>
      <h1>Add New Event</h1>
      <div>
        <input
          type="text"
          placeholder="Add Name"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholder="Start Date"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholder="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      ></Calendar>
    </div>
  );
};

export default Home;
