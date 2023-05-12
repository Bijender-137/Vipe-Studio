import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CircelImg from "../assets/img/svg/circel_img.svg";
import GirlImg from "../assets/img/png/girl_img.png";
const WipeStudio = () => {
  return (
    <>
      <section className="py-5 py-sm-5 position-relative bg-black overflow-hidden mt-md-5">
        <Container>
          <Row className="pb-sm-5">
            <Col sm={12} lg={5}>
              <div data-aos="fade-right">
                <h1 className=" fs_4xl ff_konexy fw-normal text-white">
                  All Vipe Studio WordPress services include:
                </h1>
              </div>
            </Col>
            <Col sm={12} lg={7}>
              <Row>
                <Col sm={6} data-aos="fade-down">
                  <div className=" mt-3 mt-md-0">
                    <p className="fw-semibold fs_medium ff_gilroy600 text-white">
                      By Industry
                    </p>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Lorem in elementum pellentesque
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Molestie cursus praesent mi
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Leo sed viverra cras
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Laoreet feugiat ut at
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Risus aliquam molestie viverra
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Diam enim pulvinar velit
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={6} data-aos="fade-left">
                  <div className=" mt-4 mt-md-0 ">
                    <p className="fw-semibold fs_medium ff_gilroy600 text-white">
                      By Services
                    </p>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Accumsan, dui a semper
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Interdum malesuada vulputate neque
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Nullam non a, morbi
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Arcu morbi leo eu
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Viverra venenatis, in ornare
                      </p>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img src={CircelImg} alt="CircelImg" />
                      <p className="fs_xsm ff_gilroy400 fw-normal text-white mb-0 ms-2 ps-1">
                        Erat id aliquam habitant
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Container className=" position-relative mt-5 p-0">
            <div className="bg_shadow position-absolute"></div>
            <div className="bg_shadow position-absolute right_shadow"></div>
            <div className="bg_clr_black zn_1 mt-3 mt-sm-5 ">
              <Row>
                <Col sm={12} lg={4}>
                  <div data-aos="fade-right">
                    <p className="ff_konexy fw-semibold fs_3xl text-white">
                      Not Sure which service you need yet?{" "}
                    </p>
                    <button className="ff_gilroy600 fs_xsm fw-semibold text-white btn_schedule border-0 mt-2 mt-lg-4">
                      Schedule An Appointment
                    </button>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <div
                    className="pt-2  d-flex justify-content-end flex-column mt-4 mt-lg-0"
                    data-aos="fade-up"
                  >
                    <p className="ff_gilroy700 fw-bold fs_medium text-white">
                      20-m free consultation that will help us identifyif you
                      need{" "}
                    </p>
                    <div className="d-flex align-items-center mt-lg-3 pt-1">
                      <div>
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33398 6L6.33398 11L14.6673 1"
                            stroke="#6022EA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="ff_gilroy400 fw-normal fs_xsm text-white mb-0 ms-3">
                        Technical Description & Discovery
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-2 pt-2">
                      <div>
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33398 6L6.33398 11L14.6673 1"
                            stroke="#6022EA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="ff_gilroy400 fw-normal fs_xsm text-white mb-0 ms-3">
                        Custom WordPress Development
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-2 pt-2">
                      <div>
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33398 6L6.33398 11L14.6673 1"
                            stroke="#6022EA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="ff_gilroy400 fw-normal fs_xsm text-white mb-0 ms-3">
                        Support & Maintenance
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-2 pt-2">
                      <div>
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33398 6L6.33398 11L14.6673 1"
                            stroke="#6022EA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="ff_gilroy400 fw-normal fs_xsm text-white mb-0 ms-3">
                        Other WordPress Service
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={4} data-aos="fade-left">
                  <div className="d-md-flex justify-content-end mt-4 mt-lg-0">
                    <img className="w-100" src={GirlImg} alt="GirlImg" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default WipeStudio;
