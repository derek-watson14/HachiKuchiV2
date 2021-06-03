import React from 'react'

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
      </div>
    </div>
  )
}
export default EventCard
