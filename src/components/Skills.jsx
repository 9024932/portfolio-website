import { useState } from 'react';
import skills from '../Data/Skills';

const Skills = () => {
  const [selectedSkillId, setSelectedSkillId] = useState(null);

  const handleSkillClick = (id) => {
    setSelectedSkillId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="skills-container">
      <h2>Mijn Vaardigheden</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`skill-item ${selectedSkillId === skill.id ? 'selected' : ''}`}
            onClick={() => handleSkillClick(skill.id)}
          >
            <h3>{skill.name}</h3>
            {selectedSkillId === skill.id && (
              <p className="skill-description">{skill.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
