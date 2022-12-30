import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
export default function Login(){
    return(
        <>
        <Head>
        <>
  <title>INSEPARABLE NFT Marketplace</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content=" " />
  <meta name="keywords" content="" />
  <meta content="Pichforest" name="author" />
  <link rel="shortcut icon" href="images/favicon.ico" />
  {/* Bootstrap css */}
  <link
    rel="stylesheet"
    href="css/bootstrap.min.css"
    type="text/css"
    id="bootstrap-style"
  />
  {/* Material Icon Css */}
  <link
    rel="stylesheet"
    href="css/materialdesignicons.min.css"
    type="text/css"
  />
  {/* Unicon Css */}
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  {/* Custom Css */}
  <link rel="stylesheet" href="css/style.min.css" type="text/css" />
</>
 
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
  <section
    className="login section position-relative overflow-hidden"
    style={{
      backgroundImage: "url(./images/inner-image/login.png)",
      backgroundRepeat: "no-repeat"
    }}
  >
    {/* start container */}
    {/* <div class="bg-overlay"></div> */}
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form className="mt-2 inner-heading" action="/api/login" method="post">
            <h1 className="fw-bold">Welcome 🖐 To INSEPARABLE</h1>
            <p className="text-muted">
              Don't have an account yet?{" "}
              <Link href="/register" className="text-blue">
                Register
              </Link>
            </p>
            <div className="info-box">
              <div className="row">
                <div className="col-lg-12">
                  <div className="email  mt-4">
                    <label
                      htmlFor="validationDefault03"
                      className="form-label fw-semibold"
                    >
                      {" "}
                      Email Address :
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="Enter Your Email Address"
                      required=""
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="password  mt-4">
                    <label
                      htmlFor="validationDefault01"
                      className="form-label fw-semibold"
                    >
                      Password :
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="validationDefault01"
                      placeholder="Enter Your Password"
                      defaultValue=""
                      required=""
                      name="password"
                    />
                  </div>
                </div>

              </div>
              <div className="submit-button mt-4">
                <button className="btn btn-primary w-100" type="submit">
                  Login
                </button>
              </div>
            </div>
            <div
              className="position-fixed start-0 bottom-50 p-3"
              style={{ zIndex: 999 }}
            >
              <div
                id="liveToast"
                className="toast position-relative"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-check-circle text-success f-30" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <strong>Your Account Is Verify</strong>
                    </div>
                  </div>
                </div>
                <div className="toast-body">Login to your account!</div>
                <div className="progress" style={{ height: 5 }}>
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* end container */}
  </section>
    {/* JAVASCRIPT FILES */}
    <Script src="js/bootstrap.bundle.min.js"></Script>
    <Script src="js/app.js"></Script>
    {/* JAVASCRIPT FILES */}
</>

    );
}