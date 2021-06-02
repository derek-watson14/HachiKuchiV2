import React from 'react'
import { Link as Scroll } from 'react-scroll'

const Nav = props => {
  return (
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
