import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import '../assets/styles/Main.scss'; 
import profileImage from '../assets/images/me2.jpeg'; 

function Main() {
  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          
          <img src={profileImage} alt="Avatar" className="cir" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/ahmed-aissa-ba7b75293/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/AHMEDDAISSA" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="mailto:ahmedaissa575@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>

          </div>
          <h1>Ahmed Aissa</h1>
          <p>Full Stack Development & Multimedia Enthusiast</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/AHMEDDAISSA" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-aissa-ba7b75293/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
              
              <a href="mailto:ahmedaissa575@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>

              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
