// test/Box.proxy.js
// Load dependencies
const { expect } = require('chai');
const hre = require("hardhat");
 
let factoryBox;
let scBoxProxyAdmin;
let factoryBoxV2;
let scBoxV2;
let addrProxyAdmin;
 
// Start test block
describe('Box (proxy)', function () {
 
  // Test case
  it('Initialize a contract with ', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    factoryBox = await ethers.getContractFactory("Box");
    scBoxProxyAdmin = await upgrades.deployProxy(factoryBox, [32], {initializer: 'store'});
    await scBoxProxyAdmin.deployTransaction.wait(7);
    await scBoxProxyAdmin.deployed();

    let strAddr = await upgrades.erc1967.getImplementationAddress(scBoxProxyAdmin.address);


    try{
      await hre.run("verify:verify", { address: scBoxProxyAdmin.address, constructorArguments: [], contract: "contracts/Box.sol:Box" });
    }catch(e){
        console.log(e);
    }

    addrProxyAdmin = scBoxProxyAdmin.address;

    console.log("Box proxy implementation adddress deployed to: " + scBoxProxyAdmin.address);
    console.log("Box logic adddress deployed to : " + strAddr);
    expect((await scBoxProxyAdmin.retrievePlusConstant()).toString()).to.equal('33');
  });
  it('preparing for upgrade', async function () {
    let factoryBoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    let boxV2Address = await upgrades.prepareUpgrade(addrProxyAdmin, factoryBoxV2);
    console.log("BoxV2 at:", boxV2Address);
    //let strAddr = await upgrades.erc1967.getImplementationAddress(addrProxyAdmin.address);
    //expect(boxV2Address).to.equal(strAddr);
  });
  it('retrieve returns a value previously incremented', async function () {
    // Increment
    factoryBoxV2 = await ethers.getContractFactory("BoxV2");
    scBoxV2 = await upgrades.upgradeProxy(addrProxyAdmin, factoryBoxV2);

    await scBoxV2.deployTransaction.wait(7);
    await scBoxV2.deployed();
    await scBoxV2.increment();
    await scBoxV2.upgradeConstant();
 

    try{
      await hre.run("verify:verify", { address: scBoxV2.address, constructorArguments: [], contract: "contracts/BoxV2.sol:BoxV2" });
    }catch(e){
        console.log(e);
    }

    console.log("BoxV2 logic adddress deployed to : " + scBoxV2.address);
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await scBoxV2.retrievePlusConstant()).toString()).to.equal('35');
  });
});