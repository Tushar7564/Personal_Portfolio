import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  keyFeatures,
  projectLink,
}) => {
  return (
    <Col sm={6} md={4} className="m-auto">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          {keyFeatures && keyFeatures.length > 0 && (
            <ul>
              {keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
