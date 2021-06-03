import React from 'react'
import sampEvent from '../../../images/samp-event.jpg'

const EventCard = () => {
  return (
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
          consequatur iste! Debitis aperiam sint unde perferendis modi, quod
          neque error?
        </p>
        <button className="button">See Details</button>
        <button className="button special">Buy Tickets</button>
      </div>
    </div>
  )
}
export default EventCard
