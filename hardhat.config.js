require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const projectID = "2c343c676d29bc70644029b116a36e71a0206ee0";
const prvKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://rpc-mainnet.maticvigil.com/v1/${projectID}`,
      accounts: [prvKey]
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${projectID}`,
      accounts: [prvKey]
    }
  },
  solidity: "0.8.4",
};
