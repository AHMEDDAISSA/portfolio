import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
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
const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Laravel",
    "Symfony",
    "Python",
    "SQL",
   
];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experience</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Software Development Intern</h3>
                    <p>During my Software Development Internship at SYNC (June 2024 - August 2024) in Taboulba, Tunisia, I worked on diverse web development projects. My contributions included developing and maintaining dynamic front-end interfaces using React and Angular, building and optimizing back-end systems with the Laravel PHP framework, and integrating APIs to enhance application functionality. I also designed and implemented e-commerce platforms using PrestaShop and Shopify, including a home appliance store, and created a WordPress-based website for a makeup store, focusing on UX/UI enhancements and responsive design..</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
}

export default Expertise;