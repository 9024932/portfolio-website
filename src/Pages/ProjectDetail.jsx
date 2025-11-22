import { useParams, useNavigate } from "react-router-dom";
import projectData from "../Data/ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const project = projectData.find(p => p.id === Number(id));


  if (!project) return <h2>Project niet gevonden</h2>;

  return (
    <div> 

      <button className="button-detail"  onClick={() => navigate(-1)}>Terug naar projecten</button>
      <h1 className="project-h1">{project.title}</h1>
      <p className="project-description" >{project.description}</p>
      <img className="project-img" src={project.image1} alt={project.title} />
    </div>
  );
};

export default ProjectDetail;
