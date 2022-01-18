const hre = require("hardhat");

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  //Use this to get the correct hash and then get the address from the https://mumbai.polygonscan.com/
  // console.log("NFTMarket deployed to hash:",nftMarket.deployTransaction.hash);
  console.log("NFTMarket deployed to:", nftMarket.address);

  const NFT =  await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  //Use this to get the correct hash and then get the address from the https://mumbai.polygonscan.com/
  // console.log("NFT Deployed To Hash:",nft.deployTransaction.hash);
  console.log("NFT Deployed To:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
