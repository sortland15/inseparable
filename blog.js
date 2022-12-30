import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {Button} from "../components/componentsindex";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import React, { useEffect, useState, useContext } from "react";
const Blog = () => {
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
  <section className="inner-blog section bg-light">
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
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="inner-heading text-center">
            <div className="mt-4">
              <h1 className="fw-bold">Blog</h1>
              <p className="text-muted">
                Ipsum omnis iste natus error sit voluptatem accusantium <br />{" "}
                doloremque laudantium, totam rem aperiam.
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
      <div className="row mt-5">
        <div className="col-lg-8 order-2 order-lg-1">
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-item mt-4">
                <div className="blog-image position-relative">
                  <img
                    src="images/inner-image/blog-2/img-11.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="position-absolute top-0 end-0 mt-2 me-2 f-18 ">
                    <span className="badge rounded-pill bg-white py-2 px-3 text-muted">
                      <span>
                        <i className="mdi mdi-message-text-outline align-middle" />{" "}
                        1
                      </span>
                      <span className="ms-2">
                        <i className="mdi mdi-fire align-middle" />
                        2312
                      </span>
                      <span className="ms-2">
                        <i className="mdi mdi-battery-charging" />4
                      </span>
                    </span>
                  </div>
                </div>
                <div className="blog-content mt-3">
                  <h5 className="fw-bold">NFT and its versatility</h5>
                  <p className="text-muted f-15 mb-3">
                    NFT is not only about pictures that have a price. NFT is
                    also music, art and much more, they are not limited to one
                    application. What are they and what do they contribute to?
                    Have a look!
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  {/* <div class="d-flex align-items-center">
                                  <div class="flex-shrink-0">
                                      <div class="avatar">
                                          <img src="images/inner-image/user/img-1.jpg" alt=""
                                              class="img-fluid avatar-md rounded-circle">
                                      </div>
                                  </div>
                                  <div class="flex-grow-1 ms-3">
                                      <h6 class="text-blue mb-0">Mamie Barnett</h6>
                                      <p class="mb-0 f-14 text-muted">VERIFIED WRITER</p>
                                  </div>
                              </div> */}
                  <div className="date ms-auto">
                    <p className="fw-semibold f-18 mb-0">11 October</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item mt-4">
                <div className="blog-image position-relative">
                  <img
                    src="images/inner-image/blog-2/img-22.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="position-absolute top-0 end-0 mt-2 me-2 f-18">
                    <span className="badge rounded-pill bg-white py-2 px-3 text-muted">
                      <span>
                        <i className="mdi mdi-message-text-outline align-middle" />{" "}
                        1
                      </span>
                      <span className="ms-2">
                        <i className="mdi mdi-fire align-middle" />
                        2312
                      </span>
                      <span className="ms-2">
                        <i className="mdi mdi-battery-charging" />4
                      </span>
                    </span>
                  </div>
                </div>
                <div className="blog-content mt-3">
                  <h5 className="fw-bold">Popularisation NFT'</h5>
                  <p className="text-muted f-15 mb-3">
                    As you know, the NFT market is spreading diametrically.
                    Until recently, it started its career with a small number of
                    collections, but now it has hundreds of thousands of
                    collections and is still growing. What to do not to be left
                    behind? How to create your own NFT?
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  {/* <div class="d-flex align-items-center">
                                  <div class="flex-shrink-0">
                                      <div class="avatar">
                                          <img src="images/inner-image/user/img-1.jpg" alt=""
                                              class="img-fluid avatar-md rounded-circle">
                                      </div>
                                  </div>
                                  <div class="flex-grow-1 ms-3">
                                      <h6 class="text-blue mb-0">Mamie Barnett</h6>
                                      <p class="mb-0 f-14 text-muted">VERIFIED WRITER</p>
                                  </div>
                              </div> */}
                  <div className="date ms-auto">
                    <p className="fw-semibold f-18 mb-0">11 October</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item mt-4">
                <div className="blog-image position-relative">
                  <img
                    src="images/inner-image/blog-2/img-33.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="position-absolute top-0 end-0 mt-2 me-2 f-18">
                    <span className="badge rounded-pill bg-white py-2 px-3 text-muted">
                      <span>
                        <i className="mdi mdi-message-text-outline align-middle" />{" "}
                        1
                      </span>
                      <span className="ms-2">
                        <i className="mdi mdi-fire align-middle" />
                        2312
                      </span>
                      <span className="ms-2">
                        <i className="mdi mdi-battery-charging" />4
                      </span>
                    </span>
                  </div>
                </div>
                <div className="blog-content mt-3">
                  <h5 className="fw-bold">
                    A famous figure behind the face of the NFT
                  </h5>
                  <p className="text-muted f-15 mb-3">
                    As of today, NFTs are created by not only unknown people
                    trying to show themselves to the world. Even people like
                    Mike Tyson create their paintings and pride themselves on
                    their fame. Have a look!
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  {/* <div class="d-flex align-items-center">
                                  <div class="flex-shrink-0">
                                      <div class="avatar">
                                          <img src="images/inner-image/user/img-1.jpg" alt=""
                                              class="img-fluid avatar-md rounded-circle">
                                      </div>
                                  </div>
                                  <div class="flex-grow-1 ms-3">
                                      <h6 class="text-blue mb-0">Mamie Barnett</h6>
                                      <p class="mb-0 f-14 text-muted">VERIFIED WRITER</p>
                                  </div>
                              </div> */}
                  <div className="date ms-auto">
                    <p className="fw-semibold f-18 mb-0">11 October</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item mt-4">
                <div className="blog-image position-relative">
                  <img
                    src="images/inner-image/blog-2/img-44.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="position-absolute top-0 end-0 mt-2 me-2 f-18">
                    <span className="badge rounded-pill bg-white py-2 px-3 text-muted">
                      <span>
                        <i className="mdi mdi-message-text-outline align-middle" />{" "}
                        1
                      </span>
                      <span className="ms-2">
                        <i className="mdi mdi-fire align-middle" />
                        2312
                      </span>
                      <span className="ms-2">
                        <i className="mdi mdi-battery-charging" />4
                      </span>
                    </span>
                  </div>
                </div>
                <div className="blog-content mt-3">
                  <h5 className="fw-bold">
                    The Great Battle of the NFT Markets
                  </h5>
                  <p className="text-muted f-15 mb-3">
                    Today's NFT market is not limited to one or two sides, it is
                    already in the hundreds and is still expanding. Are you
                    wondering which of them are the best in their field? Which
                    are the most profitable to trade? Here is the top list of
                    the highest rated NFT markets by their users. Have a look!
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  {/* <div class="d-flex align-items-center">
                                  <div class="flex-shrink-0">
                                      <div class="avatar">
                                          <img src="images/inner-image/user/img-1.jpg" alt=""
                                              class="img-fluid avatar-md rounded-circle">
                                      </div>
                                  </div>
                                  <div class="flex-grow-1 ms-3">
                                      <h6 class="text-blue mb-0">Mamie Barnett</h6>
                                      <p class="mb-0 f-14 text-muted">VERIFIED WRITER</p>
                                  </div>
                              </div> */}
                  <div className="date ms-auto">
                    <p className="fw-semibold f-18 mb-0">11 October</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 order-1 order-lg-2">
          <div className="blog-side-box mb-5 mb-lg-0">
            <div className="items">
              <h6 className="fw-bold mb-3">Stay Updates</h6>
              <hr />
              <div className="title-bottom-border" />
              <div className="categorie-box mt-4">
                <p className="text-muetd mb-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="forum mt-2">
                  <form className="form">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Email"
                    />
                  </form>
                </div>
                <div className="mt-4">
                  <button className="btn btn-dark w-100">Join with us!</button>
                </div>
              </div>
            </div>
            <div className="items mt-4">
              <h6 className="fw-bold mb-3">Let's Connect</h6>
              <hr />
              <div className="title-bottom-border" />
              <div className="categorie-box mt-4">
                <div className="d-flex">
                  <div className="you-tube">
                    <div className="avatar-sm align-items-center bg-danger">
                      <i className="mdi mdi-youtube f-30 text-white" />
                    </div>
                  </div>
                  <div className="facebook mx-3">
                    <div className="avatar-sm align-items-center bg-dark">
                      <i className="mdi mdi-facebook f-30 text-white" />
                    </div>
                  </div>
                  <div className="dribbble">
                    <div className="avatar-sm align-items-center bg-pink">
                      <i className="mdi mdi-instagram f-30 text-white" />
                    </div>
                  </div>
                  <div className="facebook mx-3">
                    <div className="avatar-sm align-items-center bg-blue">
                      <i className="mdi mdi-twitter f-30 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items mt-4">
              <h6 className="fw-bold mb-3">Categories</h6>
              <hr />
              <div className="title-bottom-border" />
              <div className="categorie-box mt-4">
                <div className="d-flex align-items-center">
                  <h6 className="fw-semibold mb-0">General</h6>
                  <div className="ms-auto">
                    <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                      425
                    </span>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="d-flex align-items-center">
                  <h6 className="fw-semibold mb-0">NFT Update</h6>
                  <div className="ms-auto">
                    <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                      425
                    </span>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="d-flex align-items-center">
                  <h6 className="fw-semibold mb-0">Marketplace</h6>
                  <div className="ms-auto">
                    <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                      425
                    </span>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="d-flex align-items-center">
                  <h6 className="fw-semibold mb-0">Platform Update</h6>
                  <div className="ms-auto">
                    <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                      425
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="items mt-4">
              <h6 className="fw-bold mb-3">Tag</h6>
              <hr />
              <div className="title-bottom-border" />
              <div className="tag-box mt-4">
                <span className="badge">#nft</span>
                <span className="badge">#daily work</span>
                <span className="badge">#creabik</span>
                <span className="badge">#btc</span>
                <span className="badge">#mint</span>
                <span className="badge">#bankrupt</span>
                <span className="badge">#ceo</span>
                <span className="badge">#post</span>
                <span className="badge">#update</span>
                <span className="badge">#Marketplace</span>
                <span className="badge">#advantages</span>
                <span className="badge">#great</span>
                <span className="badge">#vlogs</span>
                <span className="badge">#crypto</span>
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
export default Blog;