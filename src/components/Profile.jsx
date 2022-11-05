import React from 'react'
import profileimage from "../assets/profile_img.jpeg"
// import {FiCamera} from "react-icons/Fi"


export default function Profile() {
  return (
    <div className="profile-container">
      <div id='profile-section'>
          <img id="profile__img" src={profileimage} alt="profile_image" />
      </div>

      {/* <div className="overlay">
        {FiCamera}
      </div> */}
      

      <div className="profile-content">
        <p id="twitter">Adebola_xo</p>
        <p id="slack">Wonuola</p>
      </div>
    </div>
   
  )
}
