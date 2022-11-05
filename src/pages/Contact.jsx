import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className='contact-section'>
      <div className="top-contact">
        <h2 className='contact-heading'>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <Form/>
      </div>
        

        {/* <small><Link to="/">Return home</Link></small> */}
        <Footer/>
    </div>
  )
}
