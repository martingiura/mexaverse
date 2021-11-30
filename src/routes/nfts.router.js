//1. IMPORT
const router = require("express").Router();

const {
  getMyNfts,
  viewCreateNft,
  createNft,
  viewEditNft,
  editNft,
  deleteNft,
} = require("./../controllers/nft.Controller");

const { isLoggedIn } = require("./../middlewares");

//2. Routes
router.get("/nfts", isLoggedIn, getMyNfts);

//-------------Add NFTs------------
router.get("/create", viewCreateNft);

router.post("/create", createNft);

//-------------Update NFTs-------------
router.get("/:nftID/edit", viewEditNft);

router.post("/:nftID/edit", editNft);

//-------------Delete NFTs-------------
router.post("/:nftID/delete", deleteNft);

//3. EXPORT
module.exports = router;
