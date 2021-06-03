import React from 'react'

import derek from '../../images/team/derek2.jpg'
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
            <div className="member__name">
              <h3>Derek</h3>
              <h3>Watson</h3>
            </div>
            <h5>Tech & Web Lead</h5>
          </div>
          <div className="member">
            <img className="member__img" src={robby} alt="" />
            <div className="member__name">
              <h3>Robby</h3>
              <h3>Vandenhole</h3>
            </div>
            <h5>HK Podcast</h5>
          </div>
          <div className="member">
            <img className="member__img" src={tyler} alt="" />
            <div className="member__name">
              <h3>Tyler</h3>
              <h3>Smiley</h3>
            </div>
            <h5>The Lost Mongolian</h5>
          </div>
          <div className="member">
            <img className="member__img" src={jeff} alt="" />
            <div className="member__name">
              <h3>Jeffery</h3>
              <h3>Hennings</h3>
            </div>
            <h5>Artist Outreach</h5>
          </div>
          <div className="member">
            <img className="member__img" src={andrew} alt="" />
            <div className="member__name">
              <h3>Andrew</h3>
              <h3>Lawrence</h3>
            </div>
            <h5>OG Link Marine</h5>
          </div>
        </div>
      </section>
    )
  }
}

export default TeamSection
