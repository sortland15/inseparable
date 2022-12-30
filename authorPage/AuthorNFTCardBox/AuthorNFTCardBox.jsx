import React, { useState } from "react";

//INTERNAL IMPORT
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
const AuthorNFTCardBox = ({
  collectiables,
  created,
  nfts,
  myNFTS,
}) => {
  // const collectiablesArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];

  // const createdArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  // ];

  // const likeArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];


  return (
    <div>
      <NFTCardTwo NFTData={myNFTS} />
    </div>
  );
};

export default AuthorNFTCardBox;
