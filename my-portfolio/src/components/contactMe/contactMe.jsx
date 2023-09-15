import React from 'react';
import { useRef } from 'react';
import './contactMe.css';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
const ContactMe = () => {
   
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('(service_c2lr36', 'template_nywut4s', form.current, 'MXMlKFelli1kh1EPL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()

    }
  return (
<div className="container-2">
<form ref={form} onSubmit={sendEmail}>
     <div className="contact-box">
        <div className="left" data-Aos="fade-right">
          <h2>Contact Me</h2>
        
            <input type="text" className="field" placeholder="Your Name" />
            <input type="email" className="field" placeholder="Your Email" />
            <input type="tel" className="field" placeholder="Your Phone Number" />
            <textarea
            className="field"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <div className="submit-btn">
              <button type="submit" value="Submit" >Submit </button>
            </div>
        </div>
        <div className="right" data-Aos="fade-left">
          <img
            src="bg.jpg"
            alt="Contact"
            className="contact-image"
          />
        </div>
      </div>

     </form>

</div> 
   );
};

export default ContactMe;
