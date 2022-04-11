import React, { useState } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import skillsData from "../../SkillsData";
import projectsData from "../../ProjectsData";

const Skills = () => {
  const [skillsToShow, setSkillsToShow] = useState(5);

  const showMore = () => {
    setSkillsToShow(skillsData.length);
  };

  const showLess = () => {
    setSkillsToShow(5);
  };

  return (
    <section id="anchor-skills">
      <h6>03.</h6>
      <h3>Skills</h3>

      <div className="container skill-cards">
        {skillsData.slice(0, skillsToShow).map((skill, i) => (
          <div key={i} className="skill-card">
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
                {projectsData.forEach((project) => {
                  if (project.skills.includes(skill.skill)) {
                    console.log(skill + "includes " + skill.skill);
                  }
                })}

        {/* {Array.isArray(obj.applicants) && obj.applicants.map(obj2 =>
           <div className="events">{obj2.person.name}</div>
        )} */}
              </div>
            </div>
            <div className="skill-icons">
              <FontAwesomeIcon
                icon={skill.icon}
                className="skill__icons-icon"
              />
            </div>
            <div className="skillbar" style={{ height: skill.level }}>
              <div className="image" />
              <span className="skill-level">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
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
