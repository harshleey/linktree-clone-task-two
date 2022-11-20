import React from 'react'
import { Link } from 'react-router-dom'
import tick from "../assets/tick-circle.svg"
import SubContent from '../components/SubContent'
import SubHeading from '../components/SubHeading'
import success from "../assets/success-circle.svg"
import { useState } from 'react'


export default function SubFeatures() {
  const [toggleSubscribe, setToggleSubcribe] = useState(false)

  const handleSubscribe = () => {
    setToggleSubcribe(prevSubscribe => !prevSubscribe)
  }

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
  };

  return (
    <div className="sub-features subscription-section">
      <SubHeading onBasic={handleClick}/>

      <div className="features">
        <h2 className='feature-heading'>Complete features</h2>

        <div className="all-features">
          <div className="each-feature">
            <div className="feature-top">
            <h4 className='feature-plan-name'>Free plan</h4>
            <p className='feature-price-plan'><span className="feature-price-bold">$0.00</span> /mt</p>

            <ul>
              <li>
                <img src={tick} alt="" />
                5 Ticked tasks</li>
              <li>
              <img src={tick} alt="" />1 hour update time</li>
              <li>
              <img src={tick} alt="" />5 MB file upload, 3 filters</li>
              <li>
              <img src={tick} alt="" />1-week activity history</li>
            </ul>
            </div>

           <button className="btn choose">Choose</button>
          </div>

          <div className="each-feature">
            <div className="feature-top">
            <h4 className='feature-plan-name'>Standard</h4>
            <p className='feature-price-plan'><span className="feature-price-bold">$9.00</span> /mt</p>

            <ul>
              <li>
                <img src={tick} alt="" />
                Up to 300 Ticked tasks</li>
              <li>
              <img src={tick} alt="" />20 mins update time</li>
              <li>
              <img src={tick} alt="" />100 MB file upload, 150 filters</li>
              <li>
              <img src={tick} alt="" />Reminder with an AI virtual assistant</li>
              <li>
              <img src={tick} alt="" />4 weeks activity history</li>
            </ul>
            </div>

           <button className="btn choose">Choose</button>
          </div>

          <div className="each-feature">
            <div className="feature-top">
            <h4 className='feature-plan-name'>Standard</h4>
            <p className='feature-price-plan'><span className="feature-price-bold">$20.00</span> /mt</p>

            <ul>
              <li>
                <img src={tick} alt="" />
                Unlimited Ticked tasks</li>
              <li>
              <img src={tick} alt="" />Unlimited update time</li>
              <li>
              <img src={tick} alt="" />Unlimited activity history</li>
              <li>
              <img src={tick} alt="" />Reminder with an AI VA</li>
              <li>
              <img src={tick} alt="" />Improved UI</li>
              <li>
              <img src={tick} alt="" />Speedily add and organize tasks</li>
              <li>
              <img src={tick} alt="" />Premium support</li>
              <li>
              <img src={tick} alt="" />Archive task inbox</li>
            </ul>
            </div>

           <button className="btn choose">Choose</button>
          </div>
        </div>

        <div className="feature-bottom-links">
          <button onClick={handleSubscribe}  className="btn subscribe">
            Subscribe
          </button>
          <Link to="/" id="sub-features" className="accent">Cancel or change subscription plan</Link>

        </div>
      </div>

      <div onClick={() => {
        setToggleSubcribe(!toggleSubscribe)
      }} className={`subscribe-modal ${toggleSubscribe ? "active-modal" : ""}`}>
       <div className="inner-subscribe">
        <img src={success} alt="" />
        <h5>Success!</h5>
        <p>You have successfully made a basic subscription of $0.00!</p>
        <button className="btn"><Link to="/" id="sub-features" className="btn">Proceed to payment</Link></button>
       </div>
      </div>
    </div>
  )
}
