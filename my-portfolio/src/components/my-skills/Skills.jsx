import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque arcu ac odio lobortis, a sagittis libero tincidunt. Fusce aliquet, ante sit amet fermentum tincidunt.</p>
        <div className="skill-row">
          <div className="skill-column">
            <div className="skill">
              <h3>HTML</h3>
              <div className="progress">
                <div className="progress-bar html" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>CSS</h3>
              <div className="progress">
                <div className="progress-bar css" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>Figma</h3>
              <div className="progress">
                <div className="progress-bar figma" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
          <div className="skill-column">
            <div className="skill">
              <h3>React</h3>
              <div className="progress">
                <div className="progress-bar react" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>Webflow</h3>
              <div className="progress">
                <div className="progress-bar webflow" style={{ width: '75%' }}>
                </div>
              </div>
            </div>
            <div className="skill">
              <h3>Javascript</h3>
              <div className="progress">
                <div className="progress-bar javascript" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
