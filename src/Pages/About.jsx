import { useState } from 'react';
import skills from '../data/skills';
const About = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skillId) => {
        setSelectedSkill(selectedSkill === skillId ? null : skillId);
    };
    return ( 
    
    <div>
        <h3>Hallo mijn naam is Juliany Rosenblad.</h3>
        <p>
           ik ben 17 jaar oud en ik kom uit Rotterdam
            ik doe de opleiding mbo4 software development
            mijn hobbies zijn Gamen ik werkte bij de plus als vakkenvuller
            na dat ik klaar ben met deze opleiding wil ik misschien verder studeren zodat ik een Game Developer kan worden 
        </p>
                <div className="skills-container">
            <h2>Mijn Vaardigheden</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div 
                        key={skill.id}
                        className={`skill-item ${selectedSkill === skill.id ? 'selected' : ''}`}
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
}
 
export default About;