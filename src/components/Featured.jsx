import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import YahooNews from "../assets/img/svg/yahoo_news.svg";
import YahooFinance from "../assets/img/svg/yahoo_finance.svg";
import Topics from "../assets/img/svg/topics_img.svg";
import YahooLyf from "../assets/img/svg/yahoo_life.svg";
import Slider from "react-slick";
const Featured = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="featured_sec_bg_clr py-5 overflow-hidden">
        <Container className="py-lg-3">
          <div className="text-center text-lg-start" data-aos="fade-down">
            <h2 className="fw-normal ff_konexy fs_large mb-0">Featured on</h2>
          </div>
          <Slider {...settings}>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-sm-5 mt-4">
              <div>
                <img className="img_width_160 mx-auto" src={YahooNews} alt="YahooNews"/>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-sm-5 mt-4">
              <div>
                <img
                  className="img_width_160 mx-auto" src={YahooFinance} alt="YahooFinance" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5">
              <div>
                <img className="img_width_160 mx-auto" src={YahooNews} alt="YahooNews" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5">
              <div>
                <img className="img_width_160 mx-auto" src={Topics} alt="Topics" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5">
              <div>
                <img className="img_width_160 mx-auto" src={YahooLyf} alt="YahooLyf" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5">
              <div>
                <img className="img_width_160 mx-auto" src={YahooNews} alt="YahooNews"/>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-sm-5 mt-4">
              <div>
                <img className="img_width_160 mx-auto" src={YahooNews} alt="YahooNews"/>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-sm-5 mt-4">
              <div>
                <img
                  className="img_width_160 mx-auto" src={YahooFinance} alt="YahooFinance" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5">
              <div>
                <img className="img_width_160 mx-auto" src={YahooNews} alt="YahooNews" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5">
              <div>
                <img className="img_width_160 mx-auto" src={Topics} alt="Topics" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5">
              <div>
                <img className="img_width_160 mx-auto" src={YahooLyf} alt="YahooLyf" />
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="mt-5">
              <div>
                <img className="img_width_160 mx-auto" src={YahooNews} alt="YahooNews"/>
              </div>
            </Col>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Featured;
