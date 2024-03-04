import React, {useRef} from 'react'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'
import "./portfolio.scss" 



const items =[
    {
        id:1,
        title:"React Commerce",
        img:"/a.jpg",
        desc:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
    },
    {
        id:2,
        title:"music app",
        img:"/b.webp",
        desc:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
    },
    {
        id:3,
        title:"fb clone",
        img:"/c.webp",
        desc:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
    },
    {
        id:4,
        title:"netflix",
        img:"d.jpeg",
        desc:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
    }
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
