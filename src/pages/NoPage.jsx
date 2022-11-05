import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div className='container'>
        <small>404 error</small>
        <h1>We can't find that page</h1>
        <p>Sorry, the page you are looking for doesn't exist or has been removed</p>

        {/* <button><Link to=""/>Go back</button> */}
        <button><Link to="/">Take me home</Link></button>
    </div>
  )
}
