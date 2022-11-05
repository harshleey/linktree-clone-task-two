import React from 'react'
import zurilogo from "../assets/zuri-logo.svg"
import I4G from "../assets/I4G.svg"

export default function Footer() {
  return (
    <footer id='footer-section'>
        <img src={zurilogo} alt="zuri-internship-logo" className='footer-logo'/>
        <p id='footer-frontend-task'>HNG Internship 9 Frontend Task </p>
        <img src={I4G} alt="ingressive-4-good-logo" className='footer-logo'/>
    </footer>
  )
}
