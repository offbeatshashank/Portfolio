import React, {useRef} from 'react'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'
import "./portfolio.scss" 



const items =[
    {
        id:1,
        title:"React Portfolio Website",
        img:"/react1.png",
        desc:"The React Portfolio Animated Website is a dynamic showcase built with HTML, JavaScript, SCSS, and Framer Motion. It features smooth animations and transitions, providing an engaging user experience. With React, the site is responsive and interactive, allowing seamless navigation. SCSS ensures stylish and consistent design throughout the website. Overall, it's a professional and visually appealing portfolio that highlights the developer's skills effectively."
    },
    {
        id:2,
        title:"Student Registration System with Database",
        img:"/srs.jpg",
        desc:"The Student Registration System is a Python application with a Tkinter interface, utilizing MS Excel as the database. It offers a straightforward way to input and manage student data, including details like name, class, gender, and parent information. The system streamlines administrative tasks, providing automatic registration number generation and photo upload functionality. With its simplicity and efficiency, it's a valuable tool for educational institutions to maintain student records."
    },
    {
        id:3,
        title:"FB UI Clone",
        img:"/fbui.webp",
        desc:"The Facebook UI Clone is a replica of the popular social media platform created using HTML, CSS, and JavaScript. It faithfully mirrors Facebook's design and functionality, featuring responsive layouts and interactive elements like likes and comments. With attention to detail, this project showcases proficiency in front-end development and offers users an authentic Facebook experience on both desktop and mobile devices."
    },
]

const Single = ({item}) =>{

    const handleButton = () => {
        window.open('https://github.com/offbeatshashank?tab=repositories','blank')
    }

    const ref = useRef();

    const{scrollYProgress } = useScroll({target:ref,})

    const y = useTransform(scrollYProgress,[0,1],[-300,300])

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                  <div className="imgContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                  <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button onClick={handleButton}>See Demo</button>
                  </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const{scrollYProgress } = useScroll({target:ref,offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

    return(
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item)=> (
                <Single item={item} key={item.id}/>
            ))}
        </div>

    )
}

export default Portfolio
