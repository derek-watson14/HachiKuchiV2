import React from 'react'

import Header from '../Header'
import Contact from '../Main'
import Footer from '../Footer'

class HeroSection extends React.Component {
  render() {
    return (
      <section id="hero" className="wrapper">
        <Header
          onOpenArticle={this.handleOpenArticle}
          timeout={this.state.timeout}
        />
        <Contact
          isArticleVisible={this.state.isArticleVisible}
          timeout={this.state.timeout}
          articleTimeout={this.state.articleTimeout}
          article={this.state.article}
          onCloseArticle={this.handleCloseArticle}
          setWrapperRef={this.setWrapperRef}
        />
        {/* <Footer timeout={this.state.timeout} /> */}
      </section>
    )
  }
}

export default HeroSection
