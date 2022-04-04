import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./Projects.css";

const initFeaturedProject = (projs) => {
  return(
    <>
      { projs.map((x) => {
        return(
          <div className="container projects__container">
            <div className="projects__content">
              <div className="projects__content-title">
                <h7>Featured Project</h7>
                <h5>{x.title}</h5>
              </div>
              <div>
                <p className="projects__content-desc">
                  {x.description}
                </p>
              </div>
              <div className="project__content-icons">
                <a href={x.gitHref}>
                  <FontAwesomeIcon icon={faGithubAlt} className="project__icons-icon"/>
                </a>
                <a href={x.codepenHref}>
                  <FontAwesomeIcon icon={faCodepen} className="project__icons-icon"/>
                </a>
              </div>
            </div>
            <div className="projects__content">
              <img src={x.imgUrl} />
              <div className="projects__content-skills">
                { x.tech.map(x => (<span><FontAwesomeIcon icon={faCompressArrowsAlt} style={{fontSize: ".4rem", paddingRight: "5px"}} />{x}</span>))}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

const Projects = () => {
  const [featuredProj, setFeaturedProj] = useState([]);
  const [randProjToShow, setRandProjToShow] = useState(6);
  const [backgrund, setBackgrund] = useState("https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg");
  
  useEffect(() => {
    setFeaturedProj([
      {
        title: "Spotify", 
        description: "minim sint nostrud laborum adipisicing fugiat sunt sunt. Ex commodo ut Lorem id nisi mollit. In veniam sunt deserunt minim labore. Culpa sint elit sit duis cillum.",
        gitUrl: "#",
        codepenUrl: "#",
        imgUrl: "https://lirp.cdn-website.com/1642b823/dms3rep/multi/opt/homepage-960w.JPG",
        tech: ["ReactJS", "TypeScript", "Python", "Node"]
      },
      {
        title: "LinkedIn", 
        description: "minim sint nostrud laborum adipisicing fugiat sunt sunt. Ex commodo ut Lorem id nisi mollit. In veniam sunt deserunt minim labore. Culpa sint elit sit duis cillum.",
        gitUrl: "#",
        codepenUrl: "#",
        imgUrl: "https://lirp.cdn-website.com/1642b823/dms3rep/multi/opt/homepage-960w.JPG",
        tech: ["VueJs", "JavaScript", "SASS", "Angular"]
      }
    ])
  }, [])

  const allRandomProj = [
    {
      title: "Spotify",
      url:"https://i.redd.it/7ppvb8uyrjj61.jpg",
      images: [
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg",
        "data:image/jpeg;base64,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"
      ]
    },

    {
      title: "LinkedIN",
      url:"https://i.redd.it/7ppvb8uyrjj61.jpg",
      images: [
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg",
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg"
      ]
    },
    {
      title: "Facebook",
      url:"https://i.redd.it/7ppvb8uyrjj61.jpg",
      images: [
        "https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
      ]
    },
    {
      title: "Spotify",
      url:"https://i.redd.it/7ppvb8uyrjj61.jpg",
      images: [
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg",
        "data:image/jpeg;base64,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"
      ]
    },

    {
      title: "LinkedIN",
      url:"https://i.redd.it/7ppvb8uyrjj61.jpg",
      images: [
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg",
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg"
      ]
    },
    {
      title: "Facebook",
      url:"https://i.redd.it/7ppvb8uyrjj61.jpg",
      images: [
        "https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
      ]
    },
    {
      title: "hej",
      url:"https://i.redd.it/7ppvb8uyrjj61.jpg",
      images: [
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg",
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg"
      ]
    },
    {
      title: "putte",
      url:"https://i.redd.it/7ppvb8uyrjj61.jpg",
      images: [
        "https://media.idownloadblog.com/wp-content/uploads/2018/08/iPhone-XS-marketing-wallpaper.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8dUFQjsGAiCDaOneO8Y26gw823_D1KoQyzt23sVZ1LBifAU7mMcUgbjZQ-vC4GeI8nE&usqp=CAU",
        "data:image/jpeg;base64,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",
        "https://i.pinimg.com/736x/eb/26/4d/eb264dec988456bf431db96c179299ae.jpg"
      ]
    },
  ];

  const showMore = () => {
    setRandProjToShow(allRandomProj.length);
  }

  const showLess = () => {
    setRandProjToShow(6)
  }

  const changeBackground = (background, index) => {
    const container = document.getElementsByClassName('card');

    container[index].style.backgroundImage = `url(${background})`;
  }

  return (
    <section id="anchor-projects">
      <h6>04.</h6>
      <h3>Projects</h3>

      { initFeaturedProject(featuredProj) }

      <div className="container cards">
        { allRandomProj.slice(0, randProjToShow).map((hej, index) =>
            <div className="card" style={{
              backgroundImage: "url(" + backgrund + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
              <div className="projects__content-title project" >
                <h7>Random Project</h7>
                <h5>{hej.title}</h5>
                <div className="project__icons">
                  <FontAwesomeIcon icon={faGithubAlt} className="project__icons-icon"/>
                  <FontAwesomeIcon icon={faCodepen} className="project__icons-icon"/>
                </div>
                <div className="random__project__images">
                  { hej.images.map(x => (
                    <div
                      className="image"
                      style={{ backgroundImage: "url(" + x + ")" }}
                      onMouseOver={() => { changeBackground(x, index); }}
                      onMouseOut={() => { changeBackground(hej.images[0], index); }}
                    />
                  )) }
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div className="toggle__grid">
        {(randProjToShow === 6) ?
          <p className="toggle__grid-expand" onClick={showMore}>
            Show More
            <ExpandMoreIcon />
          </p>
          : 
          <p className="toggle__grid-expand" onClick={showLess}>
            <ExpandLessIcon />
            Show Less 
          </p>
      }
      </div>
    </section>
  )
}

export default Projects