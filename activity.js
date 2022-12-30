import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
export default function Activity(){
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
  <section className="activity section bg-light">
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
                Activity
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row align-items-center  justify-content-center">
        <div className="col-lg-8">
          <div className="inner-heading text-center">
            <div className="mt-4">
              <h1 className="fw-bold">Activity Feed</h1>
              <p className="text-muted">
                Easiest place to buy and sell cryptocurrency. Sign up and get
                started today.
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
      <div className="row d-flex align-items-start mt-5">
        <div
          className="col-lg-3 nav flex-column nav-pills ps-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <i className="mdi mdi-weight me-2 f-18" />
            Sales
          </button>
          <button
            className="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            <i className="mdi mdi-heart me-2 f-18" />
            Like
          </button>
          <button
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            <i className="mdi mdi-cart me-2 f-18" />
            Offers
          </button>
          <button
            className="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            <i className="mdi mdi-plus-circle me-2 f-18" />
            Followings
          </button>
        </div>
        <div
          className="col-lg-8 offset-lg-1 tab-content mt-4"
          id="v-pills-tabContent"
        >
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="activity">
              <div className="activity-box">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-1.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">
                          Creative Art collection
                        </h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Jimmy_Wright</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 3 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activity-box mt-4">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-3.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">
                          Colorful Abstract Painting
                        </h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Claude_Banks</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 2 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activity-box mt-4">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-4.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">Liquid Forest Princess</h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Ida_Chapman</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 2 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activity-box mt-4">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-2.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">Liquid Forest Princess</h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Karla_Sharp</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 1 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activity-box mt-4">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-5.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">Synthwave Painting</h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Franklin_Greer</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 3 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <div className="activity">
              <div className="activity-box">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-5.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">
                          Creative Art collection
                        </h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Jimmy_Wright</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 3 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activity-box mt-4">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-6.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">
                          Colorful Abstract Painting
                        </h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Claude_Banks</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 2 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <div className="activity">
              <div className="activity-box">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-7.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">
                          Creative Art collection
                        </h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Jimmy_Wright</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 3 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <div className="activity">
              <div className="activity-box">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-8.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">
                          Creative Art collection
                        </h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Jimmy_Wright</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 3 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activity-box mt-4">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/creator/img-1.png"
                        alt=""
                        className="img-fluid rounded-circle avatar-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex align-items-center">
                      <div className="profile-info">
                        <h6 className="fw-bold mb-0">
                          Colorful Abstract Painting
                        </h6>
                        <p className="f-16 mb-0">
                          listed by{" "}
                          <span className="text-blue">@Claude_Banks</span>
                        </p>
                      </div>
                      <div className="laft-day ms-auto">
                        <p className="fw-semibold mb-0 text-muted">
                          Last 2 days
                        </p>
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