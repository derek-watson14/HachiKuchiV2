import React, { useState } from 'react'
import Fade from 'react-reveal/Slide'
import Calendar from 'react-calendar'

const EventsSection = () => {
  const today = new Date()
  const monthFromToday = new Date().setDate(today.getDate() + 28)
  console.log(today, monthFromToday)

  const [date, setDate] = useState([today, monthFromToday])
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <section id="events" className="wrapper">
      <Fade>
        <h2 className="major events__header">Upcoming Events</h2>
      </Fade>
      <div className="event-selector">
        <Calendar
          minDate={new Date()}
          selectRange={true}
          // onChange={onDateChange}
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
