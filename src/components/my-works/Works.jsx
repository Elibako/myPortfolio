import React from 'react';
import './works.css'; // Import your CSS file
import Aos from 'aos';
import { FaUtensils, FaProjectDiagram, FaRecycle } from 'react-icons/fa'; // Import the icons you want to use

const Works = () => {
  const worksData = [
    {
      icon: <FaUtensils />,
      title: 'Tasty Nosh',
      description: 'Connecting food enthusiasts with top chefs – your direct link to culinary excellence!',
      buttonText: 'View project',
      buttonLink: 'https://www.figma.com/file/Ec94ySHSeHC2FnypWgLyEW/Tasty-Nosh?type=design&node-id=6-2174&mode=design&t=YUYwbqi2VkkCH8VY-0',
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Host X',
      description: 'Streamline projects with our intuitive app: seamless collaboration, effortless organization',
      buttonText: 'View project',
      buttonLink: 'https://www.figma.com/file/2P3vgeeSu4WW6m7Nta5kjN/Host-X?type=design&node-id=48-2&mode=design&t=SA89d8GcaOX3UqN0-0',
    },
    {
      icon: <FaRecycle />,
      title: 'Green Express',
      description: 'Sustainable waste solutions for a greener planet.',
      buttonText: 'View project',
      buttonLink: 'https://www.figma.com/file/H8oyhK9cRg15ptk24v1xyj/Green-express?type=design&node-id=76-4&mode=design&t=so6U818WuGLOGI7p-0',
    },
  ];

  return (
    <section className="works" id='myWorks'>
      <div className="works-text">
        <p className='description'>
          <h1>
            My Works
          </h1>
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to design boards and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>
      <div className="container" data-aos="fade-right">
        <div className="work-items">
          {worksData.map((work, index) => (
            <div key={index} className={`work-item ${index === 2 ? 'larger' : ''}`}>
              {work.icon}
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <a href={work.buttonLink} target="_blank" rel="noopener noreferrer">
                <button className="view-button">{work.buttonText}</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
