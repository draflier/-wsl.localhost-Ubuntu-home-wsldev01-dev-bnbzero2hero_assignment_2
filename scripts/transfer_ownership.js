// scripts/transfer_ownership.js
async function main() {
    const gnosisSafe = '0xDC055ECCe3f29FE5EaD338999766B0407CF0a0b1';
   
    console.log("Transferring ownership of ProxyAdmin...");
    // The owner of the ProxyAdmin can upgrade our contracts
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });