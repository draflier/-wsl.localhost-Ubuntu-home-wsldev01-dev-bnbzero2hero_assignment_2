// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.17",
  networks: {
    truffdash: {
      url: "http://localhost:24012/rpc",
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,

      timeout: 1800000,
      allowUnlimitedContractSize: true,
    },
    bnbtestnet: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545/",
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      timeout: 1800000,
      allowUnlimitedContractSize: true,
      //blockGasLimit: 15000000000,
      //gas: 30000000,
      //gasLimit: 1500000000,
      accounts: {mnemonic: process.env.MNEMONIC},
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.BNBTESTNET
    }

  },

  mocha: {
    timeout: 10000000000
  }
};
