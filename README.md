# BNB Zero2Hero Assignment 2
## Assignment
1) Deploy an a proxy smart contract proxing to another smart contract
2) Upgrade the smart contract with updated functionality
    - Upgraded functions include a new function call **increment** which **permanently add 1** to the **stored valued**.
    - Upgraded **m_constant** to change the output of **retrivePlusConstant** function

## Environment
1) Node.js v16.19.0
2) npm 9.4.2
3) hardhat 2.13.0 (defined in package.json

## To Run
1) Download source from https://github.com/draflier/bnbzero2hero_assignment_2
2) Update the contents in BNBTESTNET and MNEMONIC on the .env.sample and rename the file to .env
3) Execute the following to deploy the smartcontracts

```shell
1) cd <source_directory> 
2) npm install
3) npx hardhat run scripts/deploy.js --network bnbtestnet
```
4) Update addrProxyAdmin with the proxy contract address in prepare_upgrade.js and deploy_upgrade.js
5) Continue with the following commands:-

```shell
1) npx hardhat run scripts/prepare_upgrade.js --network bnbtestnet
2) npx hardhat run scripts/deploy_upgrade.js --network bnbtestnet
```

## Remarks
For the assignment, the contracts are actually deployed using remix and tested using the box_proxy.js

