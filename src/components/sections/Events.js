import React, { useState } from 'react'
import Fade from 'react-reveal/Slide'
import Calendar from 'react-calendar'
import { addDays, format } from 'date-fns'

import sampEvent from '../../images/samp-event.jpg'

const EventsSection = () => {
  const today = Date.now()
  const oneMonthLater = addDays(today, 28)

  console.log(format(today, 'EEEE, MMM d'))

  const [dates, setDates] = useState([today, oneMonthLater])
  const [showCalendar, setShowCalendar] = useState(false)

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
          <div className="event-card">
            <div className="card-date">
              <h4>Sun</h4>
              <h1>06</h1>
              <h4>Jun '21</h4>
            </div>
            <img src={sampEvent} alt="" />
            <div className="card-info">
              <h2>Brother Wife: Live!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
                consequatur iste! Debitis aperiam sint unde perferendis modi,
                quod neque error?
              </p>
              <button className="button">See Details</button>
              <button className="button special">Buy Tickets</button>
            </div>
          </div>
          <div className="event-card">
            <div className="card-date">
              <h4>Sun</h4>
              <h1>06</h1>
              <h4>Jun '21</h4>
            </div>
            <img src={sampEvent} alt="" />
            <div className="card-info">
              <h2>Brother Wife: Live!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
                consequatur iste! Debitis aperiam sint unde perferendis modi,
                quod neque error?
              </p>
              <button className="button">See Details</button>
              <button className="button special">Buy Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
