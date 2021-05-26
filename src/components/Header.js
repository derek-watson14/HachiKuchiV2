import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import hkLogoAbb from '../images/hk-logo-ab.png'
import { Link as Scroll } from 'react-scroll'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        className="logo-img"
        src={hkLogoAbb}
        alt="Hachi Kuchi abbreviated logo"
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hachi Kuchi</h1>
        <p>
          Hachi Kuchi is a gathering of organizations, venues and creators
          forging a stronger art and music community in western Washington.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <Scroll to="about" smooth={true} offset={0} duration={500}>
          <li>
            <button>About</button>
          </li>
        </Scroll>
        <Scroll to="partners" smooth={true} offset={50} duration={500}>
          <li>
            <button>Partners</button>
          </li>
        </Scroll>
        <Scroll to="team" smooth={true} offset={50} duration={500}>
          <li>
            <button>Team</button>
          </li>
        </Scroll>
        <Scroll to="events" smooth={true} offset={50} duration={500}>
          <li>
            <button>Events</button>
          </li>
        </Scroll>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('Contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
