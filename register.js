import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
export default function Register(){
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


  {/* start section */}
  <section
    className="home section position-relative overflow-hidden"
    style={{
      backgroundImage: "url(./images/inner-image/login.png)",
      backgroundRepeat: "no-repeat"
    }}
  >
    {/* start container */}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="inner-heading">
            <h1 className="fw-bold">Register new account</h1>
            <p className="fw-semibold">
              By getting started, you acknowledge and agree to Terms of Use and
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
      <form className="info-box" action="/api/register" method="post">
          <div className="row">
            <div className="col-lg-5">
              {/* <div className="profile-item">
                <div className="avatar">
                  <img
                    src="images/inner-image/img-1.png"
                    alt=""
                    className="img-fluid rounded-circle avatar-xl"
                  />
                </div>
                <p className=" mb-0 my-3 fw-bold">Profile Photo 📷</p>
                <p className="mt-2">
                  Your introduction and credits are two of the most important
                  elements of your StarNow profile.🙌
                </p>
                <input name="profilepic" className="btn btn-dark shadow" type="file" />
              </div> */}
              <div className="mt-4">
                <div className="Name">
                  <label
                    htmlFor="validationDefault03"
                    className="form-label fw-semibold"
                  >
                    Username :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    name="displayname"
                    placeholder="Enter Your Username"
                    required=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="Name">
                  <label
                    htmlFor="validationDefault001"
                    className="form-label fw-semibold"
                  >
                    {" "}
                    Custom URL :
                  </label>
                  <input
                    type="text"
                    name="customurl"
                    className="form-control"
                    id="validationDefault001"
                    placeholder="www.cyberpunk.com"
                    required=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="Name">
                  <div className="d-flex">
                    <label
                      htmlFor="validationDefault002"
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
                    name="email"
                    className="form-control"
                    id="validationDefault002"
                    placeholder="Enter Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="Name">
                  <div className="d-flex">
                    <label
                      htmlFor="validationDefault002"
                      className="form-label fw-semibold"
                    >
                      {" "}
                      Password :
                    </label>
                    <p className="mb-0 f-14 text-muted ms-auto">
                      Enter New Password
                    </p>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="validationDefault002"
                    placeholder="Enter Your New Password"
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
                    name="bio"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h4 className="fw-bold mt-lg-0 mt-4">
                Your Social media{" "}
                <i className="mdi mdi-heart-outline f-24 align-middle" />
              </h4>
              <div className=" mt-4">
                <div className="mt-3">
                  <div className="Name">
                    <label
                      htmlFor="validationDefault004"
                      className="form-label fw-semibold"
                    >
                      Facebook :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault004"
                      placeholder="Facebook Username"
                      name="facebook"
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
                      htmlFor="validationDefault005"
                      className="form-label fw-semibold"
                    >
                      Twitter :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault005"
                      placeholder="Twitter Username"
                      name="twitter"
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
                      htmlFor="validationDefault006"
                      className="form-label fw-semibold"
                    >
                      Linkedin :
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      className="form-control"
                      id="validationDefault006"
                      placeholder="Linkedin Username"
                      required=""
                    />
                    {/* <button type="submit" className="btn btn-sm btn-blue mt-3">
                      <i className="mdi mdi-linkedin f-18 align-middle me-2" />
                      Connect To Linkedin
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="submit-button">
            <button className="btn btn-primary w-100" type="submit">
              Create Your Account
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    {/* end container */}
  </section>

    {/* JAVASCRIPT FILES */}
    <Script src="js/bootstrap.bundle.min.js"></Script>
    <Script src="js/tiny-slider.js"></Script>
    <Script src="js/counter.init.js"></Script>
    {/* <Script src="js/app.js"></Script> */}
    {/* JAVASCRIPT FILES */}
</>

    );
}