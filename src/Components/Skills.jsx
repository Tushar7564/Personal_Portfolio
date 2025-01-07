import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import imgMeter1 from '../assets/img/Progress80.svg';
import imgMeter2 from '../assets/img/Progress70.svg';
import imgMeter3 from '../assets/img/Progress60.svg';
import imgMeter4 from '../assets/img/Progress65.svg';
import imgMeter5 from '../assets/img/Progress75.svg';
import imgMeter6 from '../assets/img/Progress85.svg';
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>I bring a diverse set of skills gained through internships and projects, showcasing expertise in full-stack development, machine learning, and design.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={imgMeter1} alt="80%" />
                        <h5>Full-Stack Web Development</h5>
                    </div>
                    <div className="item">
                        <img src={imgMeter2} alt="70%" />
                        <h5>Machine Learning</h5>
                    </div>
                    <div className="item">
                        <img src={imgMeter3} alt="60%" />
                        <h5>UI/UX Design</h5>
                    </div>
                    <div className="item">
                        <img src={imgMeter4} alt="65%" />
                        <h5>Database Management</h5>
                    </div>
                    <div className="item">
                        <img src={imgMeter5} alt="75%" />
                        <h5>Version Control</h5>
                    </div>
                    <div className="item">
                        <img src={imgMeter6} alt="85%" />
                        <h5>Problem-Solving and Leadership</h5>
                    </div>
                </Carousel>
                <img className="background-image-left" src={colorSharp} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
