import React from 'react'
import PropTypes from 'prop-types'

const year = new Date().getFullYear()

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Hachi Kuchi - {year}. Built by:{' '}
      <a href="https://derekwatson.dev">Derek Watson</a> with React.js
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
