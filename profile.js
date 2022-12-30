import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { NFTCardTwo } from "../collectionPage/collectionIndex";
import {Button} from "../components/componentsindex";
import { AuthorNFTCardBox } from "../authorPage/componentIndex";
import React, { useState, useEffect, useContext } from "react";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";



const Profile = () => {
  const [created, setCreated] = useState(false);
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNFTs(items);
    });
  }, []);
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
  <section className="profile section bg-light">
    {/* start container */}
    <div className="container">
      {/* start container */}
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
                Profile
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* end container */}
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="inner-heading text-center">
            <div className="mt-4">
              <h1 className="fw-bold">Your Profile</h1>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus aut odio dolores, soluta eius incidunt
                perferendis? Repellat necessitatibus.
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
      {/* start row */}
      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <div className="d-flex align-items-center justify-content-start">
            <div className="avatar">
              <img
                src="images/inner-image/user/img-7.jpg"
                alt=""
                className="img-fluid avatar-xl border border-4 border-white rounded-circle"
              />
            </div>
            <div className="profile-name ms-3">
              <h6 className="fw-bold"> @mickel_fenn..</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex align-items-lg-center justify-content-end">
            <div className="btn border-muted ">
              <p className="mb-0 text-muted">52f4B5d52Ghq..</p>
            </div>
            <div className="button ms-3">
              <button className="btn btn-dark">Follow</button>
            </div>
            <div className="d-flex ms-3">
              <div className="icon d-flex ms-auto">
                <div className="like">
                  <a href="" className="text-primary">
                    <i className="mdi mdi-heart" />
                  </a>
                </div>
                <div className="menu  ms-3">
                  <div className="dropdown rounded">
                    <a
                      href=""
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="text-primary"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
      {/* start row */}
      {/* <div className="row mt-4">
        <div className="col-lg-3">
          <div className="about-detail">
            <h6 className="fw-bold">About Me :</h6>
            <div className="details-box">
              <p className="text-muted f-16">
                Myself mickel_fenn.. The first person singular reflexive
                pronoun. A speaker or writer uses art .
              </p>
              <div className="row d-flex mt-4">
                <div className="col-lg-6">
                  <p className="fw-semibold f-16 mb-0 text-muted">Collection</p>
                  <p className="fw-semibold f-18">201</p>
                </div>
                <div className="col-lg-6">
                  <p className="fw-semibold f-16 mb-0 text-muted">Creation</p>
                  <p className="fw-semibold f-18">419</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Social-detail mt-5">
            <h6 className="fw-bold">Follow Social Media :</h6>
            <div className="details-box">
              <div className="facebook d-flex align-items-center justify-content-start">
                <div className="avatar-xs bg-soft-muted">
                  <i className="mdi mdi-facebook text-muted f-20" />
                </div>
                <div className="icon-content ms-2">
                  <p className="mb-0">Facebook / @fenn_joy</p>
                </div>
              </div>
              <div className="message d-flex align-items-center justify-content-start mt-3">
                <div className="avatar-xs bg-soft-blue">
                  <i className="mdi mdi-message-text text-blue f-20" />
                </div>
                <div className="icon-content ms-2">
                  <p className="mb-0"> messenger / @fenn_joy</p>
                </div>
              </div>
              <div className=" whatsapp d-flex align-items-center justify-content-start mt-3">
                <div className="avatar-xs bg-soft-success">
                  <i className="mdi mdi-whatsapp text-success f-20" />
                </div>
                <div className="icon-content ms-2">
                  <p className="mb-0"> whatsapp / @fenn_joy</p>
                </div>
              </div>
              <div className=" whatsapp d-flex align-items-center justify-content-start mt-3">
                <div className="avatar-xs bg-soft-danger">
                  <i className="mdi mdi-youtube text-danger f-20" />
                </div>
                <div className="icon-content ms-2">
                  <p className="mb-0"> youtube / @fenn_joy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 mt-5">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Creation
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Collections
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                <div className="col-lg-4 mt-4">
                  <div className="tab-box p-4 border-0">
                    <div className="header d-flex align-items-center justify-content-center">
                      <div className="avatar-xs">
                        <img
                          src="images/inner-image/user/img-1.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">
                        @Keven_Chrisi
                      </h6>
                    </div>
                    <div className="card-image mt-2 position-relative">
                      <img
                        src="images/inner-image/explore/img-2.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <span className="badge rounded-pill bg-white text-dark">
                          <i className="mdi mdi-heart text-danger align-middle f-16" />{" "}
                          1.03K
                        </span>
                      </div>
                    </div>
                    <div className="body-content mt-3">
                      <h6 className="fw-bold">Dodo hide the seek</h6>
                      <div className="d-flex align-items-center justify-content-start mt-3">
                        <div className=" slider-content-image d-flex ">
                          <div className="avatar-xs">
                            <img
                              src="images/inner-image/user/img-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child">
                            <img
                              src="images/inner-image/user/img-2.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child position-relative">
                            <img
                              src="images/inner-image/user/img-3.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <p className="text-success mb-0 fw-semibold">
                            0.11100 ETH
                          </p>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="blog-slider-footer">
                        <h6 className="f-14">
                          <i className="mdi mdi-crown f-18 text-primary me-2 align-middle" />
                          Highest Bid{" "}
                          <span className="text-muted ms-2">
                            0.01111.00 ETH
                          </span>
                        </h6>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="tab-box p-4 border-0">
                    <div className="header d-flex align-items-center justify-content-center">
                      <div className="avatar-xs">
                        <img
                          src="images/inner-image/user/img-2.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">
                        @David_Alex
                      </h6>
                    </div>
                    <div className="card-image mt-2 position-relative">
                      <img
                        src="images/inner-image/explore/img-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <span className="badge rounded-pill bg-white text-dark">
                          <i className="mdi mdi-heart text-danger align-middle f-16" />{" "}
                          1.85K
                        </span>
                      </div>
                    </div>
                    <div className="body-content mt-3">
                      <h6 className="fw-bold">Abstract Painting</h6>
                      <div className="d-flex align-items-center justify-content-start mt-3">
                        <div className=" slider-content-image d-flex ">
                          <div className="avatar-xs">
                            <img
                              src="images/inner-image/user/img-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child">
                            <img
                              src="images/inner-image/user/img-2.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <p className="text-success mb-0 fw-semibold">
                            0.11100 ETH
                          </p>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="blog-slider-footer">
                        <h6 className="f-14">
                          <i className="mdi mdi-crown f-18 text-primary me-2 align-middle" />
                          Highest Bid{" "}
                          <span className="text-muted ms-2">
                            0.01111.00 ETH
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="tab-box p-4 border-0">
                    <div className="header d-flex align-items-center justify-content-center">
                      <div className="avatar-xs">
                        <img
                          src="images/inner-image/user/img-4.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">
                        @Steva_Robart
                      </h6>
                    </div>
                    <div className="card-image mt-2 position-relative">
                      <img
                        src="images/inner-image/explore/img-3.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <span className="badge rounded-pill bg-white text-dark">
                          <i className="mdi mdi-heart text-danger align-middle f-16" />{" "}
                          0.86K
                        </span>
                      </div>
                    </div>
                    <div className="body-content mt-3">
                      <h6 className="fw-bold">The Chirstoper art</h6>
                      <div className="d-flex align-items-center justify-content-start mt-3">
                        <div className=" slider-content-image d-flex ">
                          <div className="avatar-xs">
                            <img
                              src="images/inner-image/user/img-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child">
                            <img
                              src="images/inner-image/user/img-2.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child">
                            <img
                              src="images/inner-image/user/img-4.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child position-relative">
                            <img
                              src="images/inner-image/user/img-3.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <p className="text-success mb-0 fw-semibold">
                            0.12525 ETH
                          </p>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="blog-slider-footer">
                        <h6 className="f-14">
                          <i className="mdi mdi-crown f-18 text-primary me-2 align-middle" />
                          Highest Bid{" "}
                          <span className="text-muted ms-2">
                            0.01111.00 ETH
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="tab-box p-4 border-0">
                    <div className="header d-flex align-items-center justify-content-center">
                      <div className="avatar-xs">
                        <img
                          src="images/inner-image/user/img-5.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">
                        @jimmy_dom
                      </h6>
                    </div>
                    <div className="card-image mt-2 position-relative">
                      <img
                        src="images/inner-image/explore/img-5.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <span className="badge rounded-pill bg-white text-dark">
                          <i className="mdi mdi-heart text-danger align-middle f-16" />{" "}
                          1.18K
                        </span>
                      </div>
                    </div>
                    <div className="body-content mt-3">
                      <h6 className="fw-bold">The Boy with the firefly</h6>
                      <div className="d-flex align-items-center justify-content-start mt-3">
                        <div className=" slider-content-image d-flex ">
                          <div className="avatar-xs">
                            <img
                              src="images/inner-image/user/img-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child position-relative">
                            <img
                              src="images/inner-image/user/img-3.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <p className="text-success mb-0 fw-semibold">
                            0.85858 ETH
                          </p>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="blog-slider-footer">
                        <h6 className="f-14">
                          <i className="mdi mdi-crown f-18 text-primary me-2 align-middle" />
                          Highest Bid{" "}
                          <span className="text-muted ms-2">0.085858 ETH</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="tab-box p-4 border-0">
                    <div className="header d-flex align-items-center justify-content-center">
                      <div className="avatar-xs">
                        <img
                          src="images/inner-image/user/img-6.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">
                        @mickel_fenn
                      </h6>
                    </div>
                    <div className="card-image mt-2 position-relative">
                      <img
                        src="images/inner-image/explore/img-6.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <span className="badge rounded-pill bg-white text-dark">
                          <i className="mdi mdi-heart text-danger align-middle f-16" />{" "}
                          2.38K
                        </span>
                      </div>
                    </div>
                    <div className="body-content mt-3">
                      <h6 className="fw-bold">The Chirstoper</h6>
                      <div className="d-flex align-items-center justify-content-start mt-3">
                        <div className=" slider-content-image d-flex ">
                          <div className="avatar-xs">
                            <img
                              src="images/inner-image/user/img-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child position-relative">
                            <img
                              src="images/inner-image/user/img-4.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child position-relative">
                            <img
                              src="images/inner-image/user/img-6.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <p className="text-success mb-0 fw-semibold">
                            0.85858 ETH
                          </p>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="blog-slider-footer">
                        <h6 className="f-14">
                          <i className="mdi mdi-crown f-18 text-primary me-2 align-middle" />
                          Highest Bid{" "}
                          <span className="text-muted ms-2">0.085858 ETH</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="tab-box p-4 border-0">
                    <div className="header d-flex align-items-center justify-content-start">
                      <div className="avatar-xs">
                        <img
                          src="images/inner-image/user/img-1.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">
                        @kristian_fel
                      </h6>
                    </div>
                    <div className="card-image mt-2 position-relative">
                      <img
                        src="images/inner-image/explore/img-7.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <span className="badge rounded-pill bg-white text-dark">
                          <i className="mdi mdi-heart text-danger align-middle f-16" />{" "}
                          0.93K
                        </span>
                      </div>
                    </div>
                    <div className="body-content mt-3">
                      <h6 className="fw-bold">pop art Painting</h6>
                      <div className="d-flex align-items-center justify-content-start mt-3">
                        <div className=" slider-content-image d-flex ">
                          <div className="avatar-xs">
                            <img
                              src="images/inner-image/user/img-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child position-relative">
                            <img
                              src="images/inner-image/user/img-4.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="avatar-xs top-child position-relative">
                            <img
                              src="images/inner-image/user/img-6.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <p className="text-success mb-0 fw-semibold">
                            0.64685 ETH
                          </p>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="blog-slider-footer">
                        <h6 className="f-14">
                          <i className="mdi mdi-crown f-18 text-primary me-2 align-middle" />
                          Highest Bid{" "}
                          <span className="text-muted ms-2">0.52584 ETH</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <button className="btn btn-white text-dark shadow rounded-pill">
                        <i className="mdi mdi-restart f-18 align-middle" /> View
                        All Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane blog fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="collection-items">
                    <div className="blog-box">
                      <div className="collection-image">
                        <div className="blog-image">
                          <div className="top-image d-flex justify-content-between">
                            <img
                              src="images/inner-image/blog/top1.png"
                              alt=""
                              className="img-fluid"
                            />
                            <img
                              src="images/inner-image/blog/top2.png"
                              alt=""
                              className="img-fluid"
                            />
                            <img
                              src="images/inner-image/blog/top3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="mt-3">
                            <img
                              src="images/inner-image/blog/main-1.png"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="collection-content mt-3">
                        <div className="d-flex align-items-center">
                          <div className="collection-title">
                            <a href="" className="fw-bold h5">
                              Digital Art Gallery
                            </a>
                          </div>
                          <div className="collection-like-icon ms-auto">
                            <p className="fw-semibold mb-0">
                              <a href="">
                                <i className="mdi mdi-heart" />
                              </a>{" "}
                              2.05K
                            </p>
                          </div>
                        </div>
                        <div className="blog-profile mt-3">
                          <h6 className="f-14 text-muted">
                            4 items · Created by
                            <a href="" className="text-muted">
                              <img
                                src="images/inner-image/user/img-1.jpg"
                                alt=""
                                className="img-fluid rounded-circle avatar-xs mx-2"
                              />
                              <span>@Dezy_resato...</span>
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="collection-items">
                    <div className="blog-box">
                      <div className="collection-image">
                        <div className="blog-image">
                          <div className="top-image d-flex justify-content-between">
                            <img
                              src="images/inner-image/blog/top4.png"
                              alt=""
                              className="img-fluid"
                            />
                            <img
                              src="images/inner-image/blog/top5.png"
                              alt=""
                              className="img-fluid"
                            />
                            <img
                              src="images/inner-image/blog/top6.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="mt-3">
                            <img
                              src="images/inner-image/blog/main-2.png"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="collection-content mt-3">
                        <div className="d-flex align-items-center">
                          <div className="collection-title">
                            <a href="" className="fw-bold h5">
                              Colorful Painting
                            </a>
                          </div>
                          <div className="collection-like-icon ms-auto">
                            <p className="fw-semibold mb-0">
                              <a href="">
                                <i className="mdi mdi-heart" />
                              </a>{" "}
                              1.27K
                            </p>
                          </div>
                        </div>
                        <div className="blog-profile mt-3">
                          <h6 className="f-14 text-muted">
                            6 items · Created by
                            <a href="" className="text-muted">
                              <img
                                src="images/inner-image/user/img-2.jpg"
                                alt=""
                                className="img-fluid rounded-circle avatar-xs mx-2"
                              />
                              <span>@william_jamy... </span>
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <AuthorNFTCardBox
      // collectiables={collectiables}
      created={created}
      nfts={nfts}
      myNFTS={myNFTs}
      />
      {/* end row */}
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


export default Profile;