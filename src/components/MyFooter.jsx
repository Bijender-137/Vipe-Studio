import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/img/svg/nav_logo.svg";
import Search from "../assets/img/svg/search.svg";
import Arrow from "../assets/img/svg/right_arrow.svg";
import Calling from "../assets/img/svg/calling.svg";
import Inbox from "../assets/img/svg/inbox_img.svg";
import Home from "../assets/img/svg/home_img.svg";
const MyFooter = () => {
  return (
    <>
      <footer className="bg-black pt-lg-4">
        <Container className="py-5">
          <Row className="pb-5">
            <Col md={8}>
              <div>
                <a href="#">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>
            </Col>
            <Col md={4}>
              <div className="btn_input d-flex  justify-content-between mt-4 mt-md-0">
                <input
                  type="text"
                  className="border-0 outline_none ff_gilroy400 fw-normal fs_xsm text_opacity_7 "
                  placeholder="Search here...."
                />
                <img className="cursor_pointer" src={Search} alt="Search" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6} lg={4} xl={3}>
              <div>
                <h2 className="ff_gilroy400 fw-normal fs_xsm text-white">
                  Services
                </h2>
                <ul className="mt-4 p-0">
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        WordPress Development
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        WooCommerce Development
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        WordPress Maintenance
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        Speed Optimization
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        Dedicated WordPress Developer
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        Headless WordPress Development
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        White Label Development
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} lg={4} xl={3}>
              <div className="mt-4 mt-sm-0">
                <h2 className="ff_gilroy400 fw-normal fs_xsm text-white">
                  Services
                </h2>
                <ul className="mt-4 p-0">
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        WordPress Hosting
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        PSD, XD, Figma to WordPress Conversion
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        Custom WordPress Theme
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        Custom WordPress Plugins
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        CMS to WordPress
                      </p>
                    </a>
                  </li>
                  <li className="mt-2 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Arrow} alt="Arrow" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        WordPress Malware Removal
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} lg={4} xl={3}>
              <div className="mt-4 mt-lg-0">
                <h2 className="ff_gilroy400 fw-normal fs_xsm text-white">
                  Latest Articles
                </h2>
                <ul className="mt-4 p-0">
                  <li>
                    <a
                      href="#"
                      className="mb-0 ff_gilroy400 fw-normal fs_sort text-white"
                    >
                      7 WordPress Plugins to Create an Effective Newsletter
                      03.01.2022
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="#"
                      className="mb-0 ff_gilroy400 fw-normal fs_sort text-white"
                    >
                      What’s the Perfect Blog Post Length for Your WordPress
                      Site’s SEO? 02.01.2022
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="#"
                      className="mb-0 ff_gilroy400 fw-normal fs_sort text-white"
                    >
                      5 Reasons the Future of WordPress Is Headless 01.01.2022
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="#"
                      className="mb-0 ff_gilroy400 fw-normal fs_sort text-white"
                    >
                      Viptor Says: Vipe Studio’s WordPress Developers Wrap Up
                      the Amazingly Successful 2021 30.12.2021
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} lg={4} xl={3} className="d-flex justify-content-xl-end">
              <div className="mt-4 mt-xl-0 ">
                <h2 className="ff_gilroy400 fw-normal fs_xsm text-white ">
                  Contact
                </h2>
                <ul className="mt-4 p-0">
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <img src={Calling} alt="Calling" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        EU: +359 988 993 128
                      </p>
                    </a>
                  </li>
                  <li className="mt-3 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Calling} alt="Calling" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        US: +1 (1 888) 266-6917
                      </p>
                    </a>
                  </li>
                  <li className="mt-3 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Inbox} alt="Inbox" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        office@vipestudio.com
                      </p>
                    </a>
                  </li>
                  <li className="mt-3 pt-2">
                    <a href="#" className="d-flex align-items-center">
                      <img src={Home} alt="Home" />
                      <p className="mb-0 ff_gilroy400 fw-normal fs_sort text-white ms-2">
                        14 Srebarna, Sofia 1407, Bulgaria
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <section className="pb-4">
          <div className="gray_line "></div>
          <Container>
            <Row className="mt-4">
              <Col lg={8}>
                <h2 className="ff_gilroy400 fw-normal  text-white fs_sort">
                  © Vipe Studio 2016-2022
                </h2>
                <div className="d-flex align-items-center mt-3">
                  <a
                    href="#"
                    className="ff_gilroy400 fw-normal  text-white fs_sort mb-0"
                  >
                    Privacy
                  </a>
                  <div className="d-flex align-items-center ms-3">
                    <div className="footer_sort_line"></div>
                    <a
                      href="#"
                      className="ff_gilroy400 fw-normal  text-white fs_sort mb-0 ms-2"
                    >
                      Careers
                    </a>
                  </div>
                  <div className="d-flex align-items-center ms-3">
                    <div className="footer_sort_line"></div>
                    <a
                      href="#"
                      className="ff_gilroy400 fw-normal  text-white fs_sort mb-0 ms-2"
                    >
                      Media
                    </a>
                  </div>
                  <div className="d-flex align-items-center ms-3">
                    <div className="footer_sort_line"></div>
                    <a
                      href="#"
                      className="ff_gilroy400 fw-normal  text-white fs_sort mb-0 ms-2"
                    >
                      Client Area
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="d-flex justify-content-between align-items-center mt-4 mt-lg-0">
                  <div>
                    <a
                      href="#"
                      className="app_circel d-flex justify-content-center align-items-center"
                    >
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.42233 20.003C7.42233 20.899 7.43233 21.756 7.43833 22.288C7.43946 22.4166 7.48073 22.5417 7.55639 22.6457C7.63206 22.7496 7.73832 22.8274 7.86033 22.868C9.93833 23.554 12.1773 23.586 14.2743 22.959L14.5663 22.872C14.7038 22.8309 14.8245 22.7467 14.9105 22.6319C14.9966 22.517 15.0435 22.3776 15.0443 22.234C15.0493 21.501 15.0613 20.217 15.0613 18.704C15.0613 17.332 14.5843 16.454 14.0303 15.997C17.4293 15.631 21.0003 14.387 21.0003 8.77004C21.0003 7.16004 20.4083 5.86004 19.4343 4.83604C19.5873 4.47004 20.1223 2.97004 19.2813 0.958038C19.2813 0.958038 18.0013 0.555038 15.0803 2.45804C13.834 2.12722 12.5498 1.96114 11.2603 1.96404C9.96233 1.96404 8.66333 2.12904 7.44133 2.45804C4.52033 0.572038 3.24033 0.958038 3.24033 0.958038C2.40033 2.97004 2.93433 4.47004 3.08733 4.83604C2.06736 5.8898 1.50458 7.30359 1.52133 8.77004C1.52133 14.368 5.07333 15.63 8.47233 15.997C8.03333 16.363 7.63233 17.003 7.49933 17.954C6.62033 18.338 4.42433 18.96 3.04933 16.747C2.76333 16.307 1.90333 15.228 0.700334 15.247C-0.579666 15.265 0.184334 15.942 0.720334 16.217C1.36833 16.564 2.11333 17.863 2.28533 18.284C2.59133 19.107 3.58433 20.68 7.42233 20.004V20.003Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="app_circel d-flex justify-content-center align-items-center"
                    >
                      <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 0.921875H4.5V13.4219H0.5V0.921875ZM8.5 5.67188V13.4219H12V6.42188C12 5.17188 12.75 4.17188 14 4.17188C15.25 4.17188 16 5.42188 16 6.42188V13.4219H19.5V5.67188C19.5 4.17188 17.75 0.921875 14 0.921875C10.25 0.921875 8.5 4.17188 8.5 5.67188Z"
                          fill="black"
                          stroke="black"
                          stroke-width="0.0833333"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="app_circel d-flex justify-content-center align-items-center"
                    >
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.6425 2.85895C22.8075 3.22895 21.9105 3.47895 20.9675 3.59195C21.9405 3.00974 22.6685 2.09342 23.0155 1.01395C22.1014 1.55694 21.1009 1.93915 20.0575 2.14395C19.3559 1.39482 18.4266 0.898278 17.4138 0.731426C16.4011 0.564574 15.3616 0.736743 14.4568 1.2212C13.5519 1.70567 12.8323 2.47531 12.4097 3.41066C11.9871 4.346 11.8851 5.3947 12.1195 6.39395C10.2672 6.30095 8.45515 5.8195 6.80095 4.98086C5.14674 4.14221 3.68736 2.96511 2.51752 1.52595C2.11752 2.21595 1.88752 3.01595 1.88752 3.86795C1.88708 4.63495 2.07596 5.3902 2.4374 6.06669C2.79885 6.74318 3.32168 7.31999 3.95952 7.74595C3.2198 7.72242 2.4964 7.52254 1.84952 7.16295V7.22295C1.84945 8.29869 2.22156 9.34133 2.90271 10.174C3.58386 11.0066 4.53209 11.5779 5.58652 11.791C4.90031 11.9767 4.18086 12.004 3.48252 11.871C3.78002 12.7966 4.35952 13.606 5.13989 14.1859C5.92026 14.7658 6.86244 15.0871 7.83452 15.105C6.18436 16.4004 4.14641 17.103 2.04852 17.1C1.6769 17.1001 1.3056 17.0784 0.936523 17.035C3.066 18.4041 5.54486 19.1308 8.07652 19.128C16.6465 19.128 21.3315 12.03 21.3315 5.87395C21.3315 5.67395 21.3265 5.47195 21.3175 5.27195C22.2288 4.61293 23.0154 3.79685 23.6405 2.86195L23.6425 2.85895Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="app_circel d-flex justify-content-center align-items-center"
                    >
                      <svg
                        width="11"
                        height="23"
                        viewBox="0 0 11 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3534_111)">
                          <path
                            d="M2.77006 22.9015V12.588H0.0429688V8.87466H2.77006V5.70298C2.77006 3.21065 4.38097 0.921875 8.09284 0.921875C9.59572 0.921875 10.707 1.06595 10.707 1.06595L10.6195 4.53358C10.6195 4.53358 9.48611 4.52255 8.24934 4.52255C6.91078 4.52255 6.69632 5.13941 6.69632 6.16324V8.87466H10.7259L10.5505 12.588H6.69632V22.9015H2.77006Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3534_111">
                            <rect
                              width="10.77"
                              height="21.9796"
                              fill="white"
                              transform="translate(0 0.921875)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="app_circel d-flex justify-content-center align-items-center"
                    >
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0001 9.79767C10.2798 9.79767 8.87589 11.2016 8.87589 12.9219C8.87589 14.6422 10.2798 16.0461 12.0001 16.0461C13.7204 16.0461 15.1243 14.6422 15.1243 12.9219C15.1243 11.2016 13.7204 9.79767 12.0001 9.79767ZM21.3704 12.9219C21.3704 11.6281 21.3821 10.3461 21.3095 9.0547C21.2368 7.5547 20.8946 6.22345 19.7978 5.12658C18.6985 4.02736 17.3696 3.68751 15.8696 3.61486C14.5759 3.5422 13.2939 3.55392 12.0025 3.55392C10.7087 3.55392 9.42667 3.5422 8.13527 3.61486C6.63527 3.68751 5.30402 4.0297 4.20714 5.12658C3.10792 6.22579 2.76808 7.5547 2.69542 9.0547C2.62277 10.3485 2.63449 11.6305 2.63449 12.9219C2.63449 14.2133 2.62277 15.4977 2.69542 16.7891C2.76808 18.2891 3.11027 19.6203 4.20714 20.7172C5.30636 21.8164 6.63527 22.1563 8.13527 22.2289C9.42902 22.3016 10.711 22.2899 12.0025 22.2899C13.2962 22.2899 14.5782 22.3016 15.8696 22.2289C17.3696 22.1563 18.7009 21.8141 19.7978 20.7172C20.897 19.618 21.2368 18.2891 21.3095 16.7891C21.3845 15.4977 21.3704 14.2156 21.3704 12.9219ZM12.0001 17.7289C9.33995 17.7289 7.19308 15.582 7.19308 12.9219C7.19308 10.2617 9.33995 8.11486 12.0001 8.11486C14.6603 8.11486 16.8071 10.2617 16.8071 12.9219C16.8071 15.582 14.6603 17.7289 12.0001 17.7289ZM17.004 9.04064C16.3829 9.04064 15.8814 8.53908 15.8814 7.91798C15.8814 7.29689 16.3829 6.79533 17.004 6.79533C17.6251 6.79533 18.1267 7.29689 18.1267 7.91798C18.1269 8.06546 18.0979 8.21153 18.0416 8.34782C17.9852 8.48411 17.9026 8.60795 17.7983 8.71223C17.694 8.81652 17.5701 8.89921 17.4339 8.95556C17.2976 9.01191 17.1515 9.04082 17.004 9.04064Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="app_circel d-flex justify-content-center align-items-center"
                    >
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.891 8.70983C20.614 10.0323 20.992 11.5156 20.99 13.0228C20.9904 14.5961 20.5777 16.1418 19.7933 17.5056C19.0089 18.8693 17.8801 20.0032 16.52 20.7938L19.266 12.8548C19.779 11.5728 19.95 10.5458 19.95 9.63583C19.9504 9.32621 19.9307 9.0169 19.891 8.70983ZM13.24 8.79683C13.583 8.77996 13.9252 8.75061 14.266 8.70883C14.751 8.64583 14.694 7.93383 14.21 7.95983C14.21 7.95983 12.747 8.07183 11.81 8.07183C10.923 8.07183 9.435 7.94683 9.435 7.94683C8.948 7.92283 8.885 8.65983 9.374 8.68483C9.374 8.68483 9.823 8.73683 10.312 8.75983L11.711 12.5978L9.736 18.4968L6.462 8.77283C6.80543 8.75556 7.14825 8.72788 7.49 8.68983C7.977 8.62683 7.92 7.91483 7.435 7.94283C7.435 7.94283 5.98 8.05783 5.04 8.05783C4.873 8.05783 4.675 8.05083 4.465 8.04483C6.093 5.64783 8.862 4.03483 12 4.03483C14.341 4.03483 16.471 4.92883 18.071 6.39483C18.033 6.39283 17.995 6.38683 17.954 6.38683C17.071 6.38683 16.444 7.15683 16.444 7.98283C16.444 8.72383 16.871 9.35183 17.327 10.0908C17.67 10.6918 18.069 11.4608 18.069 12.5718C18.069 13.3348 17.774 14.2338 17.384 15.4708L16.488 18.4578L13.238 8.78283L13.24 8.79683ZM12 22.0088C11.1403 22.0097 10.2849 21.8871 9.46 21.6448L12.157 13.8068L14.92 21.3788C14.941 21.4228 14.962 21.4638 14.985 21.5028C14.0258 21.8392 13.0165 22.011 12 22.0108V22.0088ZM3.01 13.0228C3.00854 11.7623 3.27368 10.5157 3.788 9.36483L8.075 21.1138C6.55646 20.3765 5.27611 19.2267 4.38039 17.7958C3.48468 16.365 3.00978 14.7109 3.01 13.0228ZM12 3.02283C6.487 3.02283 2 7.50983 2 13.0228C2 18.5358 6.487 23.0228 12 23.0228C17.513 23.0228 22 18.5358 22 13.0228C22 7.50983 17.513 3.02283 12 3.02283Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default MyFooter;
