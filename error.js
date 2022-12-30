import Head from "next/head";

export default function Error(){
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
        <link rel="stylesheet" href="css/swiper.min.css" type="text/css" />
        {/* Custom Css */}
        <link rel="stylesheet" href="css/style.min.css" type="text/css" />
        </Head>
        {/* light-dark mode button */}
        <a
          href="javascript: void(0);"
          id="mode"
          className="mode-btn text-white rounded-end"
        >
          <i className="uil uil-brightness mode-dark mx-auto" />
          <i className="uil uil-moon bx-spin mode-light" />
        </a>
        {/* start section */}
        <section className="not-found section bg-light">
          {/* start container */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center inner-heading">
                  <img
                    src="images/inner-image/404.png"
                    alt=""
                    className="img-fluid dangers-image"
                  />
                  <div className="error-text">
                    <img
                      src="images/inner-image/404-2.png"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <h1 className="fw-bold mt-5">ooops 🥺!Page not Found</h1>
                  <p className="mt-3">
                    We're Sorry ! the page you requested could not be found.
                    <br />
                    Place go back to the homepage.
                  </p>
                  <a href="index.html" className="btn btn-dark">
                    Back to Home
                  </a>
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
                        src="images/logo-dark.png"
                        className="logo-dark"
                        alt=""
                        height={40}
                      />
                      <img
                        src="images/logo-light.png"
                        className="logo-light"
                        alt=""
                        height={40}
                      />
                    </a>
                    <p className="f-18 mt-2 text-muted">
                      Business opportunities Are Like <br />
                      Buses, There's Always Another <br />
                      One Coming...
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
                            <a href="">Security &amp; Provciy</a>
                          </li>
                          <li>
                            <a href="">Marketplace</a>
                          </li>
                          <li>
                            <a href="">Term &amp; Condition</a>
                          </li>
                          <li>
                            <a href="">Collection</a>
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
                            <a href="activity.html">Pages</a>
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
                        <a href="#">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="mdi mdi-linkedin" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="mdi mdi-google-plus" />
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
                  <p className="my-4 text-muted">
                    © NFTJET. Design with <i className="mdi mdi-heart text-danger" />{" "}
                    by{" "}
                    <a href="javascript:void(0)" className="text-reset">
                      LepordThemes
                    </a>
                    .
                  </p>
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