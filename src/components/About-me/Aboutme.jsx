import React from 'react';
import './AboutMe.css'; // Import your CSS file

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hello! I'm John Doe, a passionate web developer and designer. With a
          keen eye for aesthetics and a knack for coding, I bring creativity and
          functionality to every project I work on.
        </p>
        <p>
          My journey in web development started in college, where I discovered my
          passion for crafting beautiful and user-friendly websites. Since then,
          I've been dedicated to creating seamless digital experiences that
          resonate with users.
        </p>
        <p>
          When I'm not immersed in code, you'll find me exploring new hiking
          trails, capturing stunning photographs, and experimenting with new
          recipes in the kitchen.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
