import React from 'react'
import location from "../assets/location.svg"
import ranking from "../assets/ranking.svg"
import volume from "../assets/volume-high.svg"
import { useState } from 'react'

export default function SubContent() {
    const [basicActive, setBasicActive] = useState(false);
    const [standardActive, setStandardActive] = useState(false);

  const basicClick = () => {
    // 👇️ toggle
    setBasicActive(current => !current);
  };

  return (
    
        <div className="subscription-content">
            <h2>Subscription</h2>
            <small className='accent'>Benefits includes:</small>

            <div className="benefits">
                <div className="each-benefit">
                    <img src={location} alt="" />
                    <div className="benefit-details">
                        <h3 className='benefit-heading'>All Location</h3>
                        <p className='benefit-par'>Content through any of our 19 locations</p>
                    </div>
                </div>

                <div className="each-benefit">
                    <img src={ranking} alt="" />
                    <div className="benefit-details">
                        <h3 className='benefit-heading'>Top speed</h3>
                        <p className='benefit-par'>Don't let safety in the way of enjoying media</p>
                    </div>
                </div>

                <div className="each-benefit">
                    <img src={volume} alt="" />
                    <div className="benefit-details">
                        <h3 className='benefit-heading'>No Ads</h3>
                        <p className='benefit-par'>Get rid of all those banners $ videos</p>
                    </div>
                </div>
            </div>

            <div className="plans">
                    <div 
                       className="each-plan basic">
                        <p className='plan-name'>Basic</p>
                        <p
                         className='plan-price'><span className='price-bold'>$0.00</span>/mt</p>
                    </div>

                    <div className="each-plan standard">
                        <p className='plan-name'>Standard</p>
                        <p className='plan-price'><span className='price-bold'>$9.00</span>/mt</p>
                    </div>

                    <div className="each-plan premium">
                        <p className='plan-name'>Premium</p>
                        <p className='plan-price'><span className='price-bold'>$20.00</span>/mt</p>
                    </div>
                </div>
        </div>

    
  )
}
