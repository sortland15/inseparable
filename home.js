import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import {NFTCard, Loader, Button} from "../components/componentsindex";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const Home = () => {
  const { checkIfWalletConnected,connectWallet, currentAccount } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const router = useRouter();
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    if(currentAccount){
    fetchNFTs().then((items) => {
      setNfts(items.reverse());
      setNftsCopy(items);
    });
  }
  }, []);
  return (
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
    {/* start home */}
    <section className=" home-3 section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="home-content text-start">
              <div className="title home-heading">
                <h1 className="fw-bold">Discover & Create Amazing NFTs!</h1>
                <p>
                  Inseparable NFT Marketplace is a platform which allows its users to create NFTs,
                  List NFTs For Sale and, Re-List NFTs on the Marketplace.
                  <br />
                  Once a User Purchases an NFT, the NFT is transferred Directly to The User's Wallet.
                  Inseparable NFT Marketplace allows these amazing NFT Creation Features at a very low cost.
                </p>
              </div>
              <div className="mt-5 border-bottom" />
              <div className="count-detail mt-5">
                <div className="row">
                  <div className="col-lg-4 col-6">
                    <div className="counter-box">
                      <div className="d-flex align-items-center justify-content-start">
                        <h2
                          className="counter_value fw-bold"
                          data-bs-target={770}
                        >
                          770
                        </h2>
                        <span className="h2">+</span>
                      </div>
                      <p className="counter-caption">Total NFTs Created</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="counter-box">
                      <div className="d-flex align-items-center justify-content-start">
                        <h2
                          className="counter_value fw-bold"
                          data-bs-target={122}
                        >
                          122
                        </h2>
                        <span className="h2 fw-bold">K</span>
                      </div>
                      <p className="counter-caption">Daily sales</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="counter-box">
                      <div className="d-flex align-items-center justify-content-start">
                        <span className="h2 fw-bold">$ </span>
                        <h2 className="counter_value fw-bold" data-bs-target={42}>
                          42
                        </h2>
                        <span className="h2 fw-bold">.000.000</span>
                      </div>
                      <p className="counter-caption">Daily vol</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="card">
              <img
                src="images/img.png"
                alt="img"
                className="img-fluid"
              />
              {/* <div className="card-body px-5 py-4">
                <h2 className="mb-0 fw-bold">DISCOVER</h2>
                <div className="deatil my-2">
                  <p className="fw-bold mb-0 f-14">Gallery NFT</p>
                  <div className="d-flex">
                    <span className="h4 fw-bold" />
                    <p className="f-14 fw-bold mt-1 ms-2" />
                  </div>
                </div>
                <div className="d-flex"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end home */}
    {/* blog section */}
    <section className="blog-3 section bg-white" id="seller">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-heading pb-5">
              <div className="d-flex align-items-center ">
                <h2 className="fw-bold">Featured NFTs</h2>
                <h6 className="ms-auto">
                  {/* <a href="" className="text-muted ">
                    View All Collation
                  </a> */}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-3 col-md-6">
            <div className="blog-box p-3 mt-3">
              <div className="blog-image">
                <img
                  src="images/blog-3/img-1.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">Senseless Void</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> 0.17 ETH
                    </h6>
                    <p className="f-20 text-muted mb-0">By Cats</p>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn">
                      <i className="mdi mdi-heart text-danger f-18 align-middle" />
                      28
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-box p-3 mt-3">
              <div className="blog-image">
                <img
                  src="images/blog-3/img-2.png"
                  alt=""
                  className="img-fluid w-49"
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">Ocean Swift</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> 0.19 ETH
                    </h6>
                    <p className="f-20 text-muted mb-0">By Speider</p>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">
                      <i className="mdi mdi-heart-outline f-18 align-middle" />{" "}
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-box p-3 mt-3">
              <div className="blog-image">
                <img
                  src="images/blog-3/img-3.png"
                  alt=""
                  className="img-fluid w-10"
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">Ashoka Shell</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> 0.04 ETH
                    </h6>
                    <p className="f-20 text-muted mb-0">By Birds</p>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">
                      <i className="mdi mdi-heart-outline f-18 align-middle" />{" "}
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-box p-3 mt-3">
              <div className="blog-image">
                <img
                  src="images/blog-3/img-4.png"
                  alt=""
                  className="img-fluid w-15"
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">Yeti Crypt</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> 0.14 ETH
                    </h6>
                    <p className="f-20 text-muted mb-0">By Cats</p>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">
                      <i className="mdi mdi-heart text-danger f-18 align-middle" />{" "}
                      100
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-box p-3 mt-3">
              <div className="blog-image">
                <img
                  src="images/blog-3/img-5.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">Argus Panoptes</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> 0.24 ETH
                    </h6>
                    <p className="f-20 text-muted mb-0">By Halloween </p>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">
                      <i className="mdi mdi-heart-outline f-18 align-middle" />{" "}
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-box p-3 mt-3">
              <div className="blog-image">
                <img
                  src="images/blog-3/img-6.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">Frank Fabel</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> 0.24 ETH
                    </h6>
                    <p className="f-20 text-muted mb-0">By Dragon</p>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">
                      <i className="mdi mdi-heart-outline f-18 align-middle" />{" "}
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-box p-3 mt-3">
              <div className="blog-image">
                <img
                  src="images/blog-3/img-7.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">Great Ape</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> 0.24 ETH
                    </h6>
                    <p className="f-20 text-muted mb-0">By Android</p>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">
                      <i className="mdi mdi-heart-outline f-18 align-middle" />{" "}
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-box p-3 mt-3">
              <div className="blog-image">
                <img
                  src="images/blog-3/img-8.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">Dropbar</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> 0.24 ETH
                    </h6>
                    <p className="f-20 text-muted mb-0">By Barbi</p>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn">
                      <i className="mdi mdi-heart text-danger f-18 align-middle" />
                      100
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


        {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
        </div>
      </div>
    </section>
    {/* end blog section */}
    {/* popular-art section */}
    <section className="section popular-art bg-light" id="aboutus">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-heading pb-5">
              <div className="d-flex align-items-center">
                <h2 className="fw-bold">Your Gallery</h2>
                <h6 className="ms-auto">
                  <a href="" className="text-muted">
                    View All Collation
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="pop-box">
              <div className="pop-heading">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar position-relative">
                        <img
                          src="images/pop-art/pop-1.png"
                          alt=""
                          className="img-fluid"
                        />
                        <span className="position-absolute bottom-0 start-100 translate-middle-x p-2 bg-blue border border-4 border-white rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h6 className="mb-0 fw-bold">Ocean Swift</h6>
                      <p className="mb-0">C245bsTd112...47cSta85mB9</p>
                    </div>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">Follow</button>
                  </div>
                </div>
              </div>
              <div className="pop-image mt-4">
                <div className="row">
                  <div className="col">
                    <img
                      src="images/pop-art/1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="pop-box">
              <div className="pop-heading">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar position-relative">
                        <img
                          src="images/pop-art/pop-2.png"
                          alt=""
                          className="img-fluid"
                        />
                        <span className="position-absolute bottom-0 start-100 translate-middle-x p-2 bg-blue border border-4 border-white rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h6 className="mb-0 fw-bold">Frank Fabel</h6>
                      <p className="mb-0">C245bsTd112...47cSta85mB9</p>
                    </div>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">Follow</button>
                  </div>
                </div>
              </div>
              <div className="pop-image mt-4">
                <div className="row">
                  <div className="col">
                    <img
                      src="images/pop-art/i-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/i-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/i-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/i-4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="pop-box">
              <div className="pop-heading">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar position-relative">
                        <img
                          src="images/pop-art/pop-3.png"
                          alt=""
                          className="img-fluid"
                        />
                        <span className="position-absolute bottom-0 start-100 translate-middle-x p-2 bg-blue border border-4 border-white rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h6 className="mb-0 fw-bold">Argus Panoptes</h6>
                      <p className="mb-0">C245bsTd112...47cSta85mB9</p>
                    </div>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">Follow</button>
                  </div>
                </div>
              </div>
              <div className="pop-image mt-4">
                <div className="row">
                  <div className="col">
                    <img
                      src="images/pop-art/s-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/s-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/s-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/s-4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="pop-box">
              <div className="pop-heading">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar position-relative">
                        <img
                          src="images/pop-art/pop-4.png"
                          alt=""
                          className="img-fluid"
                        />
                        <span className="position-absolute bottom-0 start-100 translate-middle-x p-2 bg-blue border border-4 border-white rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h6 className="mb-0 fw-bold">Senseless Void</h6>
                      <p className="mb-0">C245bsTd112...47cSta85mB9</p>
                    </div>
                  </div>
                  <div className="blog-like-button ms-auto">
                    <button className="btn btn-soft-muted">Follow</button>
                  </div>
                </div>
              </div>
              <div className="pop-image mt-4">
                <div className="row">
                  <div className="col">
                    <img
                      src="images/pop-art/t-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/t-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/t-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="images/pop-art/t-4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end popular-art */}
    {/* cta section */}
    <section className="section cta-2">
      <div className="container">
        <div className="cta-box">
          {/* <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="cta-content">
                        <h1 class="text-white">Discover Collect, And <span>Sell</span> Extraordinary NFTs</h1>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="cta-image">
                        <img src="images/cta.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </section>
    {/* end cta */}
    {/* start footer */}
    <section className="footer">
      <div className="container">
        <div className="top-footer">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-info mt-4">
                {/* <img src="images/inner-image/logo-dark.png" alt="" height="22"> */}
                <Link className="logo f-30 text-dark fw-bold" href="/">
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
                </Link>
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
                        <Link href="https://termify.io/privacy-policy/1664914177">
                        Security &amp; Privacy
                        </Link>
                      </li>
                      <li>
                        <Link href="/register">
                        Register
                        </Link>
                      </li>
                      <li>
                        <Link href="/creator">
                          Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                        Terms &amp; Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mt-4">
                    <h5 className="f-18 fw-bold">Company</h5>
                    <ul className="list-unstyled footer-link mt-3">
                      <li>
                        <Link href="/">
                        Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                        Trade IPL
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                        Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          Contact
                        </Link>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <p className="my-4 text-muted">© Inseparable | NFT Marketplace | 2022</p>
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
  
  )
}
export default Home;
