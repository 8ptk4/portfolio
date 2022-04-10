import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./Projects.css";
import projectsData from "../../ProjectsData";

const initFeaturedProject = (projs) => {
  return (
    <>
      {projs.map((project, i) => {
        return (
          <div key={i} className="container projects__container">
            <div className="projects__content">
              <div className="projects__content-title">
                <h6>Featured Project</h6>
                <h5>{project.title}</h5>
              </div>
              <div>
                <p className="projects__content-desc">
                  `{project.description}`
                </p>
              </div>
              <div className="project__content-icons">
                <a href={project.gitHref}>
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    className="project__icons-icon"
                  />
                </a>
                <a href={project.codepenHref}>
                  <FontAwesomeIcon
                    icon={faCodepen}
                    className="project__icons-icon"
                  />
                </a>
              </div>
            </div>
            <div className="projects__content">
              <img src={project.imgUrl} />
              <div className="projects__content-skills">
                {project.tech.map((tech, i) => (
                  <span key={i}>
                    <FontAwesomeIcon
                      icon={faCompressArrowsAlt}
                      style={{
                        fontSize: ".4rem",
                        paddingRight: "5px",
                      }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Projects = () => {
  const [featuredProj, setFeaturedProj] = useState([]);
  const [randProjToShow, setRandProjToShow] = useState(6);
  const [backgrund] = useState(
    "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg"
  );
  useEffect(() => {
    setFeaturedProj([
      {
        title: "Spotify",
        description:
          "minim sint nostrud laborum adipisicing fugiat sunt sunt. Ex commodo ut Lorem id nisi mollit. In veniam sunt deserunt minim labore. Culpa sint elit sit duis cillum.",
        gitUrl: "#",
        codepenUrl: "#",
        imgUrl:
          "https://lirp.cdn-website.com/1642b823/dms3rep/multi/opt/homepage-960w.JPG",
        tech: ["ReactJS", "TypeScript", "Python", "Node"],
      },
      {
        title: "LinkedIn",
        description:
          "minim sint nostrud laborum adipisicing fugiat sunt sunt. Ex commodo ut Lorem id nisi mollit. In veniam sunt deserunt minim labore. Culpa sint elit sit duis cillum.",
        gitUrl: "#",
        codepenUrl: "#",
        imgUrl:
          "https://lirp.cdn-website.com/1642b823/dms3rep/multi/opt/homepage-960w.JPG",
        tech: ["VueJs", "JavaScript", "SASS", "Angular"],
      },
    ]);
  }, []);

  const showMore = () => {
    setRandProjToShow(projectsData.length);
  };

  const showLess = () => {
    setRandProjToShow(6);
  };

  const changeBackground = (background, index) => {
    console.log(background, index);
    const container = document.getElementsByClassName("card");

    container[index].style.backgroundImage = `url(${background})`;
  };

  return (
    <section id="anchor-projects">
      <h6>04.</h6>
      <h3>Projects</h3>

      {initFeaturedProject(featuredProj)}

      <div className="container cards">
        {projectsData.slice(0, randProjToShow).map((project, proj) => (
          <div
            key={proj}
            className="card"
            style={{
              backgroundImage: `url(${backgrund})`,
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
                      changeBackground(project.images[0], proj);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
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
    </section>
  );
};

export default Projects;
