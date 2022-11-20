import React from 'react'

export default function SubHeading() {
  return (
    <div className="sub-heading">
        <h1 className='sub-heading accent'>Choose a plan tailored to your needs</h1>

<div className="month-year">
    <p>Monthly</p>
    <div 
            className="toggler--slider"
            // onClick={toggleFrequencyMode}
        >
            <div className="toggler--slider--circle"></div>
        </div>
    <p className='yearly'>Yearly</p>
</div>
    </div>
  )
}
