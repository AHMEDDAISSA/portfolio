import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa"; // FontAwesome icons
import { DiMongodb, DiMysql, DiGit, DiGithubBadge } from "react-icons/di"; // DevIcons
import { SiCplusplus } from "react-icons/si"; // SimpleIcons
import "../assets/styles/AboutMe.scss";
import { SiPhp } from 'react-icons/si';
import { SiC } from 'react-icons/si';
import { SiDart } from 'react-icons/si';
import { SiLaravel } from 'react-icons/si';
import { SiSymfony } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';

function AboutMe() {
  const isDarkMode = document.body.classList.contains("dark-mode");

  return (
    <div id="about-me" className={isDarkMode ? "dark-mode" : "dark-mode"}>
      <div className="about-me-container">
        <h1>
          Know Who <span className="highlight">I Am</span>
        </h1>
        <p>
          Hi Everyone, I am <span className="highlight">Ahmed Aissa</span> from{" "}
          <span className="highlight">Tunisia</span>.
        </p>
        <p>
          I am currently in the final year of my license in Computer Science at
          Mahdia Higher Institute of Computer Science (ISIMA).
        </p>
        <p>Apart from coding, some other activities that I love to do include:</p>
        <ul>
          <li>📖 Reading</li>
          <li>🤝 Participation in voluntary work</li>
          <li>✈️ Travelling</li>
        </ul>
        <blockquote>
          <i>
            "To get something you never had, you have to do something you never
            did"
          </i>
          <br />— The best inspirational quote for me.
        </blockquote>

        {/* Add Skillset Icons */}
        <h2>Professional <span className="highlight">Skillset</span></h2>
        <div className="icon-grid">
          
          <div><FaHtml5 size={50} title="HTML5" /></div>
          <div><FaCss3Alt size={50} title="CSS3" /></div>
          <div><SiPhp size={50} title="PHP" /></div>
          <div><FaReact size={50} title="React.js" /></div>
          <div><SiC size={50} title="C" /></div>
          <div><SiLaravel size={50} title="Laravel" /></div>
          <div><SiSymfony size={50} title="Symfony" /></div>
          <div><SiFlutter size={50} title="Flutter" /></div>
          <div><FaPython size={50} title="Python" /></div>
          <div><SiDart size={50} title="Dart" /></div>
          <div><FaJava size={50} title="Java" /></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
