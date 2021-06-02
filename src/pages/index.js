import React from 'react'
import Layout from '../components/layout'

import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/About'
import Events from '../components/sections/Events'
// import FooterSection from '../components/sections/Footer'
import Partners from '../components/sections/partners/Partners'
import Team from '../components/sections/Team'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      timeout: false,
      modalTimeout: false,
      loading: 'is-loading',
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
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

  handleOpenModal() {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        modalTimeout: !this.state.modalTimeout,
      })
    }, 350)
  }

  handleCloseModal() {
    this.setState({
      modalTimeout: !this.state.modalTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isModalVisible: !this.state.isModalVisible,
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isModalVisible) {
        this.handleCloseModal()
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isModalVisible ? 'is-article-visible' : ''
          }`}
        >
          <Hero
            isModalVisible={this.state.isModalVisible}
            timeout={this.state.timeout}
            modalTimeout={this.state.modalTimeout}
            onOpenModal={this.handleOpenModal}
            onCloseModal={this.handleCloseModal}
            setWrapperRef={this.setWrapperRef}
          />
          <About />
          <Partners />
          <Team />
          <Events />
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
