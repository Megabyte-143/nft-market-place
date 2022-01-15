require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const projectID = "2c343c676d29bc70644029b116a36e71a0206ee0";
const pubKey = '0x269B19b8C8A64B2d98A9E833F1B4DaF858862436';
// const prvKey = "383d2fe68c5e490a1f55156a3f36e535e177eba6a02533d0c8d0b1c654f5df12";
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
