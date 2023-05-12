import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Partner_1 from "../assets/img/svg/partner_img_1.svg";
import Partner_2 from "../assets/img/svg/partner_img_2.svg";
import Partner_3 from "../assets/img/svg/partner_img_3.svg";
import Partner_4 from "../assets/img/svg/partner_img_4.svg";
import Partner_5 from "../assets/img/svg/partner_img_5.svg";
import Partner_6 from "../assets/img/svg/partner_img_6.svg";
const Partner = () => {
  return (
    <>
      <section className="py-5 overflow-hidden featured_sec_bg_clr">
        <Container>
          <Row>
            <Col xxl={6}>
              <div data-aos="fade-down">
                <h2 className="ff-normal ff_konexy fs_large">
                  Long Term WordPress Partner
                </h2>
                <p className="fw-normal ff_gilroy400 fs_xsm">
                  Our motto is the long-term partnership – we will not only
                  develop your perfect website, but will be behind you through
                  the whole process. They already trusted us:
                </p>
              </div>
            </Col>
          </Row>
          {/* <Row className="align-items-center justify-content-center">
            <Col xs={6} sm={4} md={3} xl={2} className="mt-4" data-aos="fade-right">
              <img className="img_width_160" src={Partner_1} alt="Partner_1" />
            </Col>
            <Col xs={6} sm={4} md={3} xl={2} className="mt-4" data-aos="fade-right">
              <img className="img_width_160" src={Partner_2} alt="Partner_2" />
            </Col>
            <Col xs={6} sm={4} md={3} xl={2} className="mt-4" data-aos="fade-up">
              <img className="img_width_160" src={Partner_3} alt="Partner_3" />
            </Col>
            <Col xs={6} sm={4} md={3} xl={2} className="mt-4" data-aos="fade-up">
              <img className="img_width_160" src={Partner_4} alt="Partner_4" />
            </Col>
            <Col xs={6} sm={4} md={3} xl={2} className="mt-4" data-aos="fade-left">
              <img className="img_width_160" src={Partner_5} alt="Partner_5" />
            </Col>
            <Col xs={6} sm={4} md={3} xl={2} className="mt-4" data-aos="fade-left">
              <img className="img_width_160" src={Partner_6} alt="Partner_6" />
            </Col>
          </Row> */}
          <marquee>
            <div className="d-flex justify-content-between align-items-center mt-4 gap-5">
              <div>
                <img className="img_width_160" src={Partner_1} alt="Partner_1" />
              </div>
              <div>
              <img className="img_width_160" src={Partner_2} alt="Partner_2" />              </div>
              <div>
                <img className="img_width_160" src={Partner_3} alt="Partner_3" />
              </div>
              <div>
                <img className="img_width_160" src={Partner_4} alt="Partner_4" />
              </div>
              <div>
                <img className="img_width_160" src={Partner_5} alt="Partner_5" />
              </div>
              <div>
                <img className="img_width_160" src={Partner_6} alt="Partner_6" />
              </div>
            </div>
          </marquee>
        </Container>
      </section>
    </>
  );
};

export default Partner;
