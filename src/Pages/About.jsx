import { useState } from "react";
import skills from "../data/Skills";

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skillId) => {
    setSelectedSkill(selectedSkill === skillId ? null : skillId);
  };

  return (
    <div>
      <section className="about-section">
        <img
          src="./img/ik.jpg"
          alt="Juliany Rosenblad"
          className="about-image"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hallo mijn naam is Juliany Rosenblad. Ik ben 17 jaar oud en ik kom uit
            Rotterdam. Ik doe de opleiding MBO4 Software Development. Mijn hobby's
            zijn gamen en basketballen. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Iure,
          </p>
        </div>
      </section>

      <div className="skills-container">
        <h2>Mijn Vaardigheden</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`skill-item ${
                selectedSkill === skill.id ? "selected" : ""
              }`}
              onClick={() => handleSkillClick(skill.id)}
            >
              <h3>{skill.name}</h3>
              {selectedSkill === skill.id && (
                <p className="skill-description">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
