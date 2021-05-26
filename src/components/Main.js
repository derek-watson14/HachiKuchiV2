import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="Hachi Kuchi"
          className={`${this.props.article === 'Hachi Kuchi' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Hachi Kuchi</h2>
          <div className="image-container hk-image"></div>
          <p>
            Our Corporate Enterprise solution offers enterprises a suite of
            world-class offerings. You need to proactively impact your verticals
            to increase your core competency velocity. In the future, will you
            be able to intelligently reuse capabilities in your business? Our
            driver development lifecycle enables unparalleled, senior
            propositions.
          </p>
          <p>
            In the dot-bomb space, industry is virtually transforming its
            knowledge transfer clouds. So we can hit the ground running, we will
            be globally aligning every deliverable in our space. Actionable
            paradigm shifts are becoming end-to-end standard setter experts. We
            thrive because of our proactive core asset and wholesale alignment
            culture.
          </p>
          {close}
        </article>

        <article
          id="Rabbit Hole Recording"
          className={`${
            this.props.article === 'Rabbit Hole Recording' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Rabbit Hole Recording</h2>
          <div className="image-container rh-image"></div>
          <p>
            So we can hit the ground running, we will be effectively engineering
            every diversity in our space. You need to intelligently
            revolutionize your standpoints to increase your architecture
            velocity. You need to reliably connect your bandwidths to increase
            your milestone velocity. In the future, will you be able to
            strategically transform emerging markets in your business?
          </p>
          <p>
            We aim to proactively facilitate our core competency by virtually
            offshoring our mission critical best-in-class dot-bombs. Change the
            way you do business - adopt world-class organic growths.
            Unparalleled prince2 practitioners ethically enable best-of-breed
            paradigm shifts for our capabilities. It's critical that we give
            110% when conservatively aligning best practices.
          </p>
          {close}
        </article>

        <article
          id="Qbldy Productions"
          className={`${
            this.props.article === 'Qbldy Productions' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Qbldy Productions</h2>
          <div className="image-container qb-image"></div>
          <p>
            Globally synergising iteratively next-generation propositions is
            crucial to our customer-focused standard setter. Efficiencies will
            come from dynamically investing our team players. We thrive because
            of our proactive enterprise and competitive visibility culture.
            Conservatively calibrating dynamically end-to-end platforms is
            crucial to our senior silo.
          </p>
          {close}
        </article>

        <article
          id="Strawberry Fields"
          className={`${
            this.props.article === 'Strawberry Fields' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Strawberry Fields</h2>
          <div className="image-container sf-image"></div>
          <p>
            Key players will take ownership of their synergies by effectively
            reusing innovative alignments. Company-wide big datas proactively
            enable holistic step-changes for our game changers. Our Seamless
            Driver solution offers brands a suite of long-term offerings. In the
            future, will you be able to intelligently deep-dive core assets in
            your business?
          </p>
          {close}
        </article>

        <article
          id="Contact"
          className={`${this.props.article === 'Contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
