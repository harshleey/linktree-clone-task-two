import React from 'react'
import { useState } from 'react'

export default function SubHeading() {
  const [frequencyMode, setFrequencyMode] = useState(true)
    
  function toggleFrequencyMode() {
      setFrequencyMode(prevMode => !prevMode)
  }

  return (
    <div className="sub-heading">
        <h1 className='sub-heading accent'>Choose a plan tailored to your needs</h1>

<div className="month-year">
    <p className={frequencyMode ? "accent" : ""}>Monthly</p>
    <div 
            className={`toggler--slider ${frequencyMode ? "toggler--slider-end" : "" } `}
            onClick={toggleFrequencyMode}
        >
            <div className="toggler--slider--circle"></div>
        </div>
    <p className={!frequencyMode ? "accent" : ""}>Yearly</p>
</div>
    </div>
  )
}
