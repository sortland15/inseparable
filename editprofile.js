import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {Button} from "../components/componentsindex";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import React, { useEffect, useState, useContext } from "react";
const EditProfile = () => {
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
  <section className="home section bg-light">
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
                Edit profile
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="inner-heading text-center">
            <div className="mt-4">
              <h1 className="fw-bold">Edit Profile</h1>
              <p className="text-muted">
                A New Place To Collect And Connect NFT Across The World. It’s
                come with a creative <br /> design, home page options, different
                explore and digital asset pages and items.
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
      <div className="mt-5 pt-lg-4 pt-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="avatar">
                  <img
                    src="images/inner-image/img-1.png"
                    alt=""
                    className="img-fluid rounded-circle avatar-xl"
                  />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <div className="d-flex">
                  <button className="btn btn-dark shadow">Upload Photo</button>
                  <button className="btn btn-white shadow ms-0 ms-lg-3 text-dark">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <form className="info-box">
          <div className="row">
            <div className="col-lg-5">
              <h4 className="fw-bold">
                Account Info{" "}
                <i className="mdi mdi-information-outline f-30 align-middle" />
              </h4>
              <div className=" mt-4">
                <div className="mt-3">
                  <div className="Name">
                    <label
                      htmlFor="validationDefault01"
                      className="form-label fw-semibold"
                    >
                      Display Name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      placeholder="mickel_fenn"
                      required=""
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="Name">
                    <div className="d-flex">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label fw-semibold"
                      >
                        {" "}
                        Email :
                      </label>
                      <p className="mb-0 f-14 text-muted ms-auto">
                        Enter Valid Email * mickel@gmail.com
                      </p>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault02"
                      placeholder="Enter Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="Name">
                    <label
                      htmlFor="validationDefault03"
                      className="form-label fw-semibold"
                    >
                      {" "}
                      Custom URL :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="LepordThemes"
                      defaultValue="LepordThemes"
                      required=""
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="Name">
                    <label
                      htmlFor="validationDefault03"
                      className="form-label fw-semibold"
                    >
                      {" "}
                      Bio :
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h4 className="fw-bold mt-lg-0 mt-4">
                Your Social media{" "}
                <i className="mdi mdi-heart-outline f-30 align-middle" />
              </h4>
              <div className=" mt-4">
                <div className="mt-3">
                  <div className="Name">
                    <label
                      htmlFor="validationDefault3"
                      className="form-label fw-semibold"
                    >
                      Facebook :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault3"
                      placeholder="Facebook Username"
                      required=""
                    />
                    {/* <button type="submit" className="btn btn-sm btn-blue mt-3">
                      <i className="mdi mdi-facebook f-18 align-middle me-2" />
                      Connect To Facebook
                    </button> */}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="Name">
                    <label
                      htmlFor="validationDefault001"
                      className="form-label fw-semibold"
                    >
                      Twitter :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault001"
                      placeholder="twitter Username"
                      required=""
                    />
                    {/* <button type="submit" className="btn btn-sm btn-blue mt-3">
                      <i className="mdi mdi-twitter f-18 align-middle me-2" />
                      Connect To twitter
                    </button> */}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="Name">
                    <label
                      htmlFor="validationDefault04"
                      className="form-label fw-semibold"
                    >
                      Linkedin :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="Linkedin Username"
                      required=""
                    />
                    {/* <button type="submit" className="btn btn-sm btn-blue mt-3">
                      <i className="mdi mdi-linkedin f-18 align-middle me-2" />
                      Connect To Linkedin
                    </button> */}
                  </div>
                </div>
                {/* <div className="mt-4">
                  <label
                    htmlFor="validationDefault03"
                    className="form-label fw-semibold"
                  >
                    Profile :
                  </label>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar">
                        <img
                          src="images/inner-image/img-1.png"
                          alt=""
                          className="img-fluid rounded-circle avatar-sm"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex">
                        <div className="button">
                          <input type="file" className="btn btn-dark" />
                        </div>
                        <button className="btn btn-white shadow ms-3 text-dark">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <hr className="my-4" />
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              neque laboriosam odit non amet eligendi, <br /> assumenda labore
              tempore quam numquam.
            </p>
            <div className="submit-button">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
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
export default EditProfile;