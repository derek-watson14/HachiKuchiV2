import React from 'react'

const TeamMember = props => {
  const { image, first, last, title } = props
  return (
    <div className="member">
      <img className="member__img" src={image} alt="" />
      <div className="member__name">
        <h3>{first}</h3>
        <h3>{last}</h3>
      </div>
      <h5>{title}</h5>
    </div>
  )
}
export default TeamMember
