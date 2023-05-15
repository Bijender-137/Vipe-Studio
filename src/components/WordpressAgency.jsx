import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Play_btn from "../assets/img/svg/play_btn.svg";
import Agency_team from "../assets/img/png/agency_team.png";
import Search from "../assets/img/svg/search_2.svg";
import Spinner from "../assets/img/svg/spinner.svg";
import TrustStar from "../assets/img/svg/trust_star.svg";
import Group_Star from "../assets/img/svg/group_starts.svg";
const WordpressAgency = () => {
  return (
    <>
      <section className="bg-black">
        <Container>
          <Row className="py-5">
            <Col xl={6}>
              <div>
                <div className="d-flex">
                  <div className="hero_sec_line mt-4"></div>
                  <div className="ms-2">
                    <h1 className="ff_konexy fw-normal fs_7xl text-white">
                      WordPress Development Agency
                    </h1>
                    <p className="fw-bold ff_gilroy700 fs_medium text-white mt-3">
                      for Enterprise + Friendly Team{" "}
                    </p>
                    <p className="text-white ff_gilroy400 fs_xsm fw-normal text_opacity_7 mt-3">
                      Vipe Studio is a WordPress Agency for development - a
                      long-term partner for any WordPress service. Websites
                      and,online shops development, maintenance and
                      customization is what we do best.
                    </p>
                    <div className="d-sm-flex align-items-center mt-4">
                      <button className="btn_started border-0 ff_gilroy600 fw-semibold fs_xsm text-white">
                        Get Started
                      </button>
                      <div className="d-flex align-items-center mt-3 mt-sm-0">
                        <a href="#" className="ms-sm-4">
                          <img src={Play_btn} alt="Play_btn" />
                        </a>
                        <p className="fw-normal ff_gilroy400 fs_xsm text-white text_opacity_7 mb-0 ms-3">
                          What is Vipe? (1min)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} xl={6} className="position-relative mx-auto mt-4 mt-xl-0">
              <div className="bg_shadow position-absolute bottom-0 d-none d-md-block"></div>
              <div className="bg_shadow position-absolute hero_bg_shadow d-none d-md-block"></div>
              {/* <div className="d-flex flex-column position-absolute zn_1 pilot_bg_clr pilot_img_set d-none d-md-flex">
                <img src={TrustStar} alt="TrustStar" />
                <img src={Group_Star} alt="Group_Star" />
                <p className="ff_gilroy400 fw-normal fs_xsm text-white">Rated 5.0 Excellent</p>
              </div> */}
              <div className="mt-4 mt-lg-0">
                <img
                  className="w-100 position -absolute team_img_set"
                  src={Agency_team}
                  alt="Agency_team"
                />
              </div>
            </Col>
          </Row>
          <Row className="bg_clr_hero pb-5 pt-md-5 justify-content-between">
            <Col lg={6}>
              <div>
                <h2 className="ff_konexy fw-normal fs_3xl text-white">
                  Tell us more....
                </h2>
                <p className="ff_gilroy400 fs_xsm text-white fw-normal">
                  Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                  augue in quis. Magna vel orci sem neque fringilla et lectus
                  laoreet.
                </p>
              </div>
            </Col>
            <Col sm={10} lg={5}>
              <div className="input_hero_section ">
                <div className=" d-sm-flex align-items-center justify-content-between">
                  <input
                    type="text"
                    className=" ff_gilroy400 fw-normal fs_xsm text-white text_opacity_7 border-0 input_clr"
                    placeholder="What do you need assistance with?		"
                  />
                  <a href="#">
                    <img className="pe-1 pe-sm-4" src={Search} alt="Search" />
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="d-flex align-items-center">
                  <img src={Spinner} alt="Spinner" />
                  <a
                    href="#"
                    className="fw-nonmal ff_gilroy400 fs_xsm text-white  ms-2"
                  >
                    or send us an inquire?
                  </a>
                </div>
                <a
                  href="#"
                  className="fw-nonmal ff_gilroy400 fs_xsm text-white"
                >
                  Learn more about...
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WordpressAgency;
