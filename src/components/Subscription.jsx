import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import SubHeading from './SubHeading';
import SubContent from './SubContent';

export default function Subscription({}) {
    // const [basicActive, setBasicActive] = useState(false);
    // const [standardActive, setStandardActive] = useState(false);

//   const basicClick = () => {
//     // 👇️ toggle
//     setBasicActive(current => !current);
//   };
  return (
    <div className="subscription-section">
        <SubHeading/>
        <SubContent/>
        <button className=" continue-btn">
            <Link to="/sub-features" id="" className="button btn sub-features-btn">Continue</Link></button>

        <p className='sub-bottom'>Subscriptions will automatically renew and your credit card will be charged at the end of each period</p>

    </div>
  )
}
