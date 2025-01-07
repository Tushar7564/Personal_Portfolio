import { Row, Col, Container } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import footerIcon1 from "../assets/img/nav-icon1.svg";
import footerIcon2 from "../assets/img/nav-icon2.svg";
import footerIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col className="text-center text-sm-end" sm={6}>
            <div className="social-icon">
              <a
                href="https://in.linkedin.com/in/tushar-4962891ba"
                target="_blank"
              >
                <img src={footerIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/share/1MLydmXE2o/?mibextid=wwXIfr" target="_blank">
                <img src={footerIcon2} alt="FaceBook" />
              </a>
              <a href="https://www.instagram.com/_tusharsinghal_03?igsh=N3RoeGU3MWxnbmJ5&utm_source=qr" target="_blank">
                <img src={footerIcon3} alt="Instagram" />
              </a>
              <p>CopyRight 2025. All Right Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
