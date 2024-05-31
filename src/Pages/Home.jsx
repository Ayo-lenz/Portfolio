import { Container, Row, Col } from "react-bootstrap";
import profile_img from '../Image/profile_image.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <section className="home-container mx-5">
      <Container className="m-5">
        <Row>
          <Col lg={6} data-aos="fade-down" data-aos-duration="5000">
            <h2 className="my-5">FRONT-END DEVELOPER</h2>
            <div>
              <h1>
                <span className="name pe-3">Oluwasegun</span>
                <span>Ayodeji</span>
              </h1>
            </div>
            <p className="fs-5 w-50 ps-5 my-5 about">
              I'm a driven Front-end Developer from Lagos, Nigeria, with a knack
              for problem solving
            </p>
          </Col>
          <Col
            lg={5}
            data-aos="zoom-in-down"
            data-aos-duration="5000"
            data-aos-easing="ease-in-out-cubic"
          >
            <img src={profile_img} alt="" className="profile_img" />
          </Col>
          <Col lg={1} data-aos="zoom-in-left" data-aos-duration="5000">
            <div className="d-lg-grid socials">
              <a href="" className="text-info fs-1 pe-4">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a href="" className="text-info fs-1 pe-4">
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a href="" className="text-info fs-1 pe-4">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

              <a href="" className="text-info fs-1">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Home;
