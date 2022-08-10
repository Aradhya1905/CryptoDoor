const {ethers } = require("hardhat");

async function main() {
  const CryptoDoor = await ethers.getContractFactory("CryptoDoor");
  const cryptoDoor = await CryptoDoor.deploy();
  await cryptoDoor.deployed();
  console.log("CryptoDoor contract deployed to:", cryptoDoor.address); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
