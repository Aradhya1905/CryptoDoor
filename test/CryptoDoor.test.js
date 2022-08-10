const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CryptoDoor", () => {
	let CryptoDoor, cryptoDoor;

	beforeEach(async () => {
		CryptoDoor = await ethers.getContractFactory("CryptoDoor");
		cryptoDoor = await CryptoDoor.deploy();
	});
	//test for minting id with not exceeding 5nos;
	it("should not mint ,if id number is greater than 4 & revert", async () => {
		await expect(cryptoDoor.mint(5)).to.be.revertedWith(
			"id cannot equal zero and only 4 NFTs available"
		);
	});

	it("minting should stop if setStopMint() function is called", async () => {
		await expect(cryptoDoor.setStopMint(true));
		await expect(cryptoDoor.mint(1)).to.be.revertedWith("owner has stopped mint function.")
	});
});
