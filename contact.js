import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {Button} from "../components/componentsindex";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import React, { useEffect, useState, useContext } from "react";
const Contact = () => {
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
  <section className="contact section bg-light  overflow-hidden">
    {/* start container */}
    <div className="container">
      <div className="row mt-4 justify-content-start">
        <div className="col-lg-8">
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
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="col-lg-8">
          <div className="inner-heading">
            <div className="mt-4">
              <h1 className="fw-bold">Hi, 🙋‍♀️</h1>
              <p className="text-muted">Contact our team as we can help you</p>
            </div>
          </div>
        </div>
      </div>
      <form
        className="rd-mailform mt-4"
        data-form-output="form-output-global"
        data-form-type="contact"
        method="post"
        action="bat/rd-mailform.php"
      >
        <div className="row justify-content-start">
          <div className="col-lg-8">
            <div className="info-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mt-4 form-wrap form-wrap-validation">
                    <label
                      className="form-label fw-semibold"
                      htmlFor="form-1-email"
                    >
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      id="form-1-email"
                      placeholder="Enter Your Email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mt-4 form-wrap form-wrap-validation">
                    <label
                      className="form-label fw-semibold"
                      htmlFor="form-1-name"
                    >
                      Full Name
                    </label>
                    <input
                      className="form-control"
                      id="form-1-name"
                      placeholder="Daniels"
                      type="text"
                      name="name"
                      data-constraints="@Required"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mt-4 form-wrap form-wrap-validation">
                    <label
                      className="form-label fw-semibold"
                      htmlFor="form-1-country"
                    >
                      Select Country
                    </label>
                    <select
                      className="form-select"
                      id="form-1-country"
                      placeholder="Select Country"
                      name="country"
                      aria-label="Default select example"
                    >
                      <option selected="">Select Country</option>
                      <option value="United States">United States</option>
                      <option value="Norway">Norway</option>
                      <option value="Canada">Canada</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mt-4 form-wrap form-wrap-validation">
                    <label
                      className="form-label fw-semibold"
                      htmlFor="form-1-subject"
                    >
                      Select a Subject
                    </label>
                    <select
                      className="form-select"
                      id="form-1-subject"
                      placeholder="Select a Subject"
                      name="subject"
                      aria-label="Default select example"
                    >
                      <option selected="">Select a Subject</option>
                      <option value="NFT">NFT</option>
                      <option value="Support">Support</option>
                      <option value="Privacy">Privacy</option>
                      <option value="Wallet">Wallet</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="my-4 form-wrap form-wrap-validation">
                    <label
                      className="form-label fw-semibold"
                      htmlFor="form-1-message"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="form-1-message"
                      placeholder="Message"
                      name="message"
                      rows={3}
                      data-constraints="@Required"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="submit-button mt-4">
              <div className="form-button">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="request-image position-absolute top-0 end-0 p-0">
              <img src="images/inner-image/contact-bg.png" alt="" class="img-fluid">
          </div> */}
      </form>
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
  {/* Global Mailform Output*/}
  <div className="snackbars" id="form-output-global" />
  
    {/* JAVASCRIPT FILES */}
    <Script src="js/bootstrap.bundle.min.js"></Script>
    <Script src="js/tiny-slider.js"></Script>
    <Script src="js/counter.init.js"></Script>
    <Script src="js/app.js"></Script>
    {/* JAVASCRIPT FILES */}
</>

    );
}
export default Contact;