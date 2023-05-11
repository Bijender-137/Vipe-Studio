import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import YahooNews from "../assets/img/svg/yahoo_news.svg";
import YahooFinance from "../assets/img/svg/yahoo_finance.svg";
import Topics from "../assets/img/svg/topics_img.svg";
import YahooLyf from "../assets/img/svg/yahoo_life.svg";
const Featured = () => {
  return (
    <>
      <section className="featured_sec_bg_clr py-5 overflow-hidden">
        <Container className="py-lg-3">
          <div className="text-center text-lg-start" data-aos="fade-down">
            <h2 className="fw-normal ff_konexy fs_large mb-0">Featured on</h2>
          </div>
          <Row className="mt-lg -5 align-items-center justify-content-center">
            <Col xs={6} sm={4} md={3} lg={2} className="mt-sm-5 mt-4" data-aos="fade-right">
              <div>
                <img className="img_width_160" src={YahooNews} alt="YahooNews" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-sm-5 mt-4" data-aos="fade-right">
              <div>
                <img className="img_width_160" src={YahooFinance} alt="YahooFinance" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5" data-aos="fade-up">
              <div>
                <img className="img_width_160" src={YahooNews} alt="YahooNews" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5" data-aos="fade-up">
              <div>
                <img className="img_width_160" src={Topics} alt="Topics" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5" data-aos="fade-left">
              <div>
                <img className="img_width_160" src={YahooLyf} alt="YahooLyf" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5" data-aos="fade-left">
              <div>
                <img className="img_width_160" src={YahooNews} alt="YahooNews" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Featured;
