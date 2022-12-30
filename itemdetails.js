import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
export default function ItemDetails(){
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
  <section className="item-detail section bg-light">
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
                Items Details
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="inner-heading text-center">
            <div className="mt-4">
              <h1 className="fw-bold">Item Details</h1>
              <p className="text-muted">
                &gt;A New Place To Collect And Connect NFT Across The World.
                It’s come with a creative design, <br /> home page options,
                different explore and digital asset pages and items.
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
      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <div className="back-home-image pe-4">
            <img
              src="images/inner-image/img-1.png"
              alt=""
              className=" image-fill"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="backhome-content mt-4 mt-lg-0">
            <h2 className="fw-bold">Create And Sell Your NFTs</h2>
            <div className="d-flex mt-3 align-items-center">
              <a href="">
                <span className="badge rounded-pill bg-white box-shadow text-dark f-16 fw-normal py-2 px-3">
                  <i className="mdi mdi-heart text-danger f-18 me-2 align-middle" />
                  2.35K
                </span>
              </a>
              <div className="icon d-flex ms-auto">
                <div className="like">
                  <a href="">
                    <i className="mdi mdi-heart" />
                  </a>
                </div>
                <div className="menu ms-3">
                  <div className="dropdown">
                    <a
                      href=""
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
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
            <div className="selected-menu mt-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">Set up Your Wallet</option>
                <option value={1}>Create Your Collection</option>
                <option value={2}>List them for sale</option>
                <option value={3}>least once in your lifetime</option>
              </select>
            </div>
            <div className="tab-box my-4">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
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
                    Details
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
                    Bid
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    History
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-4 ps-3" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <p className="text-muted">
                    Welcome to Digital Art Gallery! I've been mining my brains
                    out to bring you these seeds of the metaverse...We offer a
                    wide range of non-fungible tokens, including art,
                    censorship-resistant domain names and other collectibles.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <p className="text-muted">
                    {" "}
                    Today we want to share a design, NFT is a new method of
                    payment on the Internet using electronic currency. Each of
                    the NFTs is unique and exists.{" "}
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="nav-in-box d-flex align-items-center box-shadow p-4">
                    <div className="flex-shrink-0">
                      <div className="avatar-md">
                        <img
                          src="images/inner-image/user/img-1.jpg"
                          alt="..."
                          className="img-fluid rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <p className="mb-0 text-dark">
                        Bid Accepted By
                        <span className="text-primary fw-bold">2 ETH </span>{" "}
                        <span className="text-muted">@mazanov_sky</span>
                      </p>
                      <p className="mb-0 text-muted">21/04/2021, 10:05 </p>
                    </div>
                  </div>
                  <div className="nav-in-box d-flex align-items-center box-shadow p-4 mt-3">
                    <div className="flex-shrink-0">
                      <div className="avatar-md">
                        <img
                          src="images/inner-image/user/img-5.jpg"
                          alt="..."
                          className="img-fluid rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <p className="mb-0 text-dark">
                        Bid Accepted By
                        <span className="text-primary fw-bold">1 ETH </span>{" "}
                        <span className="text-muted">@ayoub_fennouni</span>
                      </p>
                      <p className="mb-0 text-muted">21/04/2021, 10:05 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar-xs border rounded-circle border-3 border-white">
                      <img
                        src="images/inner-image/user/img-1.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0 f-14 fw-semibold">@mucky_fennouni..</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar-xs border rounded-circle border-3 border-white">
                      <img
                        src="images/inner-image/user/img-2.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0 f-14 fw-semibold">ayoub_fennouni..</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row ">
              <div className="col-lg-6">
                <h6 className="fw-bold mb-1">Minimum bid</h6>
                <p className="fw-semibold">
                  4.00036 <span className="text-muted"> ETH / $3268.42</span>
                </p>
              </div>
              <div className="col-lg-6 text-right">
                <h6 className="mb-0 fw-bold">Countdown</h6>
                <div className="countdown" id="countdown">
                  <ul className="d-flex ps-0">
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
            <div className="d-flex">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-outline-primary ms-2">
                Place Bid
              </button>
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