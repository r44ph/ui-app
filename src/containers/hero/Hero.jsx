import React from 'react'
import './Hero.css'
import CTA from '../../components/CTA/CTA'
import People1 from '../../assets/People1.png'
import People3 from '../../assets/People3.png'
import Audio from '../../assets/Audio.png'


const Hero = () => {
  return (

    <div className='hero__section section__padding'>
      <div className='hero__section-featured'>
        <svg preserveAspectRatio="none" viewBox="35 0 1450 25">
          <line x1="50" y1="0" x2="50" y2="25" stroke="grey" stroke-width="2" />
          <text x="75" y="13" font-size="13px" font-weight="600" letter-spacing="1.5px" font-family='Poppins' fill='grey' dominant-baseline="middle">FEATURED CLASS</text>
        </svg>
      </div>

      <div className='hero__section-big_text'>
        <h1>The role of<br/>User Interface<br/>Designer</h1>
        <CTA />
      </div>

      <div className='hero__section-people'>
        <div className="hero__section-people_designer">
          <img src={People1} alt="Karen William"/>

          <div className="people1-desc">
            <h2>Karen William</h2>
            <p>Senior Designer</p>
          </div>
        </div>

        <div className="hero__section-people_testimonial">
          <img src={People3} alt="Testimonial"/>
          <div className='freq'>
            <img src={Audio} alt="Audio"/>

          </div>
          <div className='player'>
            <i class="fa fa-play"></i>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Hero