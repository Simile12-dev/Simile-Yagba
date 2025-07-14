import { FaCss3Alt, FaFigma, FaGit, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa6';
import '../styles/Skill.css';
import { DiMongodb } from 'react-icons/di';
import { RiTailwindCssLine } from 'react-icons/ri';

const Skills = () => {
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



//   { name: 'HTML 5', icon: 'fi fi-brands-html5', level: 100 },
//   { name: 'CSS', icon: 'fi fi-brands-css3-alt', level: 90 },
//   { name: 'JavaScript', icon: 'fi fi-brands-js', level: 85 },
//   { name: 'React', icon: 'fi fi-brands-react', level: 85 },
//   { name: 'Node.js', icon: 'fi fi-brands-node-js', level: 20 },
//   { name: 'Tailwind CSS', icon: 'fi fi-brands-tailwindcss', level: 90 },
//   { name: 'MongoDB', icon: 'fi fi-brands-mongodb', level: 50 },
//   { name: 'Git', icon: 'fi fi-brands-git', level: 85 },
//   { name: 'Figma', icon: 'fi fi-brands-figma', level: 85 }
// ]



  const professionalSkills = [
    { name: 'Communication', level: 95 },
    { name: 'Teamwork', level: 90 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Creativity', level: 85 },
    { name: 'Project Management', level: 85 },
    { name: 'Time Management', level: 90 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">
                    {<Icon/>}
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="progress-text">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                )
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
                      className="prof-progress" 
                      style={{ width: `${skill.level}%` }}
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