import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import YahooNews from "../assets/img/svg/yahoo_news.svg";
import YahooFinance from "../assets/img/svg/yahoo_finance.svg";
import Topics from "../assets/img/svg/topics_img.svg";
import YahooLyf from "../assets/img/svg/yahoo_life.svg";
import Marquee from "react-fast-marquee";
const Featured = () => {

  return (
    <>
      <section className="featured_sec_bg_clr py-5 overflow-hidden">
        <Container className="py-lg-3">
          <div className="text-center text-lg-start" data-aos="fade-down">
            <h2 className="fw-normal ff_konexy fs_large mb-0">Featured on</h2>
          </div>
         
          <Marquee>
            <div className="d-flex justify-content-between mt-5 align-items-center">
              <div>
                <img
                  className="img_width_160 mx-5"
                  src={YahooNews}
                  alt="YahooNews"
                />
              </div>
              <div>
                <img
                  className="img_width_160 mx-5"
                  src={YahooFinance}
                  alt="YahooFinance"
                />
              </div>
              <div>
                <img
                  className="img_width_160 mx-5"
                  src={YahooLyf}
                  alt="YahooNews"
                />
              </div>
              <div>
                <img
                  className="img_width_160 mx-5"
                  src={Topics}
                  alt="Topics"
                />
              </div>
              <div>
                <img
                  className="img_width_160 mx-5"
                  src={YahooNews}
                  alt="YahooNews"
                />
              </div>
            </div>
          </Marquee>
        </Container>
      </section>
    </>
  );
};

export default Featured;
