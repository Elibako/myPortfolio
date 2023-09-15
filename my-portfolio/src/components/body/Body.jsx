import React from 'react'
import './body.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect'

import { BsTwitter, BsInstagram,BsLinkedin, BsGithub} from "react-icons/bs"
const body = () => {
  useEffect(() => {
    AOS.init( {duration : 1000});
  }, [])

    return (
       <div className="container" >
         <div className="hero">
          
          <div className="hero-content" data-aos= "fade-right">
            <div className="text" >
                <img src="Waving Hand Emoji.png" alt="" />
                <h1>
                Hey, I'm <span className='elisha' style={{color:'#0099FF'}}>Elisha Bako</span>

                </h1>
                <div className="App">
            <div className="typewriter-text">
            <Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString("A UI/UX Designer")
         .pauseFor(1000)
         .deleteAll()
         .typeString("A Web Developer ")
         .pauseFor(1000)
         .deleteAll()
         .typeString("An IT Engineer")
         .start();
 }}
/>
            </div>
        </div>
              {/* <p>A freelance <span>UI/UX designer</span>,web developer and a big fan of good music</p> */}
              <p>Welcome to my portfolio! I am passionate about creating captivating user experiences and crafting innovative web solutions. With a keen eye for design and a dedication to excellence, I aim to bring your ideas to life.</p>
              <button >Get in touch</button>
               <div className="hero-icons">
              {/* <h4>Let's Connect</h4> */}
        <i className="github" ><a href="https://github.com/Elibako" target="_blank"><BsGithub/> </a></i>
        <i className="linkedin"><a href="https://www.linkedin.com/in/elisha-bako-553832179/" target="_blank"> <BsLinkedin/></a></i>
        <i className="instagram"> <a href=""><BsInstagram/> </a></i>
        <i className="twitter"> <a href="https://twitter.com/Sirius6laq" target="_blank"> <BsTwitter/> </a></i>
      </div>
            </div>
            <div className="image" data-aos="fade-up">
              
              <img src="3d-business-man-works-at-a-computer-and-waves-his-hand.png" alt="Hero"  />
            </div>
           
          </div>
        </div>
    </div>
        
      
      );
}

export default body