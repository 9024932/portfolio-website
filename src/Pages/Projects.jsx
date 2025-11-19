import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projectData from "../Data/ProjectData";

const Project = () => {
    const navigate = useNavigate();
    return (
        <section>
            <h2>Mijn Projecten</h2>
            <div className="project-div">
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        onClick={() => navigate(`/project/${project.id}`)}
                        />
                ))}
            </div>
        </section>
    );
};

export default Project;