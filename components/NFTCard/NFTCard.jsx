import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = ({ NFTData }) => {
  // const CardArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  // ];

  const [like, setLike] = useState(true);


  console.log(NFTData);
  return (
        <>
        <div className="row">
        {NFTData.map((el, i) => (
        <div className="col-lg-3 col-md-6" key={i + 1}>
        <div className="blog-box p-3 mt-3" >
              <div className="blog-image">
                <img
                src={el.image}
                alt="NFT images"
                className="img-fluid w-100"
                style={{width:'300',height:'300'}}
                />
              </div>
              <div className="blog-body pt-3">
                <h6 className="mb-1">{el.name}</h6>
                <div className="d-flex align-items-center">
                  <div className="text-content">
                    <h6>
                      <i className="mdi mdi-apple-safari" /> {el.price}ETH
                    </h6>
                  </div>
                  <div className="blog-like-button ms-auto">
                  <Link href={{ pathname: "/nft-details", query: el }}>View NFT Details</Link>
                  </div>
                </div>
              </div>
            </div>
            
    </div>
    ))}
    </div>
    </>
  );
};

export default NFTCard;
