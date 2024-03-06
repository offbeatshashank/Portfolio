import React,{useRef} from 'react'
import { HashLink as Link} from 'react-router-hash-link';
import "./services.scss"
import{motion, useInView} from 'framer-motion'

const variants ={
    initial:{
        scale:0,
        opacity:0
    },
    animate:{

        scale:1,
        opacity:1,
        
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const Services = () => {

    const handleButton = () => {
        window.open('https://github.com/offbeatshashank?tab=repositories','blank')
    }

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})
     

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"} >
    
    <motion.div className="textContainer" variants={variants}>
        <p>I Focus on helping your company grow<br />and move forward</p>
        <hr />
      </motion.div>
     

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
        <img src="/people.webp" alt="" />
        <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
        </h1>
        </div>
     
        <div className="title">
        <h1>
            <motion.b whileHover={{color:"orange"}}>For your</motion.b> Business.
        </h1>
        <button onClick={handleButton}>WHAT I DID ?</button>
        </div>
      </motion.div> 

      <motion.div className="listContainer" variants={variants}>

        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Website Devolopment</h2>
            <p>
            Crafting custom websites that captivate and convert. Elevate your online presence with our expert team.
            </p>
            <Link to={"#Contact"}><button>Go</button></Link>
        </motion.div>

        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Responsive Web Design</h2>
            <p>
            Creating websites that are optimized for various devices and screen sizes, including desktops, laptops, tablets, and smartphones.
            </p>
            <Link to={"#Contact"}><button>Go</button></Link>
        </motion.div>

        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>UI Designing</h2>
            <p>
            Creating user-friendly designs that make your website shine. Elevate your brand with our expert UI/UX team.
            </p>
            <Link to={"#Contact"}><button>Go</button></Link>
        </motion.div>

        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Website Maintenance and Support</h2>
            <p>
            Providing ongoing maintenance, updates, and technical support to keep websites secure and running smoothly.
            </p>
            <Link to={"#Contact"}><button>Go</button></Link>
        </motion.div>

      </motion.div>


    </motion.div>
  )
}

export default Services
