import React from 'react'
import Header from "../components/Header"
import Profile from '../components/Profile'
import Links from '../components/Links'
import Social from '../components/Social'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <Profile/>
      <Links/>
      <Social/>
      <Footer/>
    </div>
  )
}
