import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PerformanceCheck = () => {
  return (
    <>
      <section className="footer_bg_linier">
        <Container>
          <Row className="bg_linear_color align-items-center mt-md-5 mt-lg-0 mx-1 mx-sm-0">
            <Col md={6}>
              <div>
                <h2 className="fw-normal ff_konexy fs_large text-white">
                  Have you
                </h2>
                <p className="fw-semibold ff_gilroy600 fs_medium text-white">
                  read our study about Speed and Performance in WordPress?
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-md-end">
                <button className="fw-semibold ff_inter fs_xsm border-0 btn_checkout">
                  Check It Out
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PerformanceCheck;
