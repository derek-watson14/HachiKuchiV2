import React, { useState } from 'react'
import Fade from 'react-reveal/Slide'
import Calendar from 'react-calendar'
import { addDays, format } from 'date-fns'

import EventCard from './EventCard'

const EventsSection = () => {
  const today = Date.now()
  const oneMonthLater = addDays(today, 28)

  console.log(format(today, 'EEEE, MMM d'))

  const [dates, setDates] = useState([today, oneMonthLater])
  const [showCalendar, setShowCalendar] = useState(true)

  const toggleCalendarDisplay = () => {
    setShowCalendar(!showCalendar)
  }

  return (
    <section id="events" className="wrapper">
      <Fade>
        <h2 className="major events__header">Upcoming Events</h2>
      </Fade>
      <div className="event-selector">
        <div className="date-selection">
          <div className="dates-display">
            <h5>Selected Dates: </h5>
            <h3>
              {format(dates[0], 'MMM d')} - {format(dates[1], 'MMM d')}
              <span>
                <button
                  aria-label="Toggle calendar display"
                  className="button special icon fa-calendar"
                  onClick={toggleCalendarDisplay}
                ></button>
              </span>
            </h3>
          </div>
          <div
            className={showCalendar ? 'dates-select' : 'date-select--hidden'}
          >
            <Calendar
              minDate={new Date()}
              minDetail="year"
              selectRange={true}
              onChange={setDates}
              value={dates}
            />
          </div>
        </div>
        <div className="event-display">
          <h3 className="month-header">June</h3>
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  )
}

export default EventsSection
