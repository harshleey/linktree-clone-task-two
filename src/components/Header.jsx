import React from 'react'
import { RiShareForwardLine } from "react-icons/ri";
import {FiMoreHorizontal} from "react-icons/fi"
import { useState, useEffect } from 'react'


export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

  return (
    <header id='header'>
        <a href="" id='share-icon'>{windowWidth > 750 ? <RiShareForwardLine /> : <FiMoreHorizontal/>}</a>
        
    </header>
  )
}


