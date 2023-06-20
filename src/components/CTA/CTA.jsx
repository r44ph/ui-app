import React from 'react'
import './CTA.css'
import DotOrnament from '../../assets/DotOrnament.png'

const CTA = () => {
  return (
    <div className='cta__background'>
        <div className='cta__background-content'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 56 216 128 144 200" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          <h2>Join<br/>The Class</h2>
        </div>

        <div className='ornament'>
          <img src={DotOrnament} />
        </div>
        
    </div>
  )
}

export default CTA