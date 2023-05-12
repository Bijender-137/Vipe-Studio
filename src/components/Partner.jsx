import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Partner_1 from "../assets/img/svg/partner_img_1.svg";
import Partner_2 from "../assets/img/svg/partner_img_2.svg";
import Partner_3 from "../assets/img/svg/partner_img_3.svg";
import Partner_4 from "../assets/img/svg/partner_img_4.svg";
import Partner_5 from "../assets/img/svg/partner_img_5.svg";
import Partner_6 from "../assets/img/svg/partner_img_6.svg";
import Slider from "react-slick";

const Partner = () => {
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
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
          <Slider {...settings} className="mt-4">
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
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Partner;
