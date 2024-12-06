import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
      <a href="mailto:ahmedaissa575@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://github.com/AHMEDDAISSA" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ahmed-aissa-ba7b75293/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/AHMEDDAISSA" target="_blank" rel="noreferrer">Ahmed Aissa</a> with 💜</p>
    </footer>
  );
}

export default Footer;