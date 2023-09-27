import React from 'react';
import './works.css'; // Import your CSS file
import Aos from 'aos';

const Works = () => {
    const worksData = [
      {
        image: 'Frame 3.png',
        title: 'Tasty Nosh',
        description: 'Description of Project 1',
      },
      {
        image: 'Dashboard.png',
        title: 'Project 2',
        description: 'Description of Project 2',
      },
      {
        image: 'Splash screen 22.png',
        title: 'Project 3',
        description: 'Description of Project 3',
      },
      // {
      //   image: 'Frame 3.png',
      //   title: 'Project 4',
      //   description: 'Description of Project 4',
      // },
      // {
      //   image: 'Dashboard.png',
      //   title: 'Project 5',
      //   description: 'Description of Project 5',
      // },
      // {
      //   image: 'Splash screen 22.png',
      //   title: 'Project 6',
      //   description: 'Description of Project 6',
      // },
    ];
  
    return (
      <section className="works" id='myWorks'>
        <div className="works-text">
          <p className='description'>
            <h1>
              My Works
              </h1>
              Following projects showcases my skills and experience through 
          real-world examples of my work. Each project is briefly described with links 
          to code repositories and live demos in it.  It reflects my ability to solve 
          complex problems, work with different  technologies, and manage projects effectively.</p>
        </div>
        <div className="container" data-Aos="fade-right">
            <div className="work-items">
            {worksData.map((work, index) => (
              <div
                key={index}
                className={`work-item ${index === 2 ? 'larger' : ''}`}
              >
                <img src={work.image} alt={work.title} />
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <button className="view-button">View</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  

export default Works;
