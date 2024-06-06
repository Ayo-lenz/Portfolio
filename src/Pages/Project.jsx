import { projectsData } from "../Components/Constants";

export const Project = () => {
  return (
    <div>
      <h3 className="projects_set">Projects</h3>
      <div>
        {projectsData.map((projects) => {
          return(
            <div className="project_img">
              <img src="" alt="" />
            </div>
          )
        })}
      </div>
    </div>
  );
}