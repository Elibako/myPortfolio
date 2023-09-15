import React from 'react'
import "./socials.css"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const socials = () => {
  return (
    <div className="hero">
      <div className="hero-content">
      </div>
      <div className="hero-icons">
        <i className="twitter"><a href=""><BsGithub/> </a></i>
        <i className="linkedin"><BsLinkedin/></i>
        <i className="instagram"><BsInstagram/></i>
      </div>
    </div>
  )
}

export default socials