import React, { useState } from "react";
import "./Skills.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import skillsData from "../../SkillsData";
// import projectsData from "../../ProjectsData";

const Skills = () => {
  const [skillsToShow, setSkillsToShow] = useState(5);
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   const sortedSkills = skillsData.sort((a, b) =>
  //     b.level.localeCompare(a.level)
  //   );

  //   setSkills(sortedSkills);
  // }, []);

  const showMore = () => {
    setSkillsToShow(skillsData.length);
  };

  const showLess = () => {
    setSkillsToShow(5);
  };

  // const getAmountOfProjects = (skill) => {
  //   let amount = 0;
  //   projectsData.map((project) => {
  //     if (project.skills.includes(skill)) {
  //       amount++;
  //     }
  //   });
  //   return amount;
  // };

  // const getProject = (skill) => {
  //   projectsData.map((project) => {
  //     if (project.skills.includes(skill)) {
  //       console.log(project);
  //     }
  //   });
  // };

  return (
    <section id="anchor-skills">
      <h6>03.</h6>
      <h3>Skills</h3>

      {/* <div className="container skill-cards">
        {skills.slice(0, skillsToShow).map((skill, i) => (
          <div
            key={i}
            className="skill-card"
            onClick={() => {
              getProject(skill.skill);
            }}
          >
            <div className="projects__content-title skill">
              <h6>{skill.skill}</h6>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  height: "100%",
                }}
              >
                <span
                  style={{
                    padding: "10px",
                    background: "rgba(255, 255 , 255, .1)",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                    color: "var(--primaryColor)",
                  }}
                >
                  {getAmountOfProjects(skill.skill) + " "}
                  projects
                </span>
              </div>
            </div>
            <div className="skill-icons">
              <FontAwesomeIcon
                icon={skill.icon}
                className="skill__icons-icon"
              />
            </div>
            <div className="skillbar" style={{ height: skill.level }} />
            <span style={{ position: "absolute", top: 0, right: 10 }}>Pro</span>
            <span style={{ position: "absolute", bottom: 0, right: 10 }}>
              Nuub
            </span>
          </div>
        ))}
      </div> */}
      <div className="toggle__grid">
        {skillsToShow === 5 ? (
          <p className="toggle__grid-expand" onClick={showMore}>
            Show More
            <ExpandMoreIcon />
          </p>
        ) : (
          <p className="toggle__grid-expand" onClick={showLess}>
            <ExpandLessIcon />
            Show Less
          </p>
        )}
      </div>
    </section>
  );
};

export default Skills;
