// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x8C3F5d4357895EB0B64342732237F91E10f63018';
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });