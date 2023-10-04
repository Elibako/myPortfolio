import {useEffect, useState } from 'react'
import './header.css'
import { BsTwitter, BsInstagram,BsLinkedin, BsGithub} from "react-icons/bs"
// import { scrollToSection } from '../../../scroll/scrollToSection'


const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  const toggleNav = () => {
    setNavActive(!navActive);
  };

  // const handleNavLinkClick = (sectionId) => {
  //   scrollToSection(sectionId);
  // };

  return (
    <div className="App">
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo"><p></p></div>
      <ul className={`nav-links ${navActive ? 'active' : ''}`}>
        <li><a onClick={() => handleNavLinkClick('Body')} href='#Body'>Home</a></li>
        <li> <a onClick={() => handleNavLinkClick('ServiceSection')} href='#ServiceSection'>About</a></li>
        <li> <a onClick={() => handleNavLinkClick('Works')} href='#myWorks'>Portfolio</a></li>
        <li><a onClick={() => handleNavLinkClick('contactMe')} href='#contactMe'>Contact</a></li>
        
        {/* <li>Lets connect</li>
        <li><a href=""><BsGithub/></a></li>
        <li><a href=""><BsLinkedin/></a></li>
        <li><a href=""><BsTwitter/></a></li>
        <li><a href=""><BsInstagram/></a></li> */}
      </ul>
      <div className="burger" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
    
  </div>
  )
}

export default Header
