import React, { useState, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./NFTDetailsImg.module.css";
import images from "../../img";

const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(true);
  const [website, setWebsite] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    if (!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const openWebsite = () => {
    if (!website) {
      setWebsite(true);
    } else {
      setWebsite(false);
    }
  };

  const openDetails = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          {/* <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </p>
          </div> */}

          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <Image
              src={nft.image}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT image"
              width={700}
              height={800}
              objectFit="cover"
            />
          </div>
        </div>

        <div
          className={Style.NFTDetailsImg_box_description}
          onClick={() => openDescription()}
        >
          <p>NFT Description: {description}</p>
        </div>

        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>{nft.description}</p>
          </div>
        )}


<div
          className={Style.NFTDetailsImg_box_description}
          onClick={() => openWebsite()}
        >
          <p>Website</p>
          {website}
        </div>

        {website && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>{nft.website}</p>
          </div>
        )}

        <div
          className={Style.NFTDetailsImg_box_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details}
        </div>
        

        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            <small>File Size: {nft.fileSize}</small>
            <p>
              <small>Royalty: {nft.royalties}</small>
            </p>
            <p>
              <small>Property: {nft.properties}</small>
            </p>
            <p>
              <small>Contract Address: {nft.seller}</small>
            </p>
            <p>
              <small>Token ID # {nft.tokenId}</small>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
