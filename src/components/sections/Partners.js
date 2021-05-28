import React from 'react'
import Bounce from 'react-reveal/Slide'

class PartnersSection extends React.Component {
  render() {
    return (
      <section id="partners" className="wrapper">
        <div className="partners__header">
          <h2 className="major partners__header--text">Our Partners</h2>
        </div>
        <div className="partners__info">
          <Bounce bottom delay={100}>
            <div className="partner-detail">
              <div className="partner-detail__backdrop"></div>
              <div className="partner-detail__content">
                <h3>Rabbit Hole Recording Studios</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime, voluptatem. Omnis molestias laborum explicabo!
                  Repellendus fuga earum odit, error mollitia eum vitae,
                  distinctio quas ex nam quia iste, non doloribus.
                </p>
                <button className="card-btn">Learn more</button>
              </div>
            </div>
          </Bounce>
          <Bounce bottom delay={100}>
            <div className="partner-detail">
              <div className="partner-detail__backdrop"></div>
              <div className="partner-detail__content">
                <h3>Qbldy Productions</h3>
                <p>
                  In the future, will you be able to dynamically transform
                  stand-ups in your business? Competitive big datas are becoming
                  company-wide synergy experts.
                </p>
                <button className="card-btn">Learn more</button>
              </div>
            </div>
          </Bounce>
          <Bounce bottom delay={100}>
            <div className="partner-detail">
              <div className="partner-detail__backdrop"></div>
              <div className="partner-detail__content">
                <h3>Strawberry Fields</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  repellendus fugiat perspiciatis pariatur illo reprehenderit
                  quod consectetur corporis unde incidunt, in ratione facilis,
                  reiciendis voluptas.
                </p>
                <button className="card-btn">Learn more</button>
              </div>
            </div>
          </Bounce>
          <Bounce bottom delay={100}>
            <div className="partner-detail">
              <div className="partner-detail__backdrop"></div>
              <div className="partner-detail__content">
                <h3>Wonderland Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore pariatur provident ratione neque quod sapiente eum
                  consectetur exercitationem enim dolore velit iusto rem laborum
                  error nostrum modi nulla dolor, dolorem odio deleniti at
                  placeat cum.
                </p>
                <button className="card-btn">Learn more</button>
              </div>
            </div>
          </Bounce>
          <Bounce bottom delay={100}>
            <div className="partner-detail">
              <div className="partner-detail__backdrop"></div>
              <div className="partner-detail__content">
                <h3>John Morey Design</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium magnam ex modi repellendus adipisci illum.
                </p>
                <button className="card-btn">Learn more</button>
              </div>
            </div>
          </Bounce>
          <Bounce bottom delay={100}>
            <div className="partner-detail">
              <div className="partner-detail__backdrop"></div>
              <div className="partner-detail__content">
                <h3>Fathoming Events</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  vero corrupti tempora qui provident ducimus laboriosam optio
                  ex eius quam.
                </p>
                <button className="card-btn">Learn more</button>
              </div>
            </div>
          </Bounce>
        </div>
      </section>
    )
  }
}

export default PartnersSection
