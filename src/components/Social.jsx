import React from 'react'
import slacklogo from "../assets/slack.svg"
import githublogo from "../assets/github.svg"


export default function Social() {
  return (
    <section id='social-section'>
        <img src={slacklogo}/>
        <img src={githublogo}/>
    </section>
  )
}
