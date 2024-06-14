import { projectsData } from "../Components/Constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";

export const Project = () => {
  return (
    <div>
      <h3 className="projects_set text-center p-3">Projects</h3>
      <div className="project_container p-5 mx-5">
        {projectsData.map((project) => {
          return(
            <div
              key={project.id}
              className='bg-white rounded shadow-md p-4 project_content'
            >
              <img
                src={project.imageSrc}
                alt={project.name}
                className='w-100 h-50 rounded'
                decoding='async'
              />
              <h4 className='mt-2 '>
                {project.name}
              </h4>
              <p className='text-secondary'>{project.description}</p>

              <div className='d-flex justify-content-between'>
                <div>
                  <h5>Tech Stack:</h5>
                  {project.techStacks.map((tech) => {
                    return(
                      <ul className='text-secondary'>
                        <li className='lh-1'>{tech}</li>
                      </ul>
                    )
                  })}
                </div>
              
              
                <div className='mt-4'>
                  <h5>Links:</h5>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-decoration-none d-block color-none'
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-decoration-none'
                  >
                    <FontAwesomeIcon icon={faLifeRing} /> Live
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}