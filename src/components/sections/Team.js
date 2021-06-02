import React from 'react'

import derek from '../../images/team/derek.jpg'
import robby from '../../images/team/robby.jpg'
import jeff from '../../images/team/jeff.jpg'
import tyler from '../../images/team/tyler.jpg'
import andrew from '../../images/team/andrew.jpg'

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
            <img className="member__img" src={robby} alt="" />
            <h3>Robby Vandenhole</h3>
            <h5>HK Podcast</h5>
          </div>
          <div className="member">
            <img className="member__img" src={tyler} alt="" />
            <h3>Tyler Smiley</h3>
            <h5>The Lost Mongolian</h5>
          </div>
          <div className="member">
            <img className="member__img" src={jeff} alt="" />
            <h3>Jeffery Hennings</h3>
            <h5>Artist Outreach</h5>
          </div>
          <div className="member">
            <img className="member__img" src={andrew} alt="" />
            <h3>Andrew Lawrence</h3>
            <h5>OG Link Marine</h5>
          </div>
        </div>
      </section>
    )
  }
}

export default TeamSection
