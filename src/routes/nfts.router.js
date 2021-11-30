//1. IMPORT
const router = require("express").Router();

const {
  getNfts,
  viewCreateNft,
  createNft,
  viewEditNft,
  editNft,
  deleteNft,
} = require("./../controllers/nft.Controller");

const { isLoggedIn } = require("./../middlewares");

//2. Routes
router.get("/", isLoggedIn, getNfts);

//-------------Add NFTs------------
router.get("/create", viewCreateNft);

router.post("/nfts/create", createNft);

//-------------Update NFTs-------------
router.get("/nfts/:nftID/edit", viewEditNft);

router.post("/nfts/:nftID/edit", editNft);

//-------------Delete NFTs-------------
router.post("/nfts/:nftID/delete", deleteNft);

//3. EXPORT
module.exports = router;
