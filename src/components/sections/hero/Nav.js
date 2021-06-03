import React from 'react'
import { Link as Scroll } from 'react-scroll'

const Nav = props => {
  return (
    <nav>
      <ul>
        <Scroll to="about" smooth={true} offset={0} duration={500}>
          <li>
            <button className="button">About</button>
          </li>
        </Scroll>
        <Scroll to="team" smooth={true} offset={20} duration={500}>
          <li>
            <button className="button">Team</button>
          </li>
        </Scroll>
        <Scroll to="partners" smooth={true} offset={20} duration={500}>
          <li>
            <button className="button">Partners</button>
          </li>
        </Scroll>
        <Scroll to="events" smooth={true} offset={20} duration={500}>
          <li>
            <button className="button">Events</button>
          </li>
        </Scroll>
        <li>
          <button
            className="button"
            onClick={() => {
              props.onOpenModal()
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
