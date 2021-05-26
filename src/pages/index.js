import React from 'react'
import Layout from '../components/layout'
import { Link as Scroll } from 'react-scroll'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import fullLogo from '../images/fullLogo.png'
import derek from '../images/team/derek.jpg'
import tubman from '../images/team/tubman.jpg'
import tyler from '../images/team/tyler.jpg'
import barb from '../images/team/barb.jpg'
import zuck from '../images/team/zuck.jpg'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <section className="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </section>
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
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.
                    </p>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution. User generated content in real-time will have
                      multiple touchpoints for offshoring.
                    </p>
                  </div>
                  <Scroll to="partners" smooth={true} offset={0} duration={500}>
                    <button className="special">Our Partners</button>
                  </Scroll>
                </div>
              </Slide>
            </div>
          </section>
          <section id="partners" className="wrapper">
            <h2 className="major partners__header">Our Partners</h2>
            <div className="partners__info">
              <Bounce bottom delay={0}>
                <div className="partner-detail">
                  <h3>Crackheads</h3>
                  <p>
                    In the future, will you be able to dynamically transform
                    stand-ups in your business? Competitive big datas are
                    becoming company-wide synergy experts.
                  </p>
                  <button>Learn more</button>
                </div>
              </Bounce>
              <Bounce bottom delay={100}>
                <div className="partner-detail">
                  <h3>Meth Addicts</h3>
                  <p>
                    Efficiencies will come from iteratively investing our
                    siloes. In the future, will you be able to intelligently
                    strategize core assets in your business?
                  </p>
                  <button>Learn more</button>
                </div>
              </Bounce>
              <Bounce bottom delay={200}>
                <div className="partner-detail">
                  <h3>Barb</h3>
                  <p>
                    Our paradigm shift development lifecycle enables mission
                    critical, actionable team players. Efficiencies will come
                    from proactively monetizing our capabilities.
                  </p>
                  <button>Learn more</button>
                </div>
              </Bounce>
              <Bounce bottom delay={300}>
                <div className="partner-detail">
                  <h3>Loose Whores</h3>
                  <p>
                    In the future, will you be able to dynamically deep-dive
                    brands in your business? Ethically reusing intelligently
                    customer-focused diversities is crucial to our world-class
                    prince2 practitioner.
                  </p>
                  <button>Learn more</button>
                </div>
              </Bounce>
              <Bounce bottom delay={400}>
                <div className="partner-detail">
                  <h3>Harriot Tubman's Ghost</h3>
                  <p>
                    It's critical that we give 110% when conservatively
                    virtualising drivers. So we can hit the ground running, we
                    will be ethically connecting every vertical in our space.
                  </p>
                  <button>Learn more</button>
                </div>
              </Bounce>
            </div>
          </section>
          <section id="team" className="wrapper">
            <h2 className="major team__header">Team and Investors</h2>
            <div className="team-members">
              <div className="member">
                <img className="member__img" src={derek} alt="" />
                <h3>Derek Watson</h3>
                <h5>Tech & Web Lead</h5>
              </div>
              <div className="member">
                <img className="member__img" src={barb} alt="" />
                <h3>Barb</h3>
                <h5>Fucks and burns kids</h5>
              </div>
              <div className="member">
                <img className="member__img" src={tyler} alt="" />
                <h3>Tyler Smiley</h3>
                <h5>"The Lost Mongolian"</h5>
              </div>
              <div className="member">
                <img className="member__img" src={tubman} alt="" />
                <h3>Jeffery Hennings</h3>
                <h5>Artist Outreach</h5>
              </div>
              <div className="member">
                <img className="member__img" src={zuck} alt="" />
                <h3>Mark Zuckerburg</h3>
                <h5>CEO of Facebook</h5>
              </div>
            </div>
          </section>
          <section id="events" className="wrapper">
            <Fade>
              <h1>Events</h1>
            </Fade>
          </section>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
