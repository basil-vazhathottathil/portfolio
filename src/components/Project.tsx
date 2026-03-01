import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><h2>AutoVitals – AI Vehicle Repair Assistant</h2></a>
                <p>Developed a full-stack AI-assisted vehicle diagnostics platform. Built backend services using FastAPI for OBD data processing and analysis. Designed React frontend for real-time vehicle health visualization. Integrated AI models for repair recommendations and maintenance alerts.</p>
            </div>
            <div className="project">
                <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><h2>Celere Bird – AI SaaS Email Client</h2></a>
                <p>Built AI-powered email summarization and productivity features. Designed REST APIs and frontend interfaces using React. Focused on usability and performance optimization.</p>
            </div>
            <div className="project">
                <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><h2>Profanity Checker API</h2></a>
                <p>Created a profanity detection service using Hono.js. Implemented regex-based filtering for Malayalam and Manglish text. Exposed endpoints for external application integration.</p>
            </div>
            <div className="project">
                <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><h2>LinkedIn Analyzer</h2></a>
                <p>Developed an AI-based API to summarize LinkedIn profiles and evaluate candidate suitability. Implemented Python backend and prompt-based AI processing.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;