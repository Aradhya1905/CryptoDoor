import React, { useState } from "react";
import styled from "styled-components";
import dog from "../assets/NFT-images/dog-with-burger.png";
import lion1 from "../assets/NFT-images/lion-drinking-smoothie .png";
import lion2 from "../assets/NFT-images/lion-drinking-smoothie-1.png";
import Astranout from "../assets/NFT-images/Astronaut-ghost-rider.png";
import CryptoDoor from "../CryptoDoor.json";
import { ethers } from "ethers";

const CryptoDoorAddress = "0x19f89dd893a08444B9a59a01AFD15d6e6e3CE1Da";

const NFTModal = ({ playAgain, wallet, setWallet }) => {
	const [txnHash, setTxnHash] = useState("");
	const [message, setMessage] = useState("");
	const [mintAmt, setMintAmt] = useState("");
	const [disableInput, setDisableInput] = useState(false);
	const [changeButton, setChangeButton] = useState(false);

	const { ethereum } = window;
	const checkWalletConnected = async () => {
		if (!ethereum) {
			alert("please Connect to Metamask");
		} else {
			console.log("metamask exists");
		}
		const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		if (accounts.length !== 0) {
			setWallet(accounts[0]);
		} else {
			console.log("No accounts found");
		}
	};

	const contract = () => {
		const provider = new ethers.providers.Web3Provider(ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(CryptoDoorAddress, CryptoDoor.abi, signer);
		return Contract;
	};

	const Mint = async mintAmt => {
		checkWalletConnected();
		try {
			if (ethereum) {
				const Contract = contract();
				if (ethereum && Contract) {
					const currentChainID = await ethereum.request({ method: "eth_chainId" });
					console.log(currentChainID.toString());
					const PolygonTestNetID = "0x13881";
					if (currentChainID === PolygonTestNetID) {
						if (mintAmt >= 1 && mintAmt <= 4) {
							let nftTxn = await Contract.mint(mintAmt);
							setMessage("Minting NFT's..please wait....");
							await nftTxn.wait();
							setMintAmt("");
							setDisableInput(true);
							setChangeButton(true);
							setMessage(
								`NFTs minted...Have a look at Ur wallet@ opensea link above`
							);
							setTxnHash(`https://mumbai.polygonscan.com/tx/${nftTxn.hash}`);
						} else {
							alert("NFT IDs are between 1 - 4 nos,Please Enter between 1-4 nos");
						}
					} else {
						alert("Please Connect To Polygon Testnet");
					}
				}
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<NftModal>
			<h1>You Win !!</h1>
			<p>Let's mint some NFTs.</p>
			<p>Select between these 4 NFTs created by Dall-E Ai</p>
			<ImageContainer>
				<img src={dog} alt="dog" />
				<img src={lion1} alt="lion-drinking-smoothie" />
				<img src={lion2} alt="lion-drinking-smoothie" />
				<img src={Astranout} alt="Astranout" />
			</ImageContainer>
			{disableInput === false ? (
				<input
					type="number"
					placeholder="1-4 nos"
					value={mintAmt}
					onChange={e => setMintAmt(e.target.value)}
				/>
			) : (
				<a target="_blank" href="https://testnets.opensea.io/">OpenSea TestNet Link</a>
			)}
			{changeButton === false ? (
				<button onClick={() => Mint(mintAmt)}> Mint </button>
			) : (
				<button onClick={() => playAgain()}>Play again</button>
			)}
			<p>{message}</p>
			{txnHash === "" ? null : (
				<p>
					Transaction hash@ :{" "}
					<a target="_blank" href={txnHash}>
						{" "}
						Polygon Scan
					</a>
				</p>
			)}
		</NftModal>
	);
};

export default NFTModal;

const NftModal = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	opacity: 0.92;
	background-color: black;
	color: white;
	font-size: 3em;
	z-index: 1996;
	p {
		font-size: 0.5em;
		margin-bottom: 1.5em;
		color: white;
	}
	button {
		padding: 1em;
		cursor: pointer;
		border: 2px solid black;
		min-width: 180px;
		border-radius: 0.5em;
		font-weight: bold;
		font-size: 0.4em;
		background-color: #fb8500;
		color: white;
		opacity: 1;
		margin: 1.5em 0;
		&:hover {
			opacity: 0.9;
		}
	}

	a {
		color: white;
		border-bottom: 2px solid white;
		font-size: 0.7em;
	}

	input {
		width: 300px;
		padding: 1em;
		font-size: 0.3em;
		border-radius: 0.5em;
		&:focus {
			outline: none;
		}
	}
	@media only screen and (max-width: 610px)  {
		position:absolute;
		height: 250vh;
		width: 500px;
		p{
			margin-top:18em;
		}
	}
`;
const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5em;
	margin-bottom: 1em;
	img {
		width: 150px;
		height: 200px;
		border: 1px solid white;
		border-radius: 0.2em;
	}
	@media only screen and (max-width: 610px)  {
		img{
			width: 50px;
			height: 50px;
		}
	}
`;
