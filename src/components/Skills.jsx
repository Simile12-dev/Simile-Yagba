import React, { useEffect, useRef, useState } from 'react'; // Import useEffect, useRef, and useState
import { FaCss3Alt, FaFigma, FaGit, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa6';
import '../styles/Skill.css';
import { DiMongodb } from 'react-icons/di';
import { RiTailwindCssLine } from 'react-icons/ri';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false); // New state to control animation
  const skillsRef = useRef(null); // Ref to observe the section

  const technicalSkills = [
    { name: 'HTML 5', icon: FaHtml5, level: 100 },
    { name: 'CSS', icon: FaCss3Alt, level: 90 },
    { name: 'JavaScript', icon: FaJs, level: 85 },
    { name: 'React', icon: FaReact, level: 85 },
    { name: 'Node.js', icon: FaNodeJs, level: 20 },
    { name: 'Tailwind CSS', icon: RiTailwindCssLine, level: 90 },
    { name: 'MongoDB', icon: DiMongodb, level: 50 },
    { name: 'Git', icon: FaGit, level: 85 },
    { name: 'Figma', icon: FaFigma, level: 85 },
  ];

  const professionalSkills = [
    { name: 'Communication', level: 95 },
    { name: 'Teamwork', level: 90 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Creativity', level: 85 },
    { name: 'Project Management', level: 85 },
    { name: 'Time Management', level: 90 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateSkills(true);
            observer.unobserve(entry.target); // Stop observing once in view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []); // Run only once on component mount

  return (
    <section id="skills" className="skills" ref={skillsRef}> {/* Attach ref here */}
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div className="skill-item" key={index}>
                    <div className="skill-icon">
                      {<Icon/>}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="progress-bar">
                        <div 
                          className={`progress ${animateSkills ? 'animate' : ''}`} // Conditionally add 'animate' class
                          style={{ width: animateSkills ? `${skill.level}%` : '0%' }} // Animate from 0%
                        >
                          <span className="progress-text">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="professional-skills">
            <h3>Professional Skills</h3>
            <div className="prof-skills-container">
              {professionalSkills.map((skill, index) => (
                <div className="prof-skill-item" key={index}>
                  <div className="prof-skill-info">
                    <h4>{skill.name}</h4>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="prof-progress-bar">
                    <div 
                      className={`prof-progress ${animateSkills ? 'animate' : ''}`} // Conditionally add 'animate' class
                      style={{ width: animateSkills ? `${skill.level}%` : '0%' }} // Animate from 0%
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;