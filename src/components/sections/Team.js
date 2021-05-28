import React from 'react'

import derek from '../../images/team/derek.jpg'
import tubman from '../../images/team/tubman.jpg'
import tyler from '../../images/team/tyler.jpg'
import barb from '../../images/team/barb.jpg'
import zuck from '../../images/team/zuck.jpg'

class TeamSection extends React.Component {
  render() {
    return (
      <section id="team" className="wrapper">
        <h2 className="major team__header">Team and Investors</h2>
        <div className="team-members">
          <div className="member">
            <img className="member__img" src={derek} alt="" />
            <h3>Derek Watson</h3>
            <h5>Tech & Web Lead</h5>
          </div>
          <div className="member">
            <img className="member__img" src={barb} alt="" />
            <h3>Barb</h3>
            <h5>Fucks and burns kids</h5>
          </div>
          <div className="member">
            <img className="member__img" src={tyler} alt="" />
            <h3>Tyler Smiley</h3>
            <h5>"The Lost Mongolian"</h5>
          </div>
          <div className="member">
            <img className="member__img" src={tubman} alt="" />
            <h3>Jeffery Hennings</h3>
            <h5>Artist Outreach</h5>
          </div>
          <div className="member">
            <img className="member__img" src={zuck} alt="" />
            <h3>Mark Zuckerburg</h3>
            <h5>CEO of Facebook</h5>
          </div>
        </div>
      </section>
    )
  }
}

export default TeamSection
