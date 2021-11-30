const Nft = require("./../models/Nft");
const User = require("./../models/User");
const mongoose = require("mongoose");

//-----------------------VIEW MY NFTs-------------------

exports.getMyNfts = async (req, res) => {
  try {
    const nfts = await Nft.find({});
    console.log(nfts);
    res.render("nfts/my-nfts", {
      myNfts,
    });
  } catch (error) {
    console.log(error);
  }
};

//-----------------------VIEW SINGLE NFT-------------------

// exports.getNft = async (req, res) => {
//   const singleNftID = req.params.NftID;
//   const getTheNft = await Nft.findById(singleNftID);
//   console.log(getTheNft);
//   res.render("nfts/single", {
//     data: getTheNft,
//   });
// };

//-------------------Add a new NFT-------------------
//-------------------VIEW FORM TO CREATE NFTs-------------------
exports.viewCreateNft = async (req, res) => {
  res.render("nfts/create");
};

//-------------------FORM FOR CREATE NFTs-------------------
exports.createNft = async (req, res) => {
  console.log(req.body);

  const userName = req.body.userName;
  const nftTitle = req.body.nftTitle;
  const nftPrice = req.body.nftPrice;
  const nftImage = req.body.nftImage;

  const newNftCreated = await Nft.create({
    userName,
    nftTitle,
    nftPrice,
    nftImage,
  });

  console.log(newNftCreated);

  res.redirect("/nfts");

  console.log("NFT creado y listo para vender 🌮 ");
};

//-------------------Update NFT-------------------
//-------------------VIEW FORM TO Update NFTs-------------------

exports.viewEditNft = async (req, res) => {
  console.log(req.params);

  const nftID = req.params.nftID;

  const foundNft = await Nft.findById(nftID);

  res.render("nfts/update", {
    data: foundNft,
  });
};

exports.editNft = async (req, res) => {
  // 1. EL ID DEL NFT
  const nftID = req.params.nftID;

  // 2. LOS NUEVOS CAMBIOS DEL FORMULARIO
  const nftTitle = req.body.nftTitle;
  const nftImage = req.body.nftImage;
  const nftPrice = req.body.nftPrice;

  console.log(nftID);
  console.log(nftTitle, nftImage, nftPrice);

  // 3. REALIZAR LA ACTUALIZACIÓN DE DATOS EN LA BASE DE DATOS
  // findByIdAndUpdate([ID], [NUEVOS CAMBIOS EN OBJETO], [DEVOLVER A LA VARIABLE LA ACTUALIZACIÓN])
  const updatedNft = await Nft.findByIdAndUpdate(
    nftID, // ID DEL DOCUMENTO
    { nftTitle, nftImage, nftPrice },
    { new: true } // DEVOLVER A LA VARIABLE EL DOCUMENTO ACTUALIZADO
  );

  console.log(updatedNft);

  res.redirect(`/nfts/${updatedNft._id}`);
};

exports.deleteNft = async (req, res) => {
  // 1. IDENTIFICAR EL DRONEQUE QUIERO BORRAR
  const nftID = req.params.nftID;

  // 2. REALIZAMOS BORRADO EN BASE DE DATOS
  const deletedNft = await Nft.findByIdAndDelete(nftID);

  console.log("Borrado de drone:", deletedNft);

  // 3. REDIRECCIÓN
  res.redirect("/nfts");
};
