import { skillCategories } from "../Components/Constants"




export const Skills = () => {
  

  return (
    <div>
      <h3 className="text-center p-3 skill_set">Skills</h3>
      <div className="skill_container mx-5">
        {skillCategories.map((category) => {
          return (
            <div className="skill_content my-5 mx-4">
              <div className="d-flex mb-4 pt-2">
                <img src={category.icon} alt="" className="skill_img" />
                <h4>{category.title}</h4>
              </div>

              {category.skills.map((skill) => {
                return (
                  <div>
                    <ul>
                      <li className=" d-flex">
                        <img
                          src={skill.icon}
                          alt=""
                          className="skill_img pe-3"
                        />
                        <div>{skill.label}</div>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}