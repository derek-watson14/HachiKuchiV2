import React from 'react'
import { Link as Scroll } from 'react-scroll'
import Slide from 'react-reveal/Slide'

import fullLogo from '../../images/fullLogo.png'

class AboutSection extends React.Component {
  render() {
    return (
      <section id="about" className="wrapper">
        <div className="about__wrapper">
          <Slide left>
            <div className="about__image">
              <img src={fullLogo} />
            </div>
          </Slide>
          <Slide right>
            <div className="about__text">
              <h2 className="major">What is Hachi Kuchi?</h2>
              <div>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
              <Scroll to="partners" smooth={true} offset={0} duration={500}>
                <button className="button special">Our Partners</button>
              </Scroll>
            </div>
          </Slide>
        </div>
      </section>
    )
  }
}

export default AboutSection
