import { useParams, useNavigate } from "react-router-dom";
import projectData from "../Data/ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const project = projectData.find(p => p.id === Number(id));


  if (!project) return <h2>Project niet gevonden</h2>;

  return (
    <div>

      <button onClick={() => navigate(-1)}>Terug naar projecten</button>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
};

export default ProjectDetail;
