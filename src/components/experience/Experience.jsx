import React from 'react';
import './Experiences.css';

const Experiences = () => {
  return (
    <section className="experiences">
      <h2>Experiences</h2>
      <h1>
        Some of the job experiences I have had in the
      </h1>
      <ul className="experience-list">
        <li className="experience-item">
          <h3>Sales and Distribution</h3>
          <p>COCA COLA BOTTLING COMPANY, JOS, PLATEAU |  June 2015 -January 2016</p>
          <p>Sales and distribution of coca cola products.</p>
        </li>
        <li className="experience-item">
          <h3> IT Technician</h3>
          <p>LASVENTUERES GLOBAL LIMITED, JOS, PLATEAU| MARCH 2021 -APRIL 2022</p>
          <ul>
            <p>
            <li>
            Setting up workstations with computers and necessary peripheral devices

                </li>
            </p>
                <p>
                  <li>
                  <li>
                Checking computer hardware (HDD, mouses, keyboards etc.) to ensure functionality
                </li>
                  </li>
                </p>
                <p>
                <li>
                Installing and configuring appropriate software and functions according to specifications

                </li>
                </p>
                <p>
                <li>
                Provide orientation and guidance to users on how to operate new software and computer equipment
                </li>
                </p>
                <p>
                <li>
                Organize and schedule upgrades and maintenance without deterring others from completing their work
                </li>
                </p>
               <p>
               <li>
                Perform troubleshooting to diagnose and resolve problems (repair or replace parts, debugging etc.)
                </li>
               </p>
                </ul>
                
        </li>
        <li className="experience-item">
          <h3>Enrollment officer</h3>
          <p> LASVENTUERES GLOBAL LIMITED, JOS, PLATEAU | MARCH 2021 -APRIL 2022 </p>
          <p>Sales and distribution of coca cola products.</p>
          Issuance of NIN slips and enrollments of new clients
        </li>
        
        {/* Add more experience items as needed */}
      </ul>
      
    </section>
  );
};

export default Experiences;
