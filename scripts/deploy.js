// scripts/deploy.js
async function main() {
  factoryBox = await ethers.getContractFactory("Box");
  let scBoxProxyImpl = await upgrades.deployProxy(factoryBox, [31], {initializer: 'store'});
  await scBoxProxyImpl.deployTransaction.wait(7);
  await scBoxProxyImpl.deployed();

  let strAddr = await upgrades.erc1967.getImplementationAddress(scBoxProxyImpl.address);


  try{
    await hre.run("verify:verify", { address: scBoxProxyImpl.address, constructorArguments: [], contract: "contracts/Box.sol:Box" });
  }catch(e){
      console.log(e);
  }

  addrProxyAdmin = scBoxProxyImpl.address;

  console.log("Box proxy implementation adddress deployed to: " + scBoxProxyImpl.address);
  console.log("Box logic adddress deployed to : " + strAddr);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });