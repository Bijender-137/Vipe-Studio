import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Solution_1 from "../assets/img/svg/solution_img.svg";
import Solution_2 from "../assets/img/svg/solution_img_2.svg";
import Solution_3 from "../assets/img/svg/solution_img_3.svg";
const Integer = () => {
  return (
    <>
      <section className="py-5 overflow-hidden ">
        <Container>
          <div className="text-center text-xl-start pt-md-3" data-aos="fade-down">
            <h2 className="ff_konexy  fw-normal fs_large ">
              Integer et nisl non
            </h2>
          </div>
          <Row className="mt-4   justify-content-center">
            <Col md={6} xl={4} className="mt-3" data-aos="fade-right">
              <div className="text-center box_shadow py-5 px-4 h-100">
                <img src={Solution_1} alt="Solution_1" />
                <p className=" ff_inter fw-semibold fs_medium mt-4">
                  Enterprise WordPress Solutions{" "}
                </p>
                <p className="ff_gilroy400 fw-normal fs_xsm">
                  Pretium, a et sapien non nunc libero. Id dolor sed quis
                  convallis turpis purus feugiat nibh eu. Auctor cras hac ac,
                  sociis diam montes, turpis commodo elit.
                </p>
                <a href="#" className="fw-semibold ff_gilroy600 fs_xsm learn_more_clr btn_clr">Learn More</a>
              </div>
            </Col>
            <Col md={6} xl={4} className="mt-3" data-aos="fade-up">
              <div className="text-center box_shadow py-5 px-4 h-100">
                <img src={Solution_2} alt="Solution_2" />
                <p className=" ff_inter fw-semibold fs_medium mt-4">
                Small to Mid Size Business Development		
                </p>
                <p className="ff_gilroy400 fw-normal fs_xsm">
                Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque, cursus.
                </p>
                <a href="#" className="fw-semibold ff_gilroy600 fs_xsm learn_more_clr btn_clr">Learn More</a>
              </div>
            </Col>
            <Col md={6} xl={4} className="mt-3" data-aos="fade-left">
              <div className="text-center box_shadow py-5 px-4 h-100">
                <img src={Solution_3} alt="Solution_3" />
                <p className=" ff_inter fw-semibold fs_medium mt-4">
                Support & Maintenance	
                </p>
                <p className="ff_gilroy400 fw-normal fs_xsm">
                Ac donec ipsum fringilla tortor, consectetur etiam sociis amet quis. Viverra volutpat pretium non in fusce tellus sed urna. Pharetra ullamcorper et donec aliquam.
                </p>
                <a href="#" className="fw-semibold ff_gilroy600 fs_xsm learn_more_clr btn_clr">Learn More</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Integer;
