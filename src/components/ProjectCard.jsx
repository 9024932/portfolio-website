import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ProjectCard = ({id, title, description, image, onClick }) => {
    const [selectedproject, setSelectedproject] = useState(null);

 const handleClick = (id) => {
    const project = projects.find((p) => p.id === id);
    setSelectedProject(project);
  };

    return ( 
            <section  className="book-container">
    <h2>{title}</h2>
      <img
      key={id}
        src={image}
        alt={title}
        onClick={onClick}   
        style={{ cursor: "pointer" }}
      />
      <h3>{description}</h3>
    </section>
    );
}
 
export default ProjectCard;