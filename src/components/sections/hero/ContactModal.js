import React from 'react'

import ContactForm from './ContactForm'

class ContactModal extends React.Component {
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
            onClick={() => {
              this.props.onCloseModal()
            }}
          ></div>
        </article>
      </div>
    )
  }
}

export default ContactModal