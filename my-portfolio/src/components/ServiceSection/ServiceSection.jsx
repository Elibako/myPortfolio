import React from 'react';
import './ServiceSection.css';
import { FaCode, FaPalette, FaDesktop, FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import AOS from 'aos'


const ServiceSection = () => {
  return (
    <div className="services">
      <div className="service-text">
        <p>Introduction</p>
        <h2 style={{ color: '#0099FF' }}>Overview </h2>
        <p>
          I'm a skilled software developer with experience in TypeScript and JavaScript, and also experienced in
          frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together
          to bring your ideas to life!
        </p>
      </div>
      <div className="service-cards">
        <div className="service-card"data-aos="fade-right">
          <FaCode className="service-icon"  />
          <h3>Web Developer</h3>
          {/* Add your description here */}
        </div>
        <div className="service-card"data-aos="fade-down">
          <FaPalette className="service-icon" />
          <h3>UI/UX Designer</h3>
          {/* Add your description here */}
        </div>
        <div className="service-card" data-aos="fade-right">
          <FaDesktop className="service-icon" />
          <h3>IT Specialist</h3>
          {/* Add your description here */}
        </div>
        <div className="service-card"data-aos="fade-left">
  <FaHtml5 className="service-icon" />
  <h3>HTML</h3>
  {/* Add your description here */}
</div>
<div className="service-card"data-aos="fade-up">
  <FaCss3 className="service-icon" />
  <h3>CSS</h3>
  {/* Add your description here */}
</div>
<div className="service-card"data-aos="fade-right">
  <FaReact className="service-icon" />
  <h3>React</h3>
  {/* Add your description here */}
</div>

      </div>
    </div>
  );
};

export default ServiceSection;
