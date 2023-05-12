import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Vipe_Team from "../assets/img/png/vipe_full_team.png";
const TeamStars = () => {
  return (
    <>
      <section className="py-5 featured_sec_bg_clr position-relative overflow- hidden">
        <Container className="py-md-5">
          <Row className="flex-column-reverse flex-lg-row justify-content-between">
            <Col lg={6} data-aos="fade-right">
              <div className="mt-4">
                <h2 className="fw-normal ff_konexy fs_large">
                  Team Full of Stars{" "}
                </h2>
                <p className="ff_gilroy400 fw-normal fs_xsm mt-3">
                  Suspendisse consequat egestas arcu et et. Viverra quis euismod
                  neque luctus bibendum. Fringilla in nibh fringilla vulputate
                  in. Elit, ultricies vitae pulvinar arcu dignissim ac non
                  rutrum. Lacus tortor sollicitudin risus eget euismod in
                  bibendum turpis.{" "}
                </p>
                <button className="btn_explore border-0 text-white mt-2 mt-md-4 fw-normal ff_gilroy600 fsxsm">
                  Explore
                </button>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-down">
              <div className=" img_overflow ">
                <img className="w-100" src={Vipe_Team} alt="Vipe_Team" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TeamStars;
