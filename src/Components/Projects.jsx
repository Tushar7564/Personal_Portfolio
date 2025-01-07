import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import collegeProjImg from "../assets/img/CollegeProject.png";
import certificateImg from "../assets/img/Certification.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const internshipProjects = [
    {
      title: "BEUMER Group Project",
      description:
        "Migrated a project to React.js and integrated MongoDB for seamless database operations.",
      keyFeatures: [
        "Modern and responsive UI using React.js.",
        "Backend built with MongoDB and C#.",
        "Streamlined collaboration across frontend and backend teams.",
      ],
      projectLink: "https://github.com/Tushar7564/BeumerProject.git",
      imgUrl: projImg1,
    },
    {
      title: "Stone Depot",
      description:
        "A web interface developed for managing a business using Dynamics 365 modules.",
      keyFeatures: [
        "Focus on responsive design.",
        "Integration with finance and supply chain functionalities.",
      ],
      projectLink:
        "https://github.com/Tushar7564/StoneDepot_Projects1_DynamicsSquare.git",
      imgUrl: projImg2,
    },
    {
      title: "Swarn Kala",
      description:
        "A project to create visually appealing and functional web applications.",
      keyFeatures: [
        "Emphasis on collaborative development.",
        "Frontend implemented with best practices for responsiveness and interactivity.",
      ],
      projectLink:
        "https://github.com/Tushar7564/SwarnKala_Projects2_DynamicsSquare.git",
      imgUrl: projImg3,
    },
  ];

  const collegeProjects = [
    {
      title: "Phishing Site Prediction",
      description:
        "Developed a machine learning model to predict phishing websites.",
      keyFeatures: [
        "Python and scikit-learn based model.",
        "Robust data preprocessing and feature extraction.",
        "Focused on cybersecurity challenges.",
      ],
      projectLink: "https://github.com/Tushar7564/PhishingSitePrediction.git",
      imgUrl: collegeProjImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Showcasing a diverse set of projects that highlight my
                    expertise in full-stack development, machine learning, and
                    responsive web design. From building scalable applications
                    with React.js and MongoDB to developing predictive models
                    for cybersecurity, each project demonstrates a commitment to
                    delivering innovative and impactful solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Internship Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">College Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Technical Certifications & Skills
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {internshipProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                keyFeatures={project.keyFeatures}
                                projectLink={project.projectLink}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {collegeProjects.map((project, index) => (
                            <Col key={index}>
                              <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                keyFeatures={project.keyFeatures}
                                projectLink={project.projectLink}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col md={12}>
                            <h4>Certifications</h4>
                            <ul>
                              <li>
                                "Zero to Hero Hands-on Mastery on HTML5 and
                                CSS3" from Udemy
                              </li>
                              <li>
                                "Introduction to Intellectual Property and
                                Patent Law" from Coursera
                              </li>
                              <li>
                                "Optimizing a Website for Google Search" from
                                Coursera
                              </li>
                            </ul>
                          </Col>
                          <Col md={12}>
                            <h4>Technical Skills</h4>
                            <p>
                              <strong>Languages:</strong> Python, HTML, CSS,
                              JavaScript, C++, Java (Basics).
                            </p>
                            <p>
                              <strong>Frameworks/Tools:</strong> React.js,
                              Node.js, Next.js, MongoDB, Express.js, Django.
                            </p>
                            <p>
                              <strong>Tools:</strong> Office 365, Adobe
                              Photoshop.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" />
    </section>
  );
};
