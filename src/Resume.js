import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1 className="resume-name">Soumay Chugh</h1>
        <p className="resume-contact">
          <a href="tel:+918178293318">+91 81782 93318</a> | <a href="mailto:s.chugh.dev@gmail.com">s.chugh.dev@gmail.com</a> | Delhi, India
        </p>
        <p className="resume-links">
          <a href="https://linkedin.com/in/soumay-chugh-77556214b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/SoumayLightRay" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </header>

      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          Motivated and skilled software engineer with expertise in C++, HTML, CSS, and JavaScript, seeking a challenging role to utilize my knowledge and skills in a dynamic organization. Currently pursuing courses in web development, digital marketing, and Python programming. Committed to continuous improvement through exploring new technologies and reading extensively.
        </p>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div>
          <h3>Guru Gobind Singh Indraprastha University</h3>
          <p>MCA, Computer Science | GPA: 8.4 | Aug 2022 - Aug 2024</p>
          <p>BCA, Computer Science | GPA: 8.8 | Jul 2019 - Jul 2022</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <div>
          <p><strong>HTML, CSS, and JavaScript for Web Developers</strong></p>
          <p>Johns Hopkins University | Issued May 2024 | Credential ID: 2FRZLL7BEHKK</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Professional Experience</h2>
        <div>
          <h3>Alta Cura Technologies, Delhi, India</h3>
          <p>Software Engineer Intern | Feb 2024 - Aug 2024</p>
          <ul className="resume-list">
            <li>Spearheaded the automation of financial reporting processes using Python, cutting report generation time by 50%.</li>
            <li>Enhanced data validation systems, improving the accuracy and reliability of reports.</li>
            <li>Streamlined accounting operations, boosting productivity.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <p>Git, HTML/CSS, Java, Business Analytics, Python, JavaScript, C/C++, AWS, Sales, Project Management, Artificial Intelligence (AI), Generative AI, Machine Learning, DBMS, Operating Systems, DevOps, Digital Marketing</p>
      </section>
    </div>
  );
};

export default Resume;
