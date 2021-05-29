import React from 'react'
import PropTypes from 'prop-types'

import Nav from './Nav'

import hkLogoAbb from '../images/hk-logo-ab.png'
import budweiser from '../images/logos/budweiser.png'
import caterpillar from '../images/logos/caterpillar.png'
import ford from '../images/logos/ford.png'
import mercedes_benz from '../images/logos/mercedes_benz.png'
import red_bull from '../images/logos/red_bull.png'
import wonderland from '../images/logos/wonderland.png'
import hachi_kuchi from '../images/logos/hachi.png'

const Header = props => {
  return (
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
          <div className="partner-logos">
            <img src={wonderland} alt="" />
            <img src={hachi_kuchi} alt="" />
            <img src={budweiser} alt="" />
            <img src={caterpillar} alt="" />
            <img src={ford} alt="" />
            <img src={mercedes_benz} alt="" />
            <img src={red_bull} alt="" />
          </div>
        </div>
      </div>
      <Nav onOpenArticle={props.onOpenArticle} />
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
