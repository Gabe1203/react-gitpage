import React from 'react';
import profilePic from '../images/profile-pic.jpg'
// import "materialize-css/dist/css/materialize.min.css";

const AboutPage = () => (
    <section id="about">  
      <div  className="row section-intro">
        <div  className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div  className="intro-info">
            <img src={profilePic} alt="Profile Pic"/>
            <p  className="lead">Hello there! I'm a software engineer looking to explore the world and work on cool software.</p>
          </div>   			
        </div>   		
      </div>  
      <div  className="row about-content">
        <div  className="col-six tab-full">
          <h3>Profile</h3>
          <p>My Resume at a glimpse...</p>
          <ul  className="info-list">
            <li>
              <strong>Fullname:</strong>
              <span>Gabriel Valladares</span>
            </li>
            <li>
              <strong>Birth Date:</strong>
              <span>December 3rd, 1996</span>
            </li>
            <li>
              <strong>Job:</strong>
              <span>Software Engineer, Capital One</span>
            </li>
            <li>
              <strong>Website:</strong>
              <span>fill me</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span>gabrielvalladares1@gmail.com</span>
            </li>
          </ul>  
        </div>
        <div  className="col-six tab-full">
          <h3>Skills</h3>
          <p>Here are some of my skills...</p>
          <ul  className="skill-bars">
            <li>
              <div  className="progress percent15"><span>15%</span></div>
              <strong>HTML5</strong>
            </li>
            <li>
              <div  className="progress percent15"><span>15%</span></div>
              <strong>CSS3</strong>
            </li>
            <li>
              <div  className="progress percent90"><span>90%</span></div>
              <strong>Go</strong>
            </li>
            <li>
              <div  className="progress percent55"><span>55%</span></div>
              <strong>JavaScript</strong>
            </li>
            <li>

              <div  className="progress percent75"><span>75%</span></div>
              <strong>Java</strong>
            </li>
          </ul>  		
        </div>
      </div>
      <div  className="row button-section">
        <div  className="col-twelve">
          <a href="#contact" title="Hire Me"  className="waves-effect grey darken-1 btn-small">Hire Me</a>
          <a href="#" title="Download CV"  className="waves-effect grey darken-1 btn-small">Download CV</a>
        </div>   		
      </div>
    </section>
);

export default AboutPage