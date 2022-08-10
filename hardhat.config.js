require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const POLYGON_RPC = process.env.POLYGON_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
	  hardhat: {},
	  Polygon: {
		url: POLYGON_RPC,
		accounts: [PRIVATE_KEY],
	  },
	},
	solidity: "0.8.9",
};
