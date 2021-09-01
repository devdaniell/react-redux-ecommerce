import React from "react";
import logo from "../../assets/logo-dark.png";
import devPic from "../../assets/fred2.png";
import { Modal } from "react-bootstrap";

const AboutDeveloper = (props) => {
  const closeAboutModal = () => {
    props.unDisplayAboutModal(false);
  };
  return (
    <Modal size="md" show={props.showAbout} onHide={closeAboutModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={logo} alt="..." style={{ width: "33%" }} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ padding: "2rem 4rem" }}>
        <div style={{ fontFamily: "Karla,sans-serif" }}>
          <div className="d-flex justify-content-center">
            <img src={devPic} alt="..." className="w-50 rounded-circle" />
          </div>
          <div>
            <h4 className="mt-3 mb-0 font-weight-bold text-center">
             TEAM DANIEL...
            </h4>
            <div className="d-flex justify-content-center">
              <small className="text-secondary">Developers</small>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <a
                className="btn btn-outline-github rounded-circle px-2 pt-2 mr-2"
                style={{ width: "2.5rem", height: "2.5rem" }}
                href="https://github.com/Frederick-88"
                target="blank"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="btn btn-outline-primary rounded-circle px-2 pt-2 mr-2"
                style={{ width: "2.5rem", height: "2.5rem" }}
                href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
                target="blank"
              >
                <i className="fab fa-linkedin" />
              </a>

              <button
                className="btn btn-outline-danger rounded-circle p-2"
                style={{ width: "2.5rem", height: "2.5rem", cursor: "default" }}
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Frederick@fdtech.asia"
              >
                <i className="far fa-envelope" />
              </button>
            </div>
          </div>
          <p className="mt-3 text-justify text-secondary">
               We are team 2
            <br />
            <br />
           lorem ipsum something dummy text
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default AboutDeveloper;
