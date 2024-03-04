import React, { useState } from 'react'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'
import {animate, motion} from 'framer-motion'

const Navbar = () => {

  const variants = {
    initial : {
      scale : 1
    },
    animate:{
scale :1.5
    }
  }



  return (
    <div className='navbar'>
     {/* Sidebar */} 
      <Sidebar/>
     <div className="wrapper">
        <span>PORTFOLIO</span>
        <div className="social">
            <motion.a  variants={variants} initial="initial"  whileHover="animate" href="https://www.linkedin.com/feed/"><img src="/in.png" alt="" /></motion.a>
            <motion.a variants={variants} initial="initial"  whileHover="animate" href="https://github.com/offbeatshashank?tab=repositories"><img src="/github1.png" alt="" /></motion.a>
            <motion.a variants={variants} initial="initial"  whileHover="animate" href="https://www.instagram.com/offbeatshashank/"><img src="/ig.png" alt="" /></motion.a>
        </div>
     </div>
    </div>
  )
}

export default Navbar
