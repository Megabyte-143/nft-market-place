

describe("NFTMarket", function () {
  it("Should create and execute market sales", async function () {


    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address; //Getting the Market Address

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftContractAddress = nft.address; // Getting the NFT address

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString(); // Getting the Listing Price of the NFT

    const auctionPrice = ethers.utils.parseUnits('100', 'ether'); // Selling Price of the NFT

    //Create The NFTs (2 nfts here);
    await nft.createToken("https://www.mytokenlocation.com");
    await nft.createToken("https://www.mytokenlocation2.com");

    // Put the NFTs on Sale
    await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice });
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice });

    // Get Some TestNet Buyers
    const [_, buyersAddress] = await ethers.getSigners();

    //Solding the NFTs
    await market.connect(buyersAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice });

    items = await market.fetchMarketItems();

    items = await Promise.all(items.map(async i => {
      const tokenUri = await nft.tokenURI(i.tokenId);
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item;
    }))

    console.log('items: ', items);



  })
})