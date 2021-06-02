import React from 'react'
import Bounce from 'react-reveal/Slide'

const PartnerCard = props => {
  return (
    <Bounce bottom delay={100}>
      <div className="partner-detail">
        <div className="partner-detail__backdrop"></div>
        <div className="partner-detail__content">
          <h3>{props.partnerName}</h3>
          <p>{props.description}</p>
          <button className="card-btn">Learn more</button>
        </div>
      </div>
    </Bounce>
  )
}

export default PartnerCard
