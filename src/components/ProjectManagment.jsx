import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Manager_img from "../assets/img/png/project_manager_img.png";
const ProjectManagment = () => {
  return (
    <>
      <section className="overflow-hidden py-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={6} data-aos="fade-right">
              <div>
                <img className="w-100" src={Manager_img} alt="Manager_img" />
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="mt-4 text-center text-lg-start">
                <h2 className="ff-inter fs_large fw-semibold ">
                  <span className="ff_konexy fs-large fw-normal text_blue">
                    Agile WordPress
                  </span>{" "}
                  Development Project management
                </h2>
                <p className="fs_xsm ff_gilroy400 fw-normal text_opacity_7 mt-3">
                  Suspendisse consequat egestas arcu et et. Viverra quis euismod
                  neque luctus bibendum. Fringilla in nibh fringilla vulputate
                  in. Elit, ultricies vitae pulvinar arcu dignissim ac non
                  rutrum. Lacus tortor sollicitudin risus eget euismod in
                  bibendum turpis.{" "}
                </p>
                <button className="btn_explore border-0 text-white mt-4 fw-normal ff_gilroy600 fsxsm">
                  Explore
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectManagment;
