import React from 'react'

import "./hero.scss"
import {motion} from 'framer-motion'
import Services from '../sevices/Services'
import { HashLink as Link} from 'react-router-hash-link';

const textVariants ={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton :{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
}



const sliderVariants ={
  initial:{
    x:0,
    
  },
  animate:{
    x:"-220%",
    
    transition:{
      duration:20,
      repeat:Infinity,
      repeatType:"mirror",
    },
  },
}



const Hero = () => {

  
  return (
    <div className='hero'>
      <div className="wrapper">


      <motion.div className="textcontainer" variants={textVariants} initial="initial" animate="animate">

        <motion.h2 variants={textVariants}> 
          SHASHANK VISHWAKARMA
        </motion.h2>
        <motion.h1 variants={textVariants}>
          Web devoloper and UI designer
        </motion.h1>
        

        <motion.div className="buttons" variants={textVariants}>

          
           <Link to={"#Services"}> <motion.button whileHover={{scale:1.1}} variants={textVariants}>See more</motion.button> </Link>
          

           <Link to={"#Contact"}><motion.button whileHover={{scale:1.1}} variants={textVariants}>Contact me</motion.button></Link>
          
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />

      </motion.div>

      <motion.div className="slidingtext" variants={sliderVariants} initial="initial" animate="animate">
      Web devoloper UI designer
        </motion.div>


      </div>
        <div className="grid">
            <div className='hexagon-gallery'>

              <div className="hexagon">
                <motion.div className="hex" whileHover={{scale:1.3}}>
                  <span>
                    <img src="/html.png" alt=""/>
                  </span>
                </motion.div>
                <motion.div className="hex" whileHover={{scale:1.3}}>
                <span><img src="/css.png" alt=""/></span>
                </motion.div>
              </div>

              <div className="hexagon">
                <motion.div className="hex" whileHover={{scale:1.3}}>
                <span><img src="/js.png" alt=""/></span>
                </motion.div>
                <motion.div className="hex"  whileHover={{scale:0.8}} whileTap={{scale:1.3}} >
                 <h1>  skills  </h1>
                </motion.div>
                <motion.div className="hex"whileHover={{scale:1.3}}>
                <span>
                <img src="/scss.png" alt=""/>
                </span>
                </motion.div>
              </div>  

              <div className="hexagon">
                <motion.div className="hex" whileHover={{scale:1.3}}>
                <span><img src="/react.png" alt=""/></span>
                </motion.div>
                <motion.div className="hex" whileHover={{scale:1.3}}>
                  <span><img className='svg' style={{width:"50px" , height:"50px"}} src="/framer-motion.svg" /></span>
                  </motion.div>
              </div>
               
            </div>
            
        </div>
    </div>
  )
}

export default Hero
