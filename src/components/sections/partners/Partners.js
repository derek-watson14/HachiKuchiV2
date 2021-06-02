import React from 'react'

import PartnerCard from './PartnerCard'

class PartnersSection extends React.Component {
  render() {
    return (
      <section id="partners" className="wrapper">
        <div className="partners__header">
          <h2 className="major partners__header--text">Our Partners</h2>
        </div>
        <div className="partners__info">
          <PartnerCard
            partnerName={'Rabbit Hole Recording Studios'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatem. Omnis molestias laborum explicabo! Repellendus fuga earum odit, error mollitia eum vitae, distinctio quas ex nam quia iste, non doloribus.'
            }
          />
          <PartnerCard
            partnerName={'Qbldy Productions'}
            description={
              'In the future, will you be able to dynamically transform stand-ups in your business? Competitive big datas are becoming company-wide synergy experts.'
            }
          />
          <PartnerCard
            partnerName={'Strawberry Fields'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellendus fugiat perspiciatis pariatur illo reprehenderit quod consectetur corporis unde incidunt, in ratione facilis, reiciendis voluptas.'
            }
          />
          <PartnerCard
            partnerName={'Wonderland Cleaning'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellendus fugiat perspiciatis pariatur illo reprehenderit quod consectetur corporis unde incidunt, error nostrum modi nulla dolor, dolorem odio deleniti at placeat cum.'
            }
          />
          <PartnerCard
            partnerName={'John Morey Design'}
            description={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium magnam ex modi repellendus adipisci illum.'
            }
          />
          <PartnerCard
            partnerName={'Fathoming Events'}
            description={
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vero corrupti tempora qui provident ducimus laboriosam optio ex eius quam.'
            }
          />
        </div>
      </section>
    )
  }
}

export default PartnersSection
