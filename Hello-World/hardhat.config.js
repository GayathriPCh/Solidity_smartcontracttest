require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/i-Owtirw_g_eiK8sG70_P7NecVkWaQsD",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
