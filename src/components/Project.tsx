import React from "react";
import mock01 from '../assets/images/mock01.png';
import flutt from '../assets/images/flutt.png';
import ges from '../assets/images/ges.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Submeowrine</h2>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div>
            <div className="project">
                <img src={flutt} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Quiz Application</h2>
                <p>Developed a lightweight quiz application using Flutter, featuring a user-friendly interface and interactive question-answer functionality.</p>
            </div>
            <div className="project">
                <img src={ges} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Commercial Management Website</h2>
                <p>Designed and developed a web application using Symfony to manage commercial operations. Features include inventory management, customer data handling, and sales tracking, offering a robust and scalable solution for businesses.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;