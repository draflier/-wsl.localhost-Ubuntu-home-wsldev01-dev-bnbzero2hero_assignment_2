// scripts/prepare_upgrade.js
async function main() {
    const addrProxyImpl = '0xdb6853447e8bA073B8aBacfeB1f10013ed4aB699';
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(addrProxyImpl, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });