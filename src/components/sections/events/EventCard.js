import React from 'react'
import sampEvent from '../../../images/samp-event.jpg'

const EventCard = props => {
  const { dayWeek, dayMonth, monthYear, image, eventName, description } = props
  return (
    <div className="event-card">
      <div className="card-date">
        <h4>{dayWeek}</h4>
        <h1>{dayMonth}</h1>
        <h4>{monthYear}</h4>
      </div>
      {/* <img src={image} alt="" /> */}
      <div className="card-info">
        <h2>{eventName}</h2>
        <p>{description}</p>
        {/* <button className="button">See Details</button>
        <button className="button special">Buy Tickets</button> */}
      </div>
    </div>
  )
}
export default EventCard
