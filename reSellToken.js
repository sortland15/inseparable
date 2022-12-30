import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
//INTERNAL IMPORT
import Style from "../styles/reSellToken.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";

//IMPORT SMART CONTRACT
import { NFTMarketplaceContext, currentAccount } from "../Context/NFTMarketplaceContext";

const reSellToken = () => {
  const { createSale } = useContext(NFTMarketplaceContext);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState('"');
  const router = useRouter();
  const { id, tokenURI } = router.query;

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);

    setImage(data.image);
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resell = async () => {
    try {
      await createSale(tokenURI, price, true, id);
      router.push("/marketplace");
    } catch (error) {
      console.log("Error while resell", error);
    }
  };
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
    
    <section className="blog-3 section bg-white" id="seller">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <div className={Style.reSellToken}>
      <div className={Style.reSellToken_box}>
        <h1>ReSell Your Token, Set Price</h1>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Price</label>
          <input
            type="number"
            min={1}
            placeholder="reSell price"
            style={{border: '1px solid #ee574c'}}
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={Style.reSellToken_box_image}>
          {image && (
            <Image src={image} alt="resell nft" width={400} height={400} />
          )}
        </div>

        <div className={Style.reSellToken_box_btn}>
          <Button btnName="Resell NFT" handleClick={() => resell()} />
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </section>


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
  );
};

export default reSellToken;
