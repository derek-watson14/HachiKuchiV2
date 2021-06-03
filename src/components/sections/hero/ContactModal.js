import React from 'react'

import ContactForm from './ContactForm'

class ContactModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.props.onCloseModal()
    }
  }

  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="Contact"
          className={`${this.props.isModalVisible ? 'active' : ''} ${
            this.props.modalTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ContactForm />
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/hachikuchiartistcollective/"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hachikuchiartistcollective/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          <div
            className="close"
            role="button"
            aria-label="Close modal"
            tabindex={0}
            onClick={() => {
              this.props.onCloseModal()
            }}
            onKeyUp={this.handleKeyUp}
          ></div>
        </article>
      </div>
    )
  }
}

export default ContactModal
