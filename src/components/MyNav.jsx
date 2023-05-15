import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Nav_logo from "../assets/img/svg/nav_logo.svg";
import Nav_global from "../assets/img/svg/nav_blobal.svg";
import Cross_icon from "../assets/img/svg/cross_icon.jpg";

const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <section className="bg-black">
        <Nav>
          <Container>
            <div className="d-flex align-items-center py-3 justify-content-between">
              <div className="d-flex align-items-center zn_1 ">
                <a href="#">
                  <img className="nav_logo_w" src={Nav_logo} alt="Nav_logo" />
                </a>
                <div
                  className={first
                      ? "d-flex flex-column flex-xl-row mobile_ul_nav left_100"
                      : "left_0 d-flex flex-column flex-xl-row mobile_ul_nav  "
                  }
                >
                  <div class="dropdown ms-xxl-5 ms-2">
                    <button
                      class="bg-transparent text-white border-0 align-items-center d-flex btn-secondary dropdown-toggle ff_gilroy400 fw-normal fs_xsm"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      WordPress Solution
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown ml_25">
                    <button
                      class="bg-transparent text-white border-0 align-items-center d-flex btn-secondary dropdown-toggle ff_gilroy400 fw-normal fs_xsm"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="m-0 p-0">
                    <li className="ml_25">
                      <a
                        href="#"
                        className="ff_gilroy400 fw-normal fs_xsm text-white"
                      >
                        Portfolio
                      </a>
                    </li>
                  </ul>
                  <div class="dropdown ml_25">
                    <button
                      class="bg-transparent text-white border-0 align-items-center d-flex btn-secondary dropdown-toggle ff_gilroy400 fw-normal fs_xsm"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="m-0 p-0">
                    <li className="ml_25">
                      <a
                        onClick={() => {
                          setfirst(true);
                        }}
                        href="#"
                        className="ff_gilroy400 fw-normal fs_xsm text-white"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                  <div className="d-md-flex align-items-center justify-content-center d-md-none">
                <ul className="m-0 p-0">
                  <li>
                    <a
                      href="#"
                      className="fw-normal ff_gilroy400 fs_xsm text-white"
                    >
                      1 888 266-6917 (eu?)
                    </a>
                  </li>
                </ul>
                <button className="text-white btn_schedule border-0 ff_gilroy400 fw-normal fs_xsm ms-0 mt-3 mt-md-0 ml_25">
                  Contact Us
                </button>
                <ul className="m-0 p-0">
                  <li>
                    <a href="#" className="d-flex align-items-center justify-content-center ms-0 mt-3 mt-md-0 ml_25 jus">
                      <img src={Nav_global} alt="Nav_global" />
                      <div class="dropdown ps-1 ">
                        <button
                          class="bg-transparent text-white border-0 align-items-center d-flex btn-secondary dropdown-toggle ff_gilroy400 fw-normal fs_xsm"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Eng
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                              href="#"
                            >
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                              href="#"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                              href="#"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
                </div>
                
              </div>
              <div className="d-flex align-items-center d-none d-md-flex zn_1">
                <ul className="m-0 p-0">
                  <li>
                    <a
                      href="#"
                      className="fw-normal ff_gilroy400 fs_xsm text-white"
                    >
                      1 888 266-6917 (eu?)
                    </a>
                  </li>
                </ul>
                <button className="text-white btn_schedule border-0 ff_gilroy400 fw-normal ms-md-4 fs_xsm ml_25">
                  Contact Us
                </button>
                <ul className="m-0 p-0">
                  <li>
                    <a href="#" className="d-flex align-items-center ml_25 ms-md-4">
                      <img src={Nav_global} alt="Nav_global" />
                      <div class="dropdown ps-1 ">
                        <button
                          class="bg-transparent text-white border-0 align-items-center d-flex btn-secondary dropdown-toggle ff_gilroy400 fw-normal fs_xsm"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Eng
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                              href="#"
                            >
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                              href="#"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item ff_gilroy400 fw-normal fs_xsm"
                              href="#"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="#"
                className="nav_icon_container d-xl-none zn_1"
                onClick={() => {
                  setfirst(!first);
                }}
              >
                <span className="nav_icon"></span>
                <span className="nav_icon mt-2"></span>
                <span className="nav_icon mt-2"></span>
              </a>
            </div>
          </Container>
        </Nav>
      </section>
    </>
  );
};

export default MyNav;
