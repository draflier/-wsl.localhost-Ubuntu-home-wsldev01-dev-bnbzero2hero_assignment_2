// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    truffdash: {
      url: "http://localhost:24012/rpc",
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      timeout: 1800000,
      allowUnlimitedContractSize: true,
    },
  },
  etherscan: {
    apiKey: {
      goerli: 'F5EKKVNKIWGVW1QWME47N972ZZ8Z4WT7PF',
    }
  },
};
