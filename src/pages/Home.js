import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
    start: new Date(2022, 2, 1),
    end: new Date(2022, 2, 2),
  },
  {
    title: "Deep meditation",
    start: new Date(2022, 2, 25),
    end: new Date(2022, 2, 25),
  },
  {
    title: "Girlfriend things",
    allDay: true,
    start: new Date(2022, 2, 22),
    end: new Date(2022, 2, 24),
  },
];
const Home = () => {
  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500, margin: "50px"}}
      ></Calendar>
    </div>
  );
};

export default Home;
