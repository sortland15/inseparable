import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {Button} from "../components/componentsindex";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import React, { useEffect, useState, useContext } from "react";
const Creator = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext);
    return(
        <>
    <Head>
    <title>INSEPARABLE NFT Marketplace</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content=" " />
    <meta name="keywords" content="" />
    <meta content="Pichforest" name="author" />
    <link rel="shortcut icon" href="images/favicon.ico" />
    {/* Bootstrap css */}
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" id="bootstrap-style"/>
    {/* Material Icon Css */}
    <link rel="stylesheet" href="css/materialdesignicons.min.css" type="text/css"/>
    {/* Unicon Css */}
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
    {/* Swiper Css */}
    <link rel="stylesheet" href="css/tiny-slider.css" type="text/css" />
    {/* Custom Css */}
    <link rel="stylesheet" href="css/style.min.css" type="text/css" />
    </Head>

    {/* light-dark mode button */}
    
    <Link href="javascript: void(0);" id="mode" className="mode-btn text-dark bg-secondary border-secondary rounded-end">
    <i className="uil uil-brightness mode-dark mx-auto" />
    <i className="uil uil-moon bx-spin mode-light" />
    </Link>

    {/*Navbar Start*/}
    <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
      <div className="container-fluid custom-container">
        <a className="navbar-brand logo f-30 text-dark fw-bold" href="index.html">
          <img src="images/LOGO.png" className="logo-dark" alt="" height={80} />
          <img src="images/LOGO.png" className="logo-light" alt="" height={80} />
        </a>
        <div>
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto navbar-center">
            <li className="nav-item dropdown dropdown-hover">
              <Link href="/home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/marketplace">
                Marketplace
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" href="/creator">
            Creators
            </Link>
            </li>
            {/*end dropdown*/}

            <li className="nav-item dropdown dropdown-hover">
            <Link className="nav-link dropdown-toggle" href="/profile">
            Profile
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-center"
              aria-labelledby="homedrop"
            >
              <li>
                <Link className="dropdown-item" href="/editprofile">
                <i className="mdi mdi-account-edit f-20 me-2 align-middle" />
                Edit profile
                </Link>
              </li>
            </ul>
          </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
              Blog
              </Link>
            </li>
            {/*end dropdown*/}
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
              Contact
              </Link>
            </li>
            {/*end dropdown*/}
          </ul>
          {/*end navbar-nav*/}
          {currentAccount == "" ? (
          <Button btnName="Connect" handleClick={() => connectWallet()} />
          ) : (
          <Button
          btnName="Create NFT"
          handleClick={() => router.push("/createnft")}
          />
          )}
        </div>
      </div>
      {/*end container*/}
    </nav>
    {/* Navbar End */}
  {/* start section */}
  <section className="creator section bg-light">
    {/* start container */}
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb default mb-0">
              <li className="breadcrumb-item">
                <a href="index.html" className="text-muted">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item active text-primary"
                aria-current="page"
              >
                Creators
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="inner-heading text-center">
            <div className="mt-4">
              <h1 className="fw-bold">Popular Creators</h1>
              <p className="text-muted">
                New exploration about NFT Marketplace Web Design, this time I'm
                inspired by <br /> one of my favorite NFT website called
                Rarible.
              </p>
            </div>
          </div>
          <div className="heading-bottom-icon d-flex justify-content-center text-center">
            <i className="mdi mdi-image-filter-vintage" />
            <i className="mdi mdi-image-filter-vintage mx-2" />
            <i className="mdi mdi-image-filter-vintage" />
          </div>
        </div>
      </div>
      <div className="popular-creator">
        <div className="row faq align-items-center mt-5">
          <div className="col-lg-3">
            <div className="creator-box position-relative">
              <div className="number position-absolute">
                <h5 className="fw-bold">01.</h5>
              </div>
              <div className="creator-image text-center">
                <img
                  src="images/inner-image/creator/img-1.png"
                  alt=""
                  className="img-fluid avatar-lg rounded-circle"
                />
              </div>
              <div className="creator-content text-center mt-3">
                <h6 className="fw-bold">@xander_hall...</h6>
                <p className="mb-0 text-muted fw-semibold">
                  3 Sales on 1.47 ETH
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="creator-box position-relative">
              <div className="number position-absolute">
                <h5 className="fw-bold">02.</h5>
              </div>
              <div className="creator-image text-center">
                <img
                  src="images/inner-image/creator/img-2.png"
                  alt=""
                  className="img-fluid avatar-lg rounded-circle"
                />
              </div>
              <div className="creator-content text-center mt-3">
                <h6 className="fw-bold">@teagan_poole...</h6>
                <p className="mb-0 text-muted fw-semibold">
                  3 Sales on 1.25 ETH
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="creator-box position-relative">
              <div className="number position-absolute">
                <h5 className="fw-bold">03.</h5>
              </div>
              <div className="creator-image text-center">
                <img
                  src="images/inner-image/creator/img-3.png"
                  alt=""
                  className="img-fluid avatar-lg rounded-circle"
                />
              </div>
              <div className="creator-content text-center mt-3">
                <h6 className="fw-bold">@eli_tyler...</h6>
                <p className="mb-0 text-muted fw-semibold">
                  2 Sales on 0.96 ETH
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="creator-box position-relative">
              <div className="number position-absolute">
                <h5 className="fw-bold">04.</h5>
              </div>
              <div className="creator-image text-center">
                <img
                  src="images/inner-image/creator/img-4.png"
                  alt=""
                  className="img-fluid avatar-lg rounded-circle"
                />
              </div>
              <div className="creator-content text-center mt-3">
                <h6 className="fw-bold">@hamza_pitts...</h6>
                <p className="mb-0 text-muted fw-semibold">
                  2 Sales on 0.95 ETH
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row faq align-items-center mt-4">
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="creator-box position-relative">
              <div className="number position-absolute">
                <h5 className="fw-bold">05.</h5>
              </div>
              <div className="creator-image text-center">
                <img
                  src="images/inner-image/creator/img-5.png"
                  alt=""
                  className="img-fluid avatar-lg rounded-circle"
                />
              </div>
              <div className="creator-content text-center mt-3">
                <h6 className="fw-bold">@xander_hall...</h6>
                <p className="mb-0 text-muted fw-semibold">
                  3 Sales on 1.47 ETH
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="creator-box position-relative">
              <div className="number position-absolute">
                <h5 className="fw-bold">06.</h5>
              </div>
              <div className="creator-image text-center">
                <img
                  src="images/inner-image/creator/img-6.png"
                  alt=""
                  className="img-fluid avatar-lg rounded-circle"
                />
              </div>
              <div className="creator-content text-center mt-3">
                <h6 className="fw-bold">@teagan_poole...</h6>
                <p className="mb-0 text-muted fw-semibold">
                  3 Sales on 1.25 ETH
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="creator-box position-relative">
              <div className="number position-absolute">
                <h5 className="fw-bold">07.</h5>
              </div>
              <div className="creator-image text-center">
                <img
                  src="images/inner-image/creator/img-7.png"
                  alt=""
                  className="img-fluid avatar-lg rounded-circle"
                />
              </div>
              <div className="creator-content text-center mt-3">
                <h6 className="fw-bold">@eli_tyler...</h6>
                <p className="mb-0 text-muted fw-semibold">
                  2 Sales on 0.96 ETH
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="creator-box position-relative">
              <div className="number position-absolute">
                <h5 className="fw-bold">08.</h5>
              </div>
              <div className="creator-image text-center">
                <img
                  src="images/inner-image/creator/img-8.png"
                  alt=""
                  className="img-fluid avatar-lg rounded-circle"
                />
              </div>
              <div className="creator-content text-center mt-3">
                <h6 className="fw-bold">@hamza_pitts...</h6>
                <p className="mb-0 text-muted fw-semibold">
                  2 Sales on 0.95 ETH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discover-creator">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="fw-bold">Discover all Creators</h3>
          </div>
          <div className="col-lg-6">
            <div className="text-center text-lg-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="testi-box p-4 position-relative">
              <div className="inner-box overflow-hidden">
                <div className="tab-image">
                  <img
                    src="images/inner-image/testi/t-1.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="avatar-xl">
                    <img
                      src="images/inner-image/user/img-2.jpg"
                      alt=""
                      className="img-fluid rounded-circle border border-4 border-white"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="content-box p-4 pt-5">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">150 ETH</h6>
                          <p className="mb-0 fw-semibold text-muted">Sold</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">322</h6>
                          <p className="mb-0 fw-semibold text-muted">
                            Collection
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">16, 009</h6>
                          <p className="mb-0 fw-semibold text-muted">Views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testi-box p-4 position-relative">
              <div className="inner-box overflow-hidden">
                <div className="tab-image">
                  <img
                    src="images/inner-image/testi/t-2.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="avatar-xl">
                    <img
                      src="images/inner-image/user/img-4.jpg"
                      alt=""
                      className="img-fluid rounded-circle border border-4 border-white"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="content-box p-4 pt-5">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">150 ETH</h6>
                          <p className="mb-0 fw-semibold text-muted">Sold</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">322</h6>
                          <p className="mb-0 fw-semibold text-muted">
                            Collection
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">16, 009</h6>
                          <p className="mb-0 fw-semibold text-muted">Views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testi-box p-4 position-relative">
              <div className="inner-box overflow-hidden">
                <div className="tab-image">
                  <img
                    src="images/inner-image/testi/t-3.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="avatar-xl">
                    <img
                      src="images/inner-image/user/img-8.jpg"
                      alt=""
                      className="img-fluid rounded-circle border border-4 border-white"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="content-box p-4 pt-5">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">150 ETH</h6>
                          <p className="mb-0 fw-semibold text-muted">Sold</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">322</h6>
                          <p className="mb-0 fw-semibold text-muted">
                            Collection
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">16, 009</h6>
                          <p className="mb-0 fw-semibold text-muted">Views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="testi-box p-4 position-relative">
              <div className="inner-box overflow-hidden">
                <div className="tab-image">
                  <img
                    src="images/inner-image/testi/t-4.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="avatar-xl">
                    <img
                      src="images/inner-image/user/img-3.jpg"
                      alt=""
                      className="img-fluid rounded-circle border border-4 border-white"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="content-box p-4 pt-5">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">150 ETH</h6>
                          <p className="mb-0 fw-semibold text-muted">Sold</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">322</h6>
                          <p className="mb-0 fw-semibold text-muted">
                            Collection
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">16, 009</h6>
                          <p className="mb-0 fw-semibold text-muted">Views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testi-box p-4 position-relative">
              <div className="inner-box overflow-hidden">
                <div className="tab-image">
                  <img
                    src="images/inner-image/testi/t-5.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="avatar-xl">
                    <img
                      src="images/inner-image/user/img-1.jpg"
                      alt=""
                      className="img-fluid rounded-circle border border-4 border-white"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="content-box p-4 pt-5">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">150 ETH</h6>
                          <p className="mb-0 fw-semibold text-muted">Sold</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">322</h6>
                          <p className="mb-0 fw-semibold text-muted">
                            Collection
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">16, 009</h6>
                          <p className="mb-0 fw-semibold text-muted">Views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testi-box p-4 position-relative">
              <div className="inner-box overflow-hidden">
                <div className="tab-image">
                  <img
                    src="images/inner-image/testi/t-6.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="avatar-xl">
                    <img
                      src="images/inner-image/user/img-2.jpg"
                      alt=""
                      className="img-fluid rounded-circle border border-4 border-white"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="content-box p-4 pt-5">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">150 ETH</h6>
                          <p className="mb-0 fw-semibold text-muted">Sold</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">322</h6>
                          <p className="mb-0 fw-semibold text-muted">
                            Collection
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="pt-3 pt-lg-0">
                          <h6 className="fw-bold mb-0">16, 009</h6>
                          <p className="mb-0 fw-semibold text-muted">Views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end container */}
  </section>
  {/* start footer */}
  <section className="footer">
    <div className="container">
      <div className="top-footer">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-info mt-4">
              {/* <img src="images/inner-image/logo-dark.png" alt="" height="22"> */}
              <a className="logo f-30 text-dark fw-bold" href="index.html">
                <img
                  src="images/LOGO.png"
                  className="logo-dark"
                  alt=""
                  height={80}
                />
                <img
                  src="images/LOGO.png"
                  className="logo-light"
                  alt=""
                  height={80}
                />
              </a>
              <p className="f-18 mt-2 text-muted">
                Take care of yourself and others to
                <br /> make the future better and give yourself
                <br /> a chance for a better time and a prosperous life
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="mt-4">
                  <h5 className="f-18 fw-bold">Policies</h5>
                  <ul className="list-unstyled footer-link mt-3">
                    <li>
                      <a href="https://termify.io/privacy-policy/1664914177">
                        Security &amp; Provciy
                      </a>
                    </li>
                    <li>
                      <a href="https://coinsgem.com/token/0xD625E86E41ECf854D7baEd5f519a4a57991417Bb">
                        Marketplace
                      </a>
                    </li>
                    <li>
                      <a href="https://termify.io/terms-and-conditions/1664914479">
                        Term &amp; Condition
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mt-4">
                  <h5 className="f-18 fw-bold">Company</h5>
                  <ul className="list-unstyled footer-link mt-3">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="https://pancakeswap.finance/swap?outputCurrency=0xD625E86E41ECf854D7baEd5f519a4a57991417Bb&utm_source=https://coinsgem.com/token/0xD625E86E41ECf854D7baEd5f519a4a57991417Bb&utm_medium=web&utm_campaign=coinsgem.com">
                        Trade IPL
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mt-4 pl-0 pl-lg-4">
              <h5 className="f-18 fw-bold">Follow Us</h5>
              <ul className="list-inline social-icons-list pt-3">
                <li className="list-inline-item">
                  <a href="https://inseparable.cba.pl/404.html">
                    <i className="mdi mdi-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/ipl_token">
                    <i className="mdi mdi-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/inseparable100">
                    <i className="mdi mdi-instagram" />
                  </a>
                </li>
                {/* <li class="list-inline-item">
                              <a href="#"><i class="mdi mdi-linkedin"></i></a>
                          </li>
                          <li class="list-inline-item">
                              <a href="#"><i class="mdi mdi-google-plus"></i></a>
                          </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <p className="my-4 text-muted">© Inseparable.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end footer */}
    
    {/* JAVASCRIPT FILES */}
    <Script src="js/bootstrap.bundle.min.js"></Script>
    <Script src="js/tiny-slider.js"></Script>
    <Script src="js/counter.init.js"></Script>
    <Script src="js/app.js"></Script>
    {/* JAVASCRIPT FILES */}
</>

    );
}
export default Creator;