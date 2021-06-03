import React from 'react'

import TeamMember from './TeamMember'

import derek from '../../../images/team/derek2.jpg'
import robby from '../../../images/team/robby.jpg'
import jeff from '../../../images/team/jeff.jpg'
import tyler from '../../../images/team/tyler.jpg'
import andrew from '../../../images/team/andrew.jpg'

class TeamSection extends React.Component {
  render() {
    return (
      <section id="team" className="wrapper">
        <div className="title-spacer">
          <h2 className="major team__header">Team and Investors</h2>
          <div />
        </div>
        <div className="title-spacer">
          <div className="team-members">
            <TeamMember
              image={tyler}
              first={'Tyler'}
              last={'Smiley'}
              title={'Founder'}
            />
            <TeamMember
              image={jeff}
              first={'Jeffery'}
              last={'Hennings'}
              title={'Artist Outreach'}
            />
            <TeamMember
              image={robby}
              first={'Robby'}
              last={'Vandenhole'}
              title={'Hachi Kuchi Podcast'}
            />
            <TeamMember
              image={derek}
              first={'Derek'}
              last={'Watson'}
              title={'Tech & Web Lead'}
            />
            <TeamMember
              image={andrew}
              first={'Andrew'}
              last={'Lawrence'}
              title={'OG Link Marine'}
            />
          </div>
          <div />
        </div>
      </section>
    )
  }
}

export default TeamSection
