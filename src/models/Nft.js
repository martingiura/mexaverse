//IMPORT
const { Schema, model } = require('mongoose')


//2.Schema
const nftSchema = new Schema({
    nftTitle: {
        type: String,
        trim: true,
        required: [true, "NFT Title is required 🚨 "] 
    },
    nftUsername: {
        type: String,
        trim: true,
        required: [true, "User name is required 👽  "] 
    }, 
    nftPrice: {
        type: Number,
        required: [true, 'Price is required 💸 .']
    },
    nftImage: {
        type: String,
        required: [true, 'NFT is required 🇲🇽 .']
    },
}, {timestamps: true})

// Model
const Nft = model('Nft', nftSchema)

// Export
module.exports = Nft