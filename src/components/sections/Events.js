import React, { useState } from 'react'
import Fade from 'react-reveal/Slide'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const EventsSection = () => {
  const [date, setDate] = useState(new Date())

  const onDateChange = newDate => {
    console.log(newDate)
    setDate(newDate)
  }

  // const testDateSet

  return (
    <section id="events" className="wrapper">
      <Fade>
        <h2 className="major events__header">Upcoming Events</h2>
      </Fade>
      <div className="event-selector">
        <Calendar
          className="calendar"
          minDate={new Date()}
          onChange={onDateChange}
          value={date}
        />
        <div className="event-card">
          <h3>Event</h3>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
