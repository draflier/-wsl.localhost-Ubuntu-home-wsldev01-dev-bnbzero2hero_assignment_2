// scripts/deploy.js
async function main() {

  let addrProxyImpl = "0xdb6853447e8bA073B8aBacfeB1f10013ed4aB699";
  factoryBoxV2 = await ethers.getContractFactory("BoxV2");
  scBoxV2 = await upgrades.upgradeProxy(addrProxyImpl, factoryBoxV2);

  await scBoxV2.deployTransaction.wait(7);
  await scBoxV2.deployed();
  console.log("BoxV2 deployed to:", scBoxV2.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });