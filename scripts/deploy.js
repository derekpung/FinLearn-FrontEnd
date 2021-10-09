const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const LTEToken = await hre.ethers.getContractFactory("LTEToken");
  const lteToken = await LTEToken.deploy("LTEToken", "LTE");

  await lteToken.deployed();

  console.log("Token deployed to:", lteToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });