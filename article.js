import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
export default function Article(){
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
  <section className="artical section bg-light">
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
                Artical
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="inner-heading text-center">
            <div className="mt-4">
              <h1 className="fw-bold">Artical</h1>
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
        <div className="col-lg-4">
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
        <div className="col-lg-8">
          <div className="artical-box">
            <div className="artical-image">
              <img
                src="images/inner-image/artical/img-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="artical-title mt-4">
              <h1 className="fw-bold display-5">
                NFT is coming soon : Create and sell your unique items.
              </h1>
            </div>
            <div className="artical-content mt-5">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <img
                        src="images/inner-image/user/img-2.jpg"
                        alt=""
                        className="img-fluid avatar-md rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="mb-0 fw-bold">Gayle Hicks</h6>
                    <p className="mb-0 text-muted">Author</p>
                  </div>
                </div>
                <div className="date ms-auto">
                  <h6 className="mb-0 fw-bold text-muted">05 June</h6>
                </div>
              </div>
              <p className="mt-4 text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a{" "}
                <span className="fw-bold"> more-or-less normal </span>
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors
              </p>
              <p className="mt-4 text-muted">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
              <p className="mt-4 text-muted">
                If you use this site regularly and would like to help keep the
                site on the Internet
              </p>
              <h4 className="mt-4 fw-bold">Where does it come from?</h4>
              <p className="text-muted mt-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{" "}
              </p>
              <h4 className="mt-4 fw-bold">Art / Creativity </h4>
              <p className="text-muted mt-4">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur
              </p>
            </div>
          </div>
          <div className="comment-box mt-5">
            <h4 className="fw-bold">Comment</h4>
            <div className="Comment-box-item">
              <div className="comment-item mt-4">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar">
                        <img
                          src="images/inner-image/user/img-3.jpg"
                          alt=""
                          className="img-fluid avatar-md rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h6 className="mb-0">Nicholas Daniels</h6>
                    </div>
                  </div>
                  <div className="time ms-auto">
                    <h6>10 minutes ago</h6>
                  </div>
                </div>
                <div className="message-box mt-4">
                  <p className="text-muted mb-3">
                    Dolor sit amet, consectetur adipiscing elit. Phasellus
                    feugiat elit vitae enim lacinia semper. Cras nulla lectus,
                    porttitor vitae urna iaculis, Melisandre tincidunt lectus.
                    Brienne nec tellus sit amet massa auctor imperdiet imp vitae
                    diam.
                  </p>
                  <a href="" className="text-blue">
                    Reply
                  </a>
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