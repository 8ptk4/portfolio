import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./Projects.css";
import projectsData from "../../ProjectsData";
import skillsData from "../../SkillsData";

const Projects = () => {
  const [randProjToShow, setRandProjToShow] = useState(6);
  const [projects, setProjects] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const showMore = () => {
    setRandProjToShow(projectsData.length);
  };

  const showLess = () => {
    setRandProjToShow(6);
  };

  useEffect(() => {
    setProjects([]);
    projectsData.some((project) => {
      if (project.skills.some((item) => newArray.includes(item))) {
        setProjects((projects) => [...projects, project]);
      }
    });
  }, [newArray]);

  const getSkillIcon = (tech) => {
    return skillsData.map((skill) => {
      if (skill.skill === tech) {
        return (
          <FontAwesomeIcon
            icon={skill.icon}
            className="skill__icons-iconSmall"
          />
        );
      }
    });
  };

  const addSkill = (skill) => {
    setNewArray(newArray.filter((item) => item !== skill));
  };

  const removeSkill = (skill) => {
    setNewArray((newArray) => [...newArray, skill]);
  };

  const testtest = (skill) => {
    newArray.includes(skill) ? addSkill(skill) : removeSkill(skill);
  };

  const changeBackground = (background, index) => {
    const container = document.getElementsByClassName("card");

    container[index].style.backgroundImage = `url(${background})`;
  };

  return (
    <section id="anchor-projects">
      <h6>04.</h6>
      <h3>Projects</h3>

      {projectsData.map((featuredProj, i) => {
        if (featuredProj.featured) {
          return (
            <div key={i} className="container projects__container">
              <div className="projects__content">
                <div className="projects__content-title">
                  <h6>Featured Project</h6>
                  <h5>{featuredProj.title}</h5>
                </div>
                <div>
                  <p className="projects__content-desc">
                    {featuredProj.description}
                  </p>
                </div>
                <div className="project__content-icons">
                  <a href={featuredProj.gitHref}>
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      className="project__icons-icon"
                    />
                  </a>
                  <a href={featuredProj.codepenHref}>
                    <FontAwesomeIcon
                      icon={faCodepen}
                      className="project__icons-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="projects__content">
                <img src={featuredProj.url} />
                <div className="projects__content-skills">
                  {featuredProj.skills.map((tech) => {
                    return <>{getSkillIcon(tech)}</>;
                  })}
                </div>
              </div>
            </div>
          );
        }
      })}
      <div
        className="container projectsSort"
        style={{
          marginBottom: "20px",
        }}
      >
        {skillsData.map((skill, order) => (
          <div key={order} className="tooltipa">
            <button
              className="sortIcon"
              key={order}
              onClick={(event) => {
                event.currentTarget.classList.toggle("projectsSortActive");

                testtest(skill.skill);
              }}
            >
              {getSkillIcon(skill.skill)}
            </button>
            <span className="tooltiptext">{skill.skill}</span>
          </div>
        ))}
      </div>

      {projects.length === 0 ? (
        <h4 className="emptySkill">Toggle projects by icons above</h4>
      ) : null}
      <div className="container cards">
        {projects.slice(0, randProjToShow).map((project, proj) => (
          <div
            key={proj}
            className="card"
            style={{
              backgroundImage: `url(${project.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="projects__content-title project">
              <h6>Random Project</h6>
              <h5>{project.title}</h5>
              <div className="project__icons">
                <FontAwesomeIcon
                  icon={faGithubAlt}
                  className="project__icons-icon"
                />
                <FontAwesomeIcon
                  icon={faCodepen}
                  className="project__icons-icon"
                />
              </div>
              <div className="random__project__images">
                {project.images.map((image, i) => (
                  <div
                    key={i}
                    className="image"
                    style={{ backgroundImage: "url(" + image + ")" }}
                    onMouseOver={() => {
                      changeBackground(image, proj);
                    }}
                    onMouseOut={() => {
                      changeBackground(project.url, proj);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="projects__content-skill">
              {project.skills.map((tech, i) => {
                return (
                  <div key={i} className="project-skill-icon">
                    {newArray.includes(tech) ? (
                      <button className="skillBtnPill skillBtnPillActive">
                        {tech}
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="skillBtnPillActiveIcon"
                        />
                      </button>
                    ) : (
                      <button className="skillBtnPill">{tech}</button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {newArray.length > 5 && (
        <div className="toggle__grid">
          {randProjToShow === 6 ? (
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
      )}
    </section>
  );
};

export default Projects;
