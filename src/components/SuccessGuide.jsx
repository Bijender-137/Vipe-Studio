import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cartoon_Img from "../assets/img/png/cartoon_img.png";
import Vipe_Img from "../assets/img/png/vipe_img.png";
const SuccessGuide = () => {
  const [first, setfirst] = useState(0);
  return (
    <>
      <section className="mt-xl-5 py-5 overflow-hidden">
        <Container className="py-lg-5">
          <Row className="justify-content-center align-items-center">
            <Col xs={9} xl={4} data-aos="fade-right">
              <div className="me-2">
                <img className="w-100" src={Cartoon_Img} alt="Cartoon_Img" />
              </div>
            </Col>
            <Col xl={8} className="mt-5 mt-xl-0">
              <Row className="ms-xl-3">
                <Col xxl={8}>
                  <div data-aos="fade-down">
                    <h2 className="fw-normal ff_gilroy400 fs_xsm clr_gray mb-0">
                      HAVE YOU SEEN OUR MASCOT?
                    </h2>
                    <p className="fw-normal ff_konexy fs_large">
                      Success Guides
                    </p>
                    <div className="d-flex align-items-center gap-2 overflow-scroll example">
                      <div>
                        <button className="fw-semibold ff_gilroy600 fs_xsm btn_category_2 flex_wrap">
                          Category-1
                        </button>
                      </div>
                      <div>
                        <button className="fw-semibold ff_gilroy600 fs_xsm btn_category_2 flex_wrap">
                          Category-2
                        </button>
                      </div>

                      <div>
                        <button className="fw-semibold ff_gilroy600 fs_xsm btn_category_2 flex_wrap">
                          Category-3
                        </button>
                      </div>
                      <div>
                        <button className="fw-semibold ff_gilroy600 fs_xsm btn_category_2 flex_wrap">
                          Category-4
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="ms-xl-3 justify-content-center mt-2">
                <Col sm={6} md={4}>
                  <div className="img_border p-3 mt-4" data-aos="fade-up">
                    <img className="w-100" src={Vipe_Img} alt="Vipe_Img" />
                    <h2 className="fw-semibold ff_gilroy600 fs_medium mt-3">
                      Sit diam metus
                    </h2>
                    <p className="fw-normal ff_gilroy400 fs_xsm mb-0">
                      Arcu amet, consectetur vel pellentesque mattis ipsum sed
                      mattis sed.
                    </p>
                    <div className="mt-2">
                      <a
                        href="#"
                        className="fw-semibold ff_gilroy600 fs_xsm learn_more_clr btn_clr"
                      >
                       Read More....
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={4}>
                  <div className="img_border p-3 mt-4" data-aos="fade-up">
                    <img className="w-100" src={Vipe_Img} alt="Vipe_Img" />
                    <h2 className="fw-semibold ff_gilroy600 fs_medium mt-3">
                      Sit diam metus
                    </h2>
                    <p className="fw-normal ff_gilroy400 fs_xsm mb-0">
                      Arcu amet, consectetur vel pellentesque mattis ipsum sed
                      mattis sed.
                    </p>
                    <div className="mt-2">
                      <a
                        href="#"
                        className="fw-semibold ff_gilroy600 fs_xsm learn_more_clr btn_clr"
                      >
                       Read More....
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={4} data-aos="fade-left">
                  <div className="img_border p-3 mt-4">
                    <img className="w-100" src={Vipe_Img} alt="Vipe_Img" />
                    <h2 className="fw-semibold ff_gilroy600 fs_medium mt-3">
                      Sit diam metus
                    </h2>
                    <p className="fw-normal ff_gilroy400 fs_xsm mb-0">
                      Arcu amet, consectetur vel pellentesque mattis ipsum sed
                      mattis sed.
                    </p>
                    <div className="mt-2">
                      <a
                        href="#"
                        className="fw-semibold ff_gilroy600 fs_xsm learn_more_clr btn_clr"
                      >
                       Read More....
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SuccessGuide;
