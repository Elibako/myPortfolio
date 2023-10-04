import React from 'react';
import './ServiceSection.css';
import { FaCode, FaPalette, FaDesktop, FaReact, FaCss3, FaHtml5, FaGithub, FaGithubAlt } from 'react-icons/fa';
import AOS from 'aos'


const ServiceSection = () => {
  return (
    <div className="services" id='ServiceSection'>
      <div className="service-text">
        <p>Introduction</p>
        <h2 style={{ color: '#0099FF' }}>Overview </h2>
        <p>
        I'm a versatile professional skilled in both UI/UX design and software engineering. With expertise in tools like Sketch, Figma, and Adobe XD, I create visually appealing and intuitive interfaces. I'm proficient in JavaScript, React, HTML and CSS, ensuring seamless integration of designs into robust software solutions.

I collaborate closely with clients to deliver user-friendly applications that solve real-world problems. My unique ability to merge design creativity with technical expertise ensures a cohesive and impactful user experience. Let's work together to bring your ideas to life efficiently and beautifully.
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
          <h3>UI/UX </h3>
          {/* Add your description here */}
        </div>
        <div className="service-card" data-aos="fade-right">
          <FaGithubAlt className="service-icon" />
          <h3>Git</h3>
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
