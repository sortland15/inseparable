import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
export default function PostDetails(){
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
  <section className="forum section bg-light">
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
                Forum
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="inner-heading text-center">
            <div className="mt-4">
              <h1 className="fw-bold">Forum</h1>
              <p className="text-muted">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium <br /> doloremque laudantium, totam rem aperiam.
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
          <div className="forum-item">
            <div className="forum-box">
              <div className="d-flex align-items-center justify-content-start">
                <div className="avatar forum-profile">
                  <img
                    src="images/inner-image/user/img-1.jpg"
                    alt=""
                    className="img-fluid rounded-circle avatar-md"
                  />
                </div>
                <div className="forum-profile-deatails">
                  <h6 className="mb-0 ms-2 fw-bold"> @Monica_Lucas </h6>
                </div>
                <div className="body-content ms-auto">
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
                    <div className="avatar-xs top-child position-relative">
                      <img
                        src="images/inner-image/user/img-4.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="forum-details mt-4">
                <h4 className="fw-bold">
                  Create, sell or collect digital items.
                </h4>
                <p className="f-18 text-muted mt-3">
                  Unit of data stored on a digital ledger, called a blockchain,
                  that certifies a digital asset to be unique and therefore not
                  interchangeable.
                </p>
                <span className="badge rounded-pill bg-white shadow-sm border text-blue py-2 px-3 f-14 fw-normal">
                  #NFT Marketplace#NFT Artists#Art
                </span>
                <hr className="my-4" />
                <div className="d-flex">
                  <div className="like">
                    <h6 className="f-14 fw-semibold">
                      <i className="mdi mdi-heart text-danger f-18 align-middle me-2" />
                      2.4K
                    </h6>
                  </div>
                  <div className="message ms-3">
                    <h6 className="f-14 fw-semibold">
                      <i className="mdi mdi-message-outline text-muted f-18 align-middle me-2" />
                      357 Comments
                    </h6>
                  </div>
                  <div className="message ms-3">
                    <h6 className="f-14 fw-semibold">
                      <i className="mdi mdi-eye-outline text-muted f-18 align-middle me-2" />
                      357 Views
                    </h6>
                  </div>
                  <div className="message ms-3">
                    <h6 className="f-14 fw-semibold">
                      <i className="mdi mdi-clock-outline text-muted f-18 align-middle me-2" />
                      8 day ago
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="forum-form mt-4">
              <div className="row d-flex align-items-center justify-content-start">
                <div className="col-sm-2 col-3">
                  <div className="avatar forum-profile">
                    <img
                      src="images/inner-image/user/img-2.jpg"
                      alt=""
                      className="img-fluid rounded-circle avatar-md"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-md-6 col-5 my-2">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Add Your Answer"
                    />
                  </form>
                </div>
                <div className="col-2">
                  <button className="btn btn-dark">Answer</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="my-5">
                  <h6 className="text-success fw-bold">
                    <i className="mdi mdi-message-text-outline f-20 align-middle me-2" />
                    Answer
                  </h6>
                </div>
              </div>
            </div>
            <div className="answer-process-details">
              <div className="process-box">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="process-image">
                    <div className="avatar forum-profile">
                      <img
                        src="images/inner-image/creator/img-1.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-md"
                      />
                    </div>
                  </div>
                  <div className="profile-content ms-3">
                    <div className="side-content d-flex">
                      <h6 className="fw-bold mb-0">@Mamie_Barnett</h6>
                      <p className="mb-0 ms-4 text-muted">
                        <i className="mdi mdi-clock-outline f-18 me-2 align-middle" />
                        6 day ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-content">
                  <p className="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.Unit
                    of data stored on a digital ledger, called a blockchain,
                    that certifies a digital asset to be unique and therefore
                    not interchangeable
                  </p>
                  <div className="d-flex mb-4">
                    <div className="like d-flex align-items-center">
                      <i className="mdi mdi-thumb-up-outline f-20 text-blue " />
                      <p className="mb-0 ms-2 fw-semibold text-muted">
                        25 Like
                      </p>
                    </div>
                    <div className="dislike d-flex align-items-center ms-4">
                      <i className="mdi mdi-thumb-down-outline f-20 text-dark " />
                      <p className="mb-0 ms-2 fw-semibold text-muted">
                        1 Dislike
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="process-box pt-4">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="process-image">
                    <div className="avatar forum-profile">
                      <img
                        src="images/inner-image/creator/img-2.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-md"
                      />
                    </div>
                  </div>
                  <div className="profile-content ms-3">
                    <div className="side-content d-flex">
                      <h6 className="fw-bold mb-0">@Claude_Banks</h6>
                      <p className="mb-0 ms-4 text-muted">
                        <i className="mdi mdi-clock-outline f-18 me-2 align-middle" />
                        5 day ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-content">
                  <p className="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.Unit
                    of data stored on a digital ledger, called a blockchain,
                    that certifies a digital asset to be unique and therefore
                    not interchangeable
                  </p>
                  <div className="d-flex mb-4">
                    <div className="like d-flex align-items-center">
                      <i className="mdi mdi-thumb-up-outline f-20 text-blue " />
                      <p className="mb-0 ms-2 fw-semibold text-muted">
                        25 Like
                      </p>
                    </div>
                    <div className="dislike d-flex align-items-center ms-4">
                      <i className="mdi mdi-thumb-down-outline f-20 text-dark " />
                      <p className="mb-0 ms-2 fw-semibold text-muted">
                        1 Dislike
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="process-box pt-4">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="process-image">
                    <div className="avatar forum-profile">
                      <img
                        src="images/inner-image/creator/img-3.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-md"
                      />
                    </div>
                  </div>
                  <div className="profile-content ms-3">
                    <div className="side-content d-flex">
                      <h6 className="fw-bold mb-0">@Claude_Banks</h6>
                      <p className="mb-0 ms-4 text-muted">
                        <i className="mdi mdi-clock-outline f-18 me-2 align-middle" />
                        5 day ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-content">
                  <p className="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.Unit
                    of data stored on a digital ledger, called a blockchain,
                    that certifies a digital asset to be unique and therefore
                    not interchangeable
                  </p>
                  <div className="d-flex mb-4">
                    <div className="like d-flex align-items-center">
                      <i className="mdi mdi-thumb-up-outline f-20 text-blue " />
                      <p className="mb-0 ms-2 fw-semibold text-muted">
                        25 Like
                      </p>
                    </div>
                    <div className="dislike d-flex align-items-center ms-4">
                      <i className="mdi mdi-thumb-down-outline f-20 text-dark " />
                      <p className="mb-0 ms-2 fw-semibold text-muted">
                        1 Dislike
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="process-box pt-4">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="process-image">
                    <div className="avatar forum-profile">
                      <img
                        src="images/inner-image/creator/img-4.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-md"
                      />
                    </div>
                  </div>
                  <div className="profile-content ms-3">
                    <div className="side-content d-flex">
                      <h6 className="fw-bold mb-0">@Jimmy_Wright</h6>
                      <p className="mb-0 ms-4 text-muted">
                        <i className="mdi mdi-clock-outline f-18 me-2 align-middle" />
                        5 day ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-content">
                  <p className="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.Unit
                    of data stored on a digital ledger, called a blockchain,
                    that certifies a digital asset to be unique and therefore
                    not interchangeable
                  </p>
                  <div className="d-flex">
                    <div className="like d-flex align-items-center">
                      <i className="mdi mdi-thumb-up-outline f-20 text-blue " />
                      <p className="mb-0 ms-2 fw-semibold text-muted">
                        25 Like
                      </p>
                    </div>
                    <div className="dislike d-flex align-items-center ms-4">
                      <i className="mdi mdi-thumb-down-outline f-20 text-dark " />
                      <p className="mb-0 ms-2 fw-semibold text-muted">
                        1 Dislike
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 order-1 order-lg-2">
          <div className="forum-side-box mb-5 mb-lg-0">
            <div className="items">
              <h6 className="fw-bold mb-3">Categories</h6>
              <div className="categorie-box">
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
            <div className="items mt-5">
              <h6 className="fw-bold mb-3">Popular Tags</h6>
              <div className="categorie-box Popular-tag">
                <div className="d-linline">
                  <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                    #nftmarketplace
                  </span>
                  <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                    #bitcoinpr
                  </span>
                  <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                    #nftcollector
                  </span>
                  <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                    #cryptopressrelease
                  </span>
                  <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                    #opensea
                  </span>
                  <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                    #bitcoinpr
                  </span>
                  <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                    #nftbtc
                  </span>
                  <span className="badge rounded-pill shadow-sm text-dark py-2 px-3 f-18 fw-normal">
                    #nftartbtc
                  </span>
                </div>
              </div>
            </div>
            <div className="items mt-5">
              <h6 className="fw-bold mb-3">Popular Tags</h6>
              <div className="profile">
                <div className="categorie-box live-auctions">
                  <div className="tab-box p-4 border">
                    <div className="card-image mt-2 position-relative">
                      <img
                        src="images/inner-image/explore/img-2.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <div className="badge rounded-pill bg-white text-dark">
                          <div className="countdown" id="countdown">
                            <ul className="d-flex text-muted f-18 ps-0 mb-0">
                              {/* <li class="d-flex"><span id="days"></span><span class="align-middle">:</span></li> */}
                              <li className="d-flex">
                                <span id="hours" />
                                <span className="align-middle"> : </span>
                              </li>
                              <li className="d-flex">
                                <span id="minutes" />
                                <span className="align-middle"> :</span>
                              </li>
                              <li className="d-flex">
                                <span id="seconds" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="body-content mt-3">
                      <h6 className="fw-bold">Colorful Abstract Painting</h6>
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
                  <div className="tab-box p-4 border mt-4">
                    <div className="card-image mt-2 position-relative">
                      <img
                        src="images/inner-image/explore/img-3.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <span className="badge rounded-pill bg-white text-dark f-16">
                          <i className="mdi mdi-heart text-danger me-2" />
                          Like
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