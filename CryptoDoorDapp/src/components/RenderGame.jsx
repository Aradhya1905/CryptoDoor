import Modal from "./Modal";
import NFTModal from "./NFTModal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
	beachDoor,
	spaceDoor,
	closedDoor,
	Ghost,
	Pumpkin,
	WinNFT,
	Ghost1,
	ScaryKitten,
	Dog,
} from "../assets/images";

const RenderGame = ({wallet,setWallet}) => {
	const [botDoorsOpen, setbotDoorOpen] = useState(false);
	const [beachDoorOpen, setOpenBeachDoor] = useState(false);
	const [spaceDoorOpen, setOpenSpaceDoor] = useState(false);
	const [ghostDoorOpen, setOpenGhostDoor] = useState(false);
	const [pumpkinDoorOpen, setOpenPumpkinDoor] = useState(false);
	const [NFTDoorOpen, setOpenNFTDoor] = useState(false);
	const [KittenDoorOpen, setOpenKittenDoor] = useState(false);
	const [dogDoorOpen, setdogDoorOpen] = useState(false);
	const [gameLostModal, setGameLostModal] = useState(false);
	const [NftModal, setNftModal] = useState(false);
	const [arr, setArr] = useState([]);
	const [message, setMessage] = useState(`let's Open some doors !!`);

	const randomDoors = () => {
		const arr = [];
		while (arr.length < 6) {
			const randomNum = Math.floor(Math.random() * 6);
			if (!arr.includes(randomNum)) {
				arr.push(randomNum);
			}
		}
		setArr(arr);
	};

	useEffect(() => {
		randomDoors();
	}, []);

	const playAgain = () => {
		setTimeout(() => {
			setGameLostModal(false);
			setbotDoorOpen(false);
			setOpenBeachDoor(false);
			setOpenSpaceDoor(false);
			setOpenGhostDoor(false);
			setOpenPumpkinDoor(false);
			setOpenNFTDoor(false);
			setOpenKittenDoor(false);
			setdogDoorOpen(false);
			setGameLostModal(false);
			setNftModal(false);
			randomDoors();
			setMessage(`Welcome , let's Go again`);
		}, 500);
	};

	const botDoorOpen = () => {
		setbotDoorOpen(true);
		setMessage("");
		setTimeout(() => {
			setGameLostModal(true);
		}, 400);
	};

	const GhostDoorOpen = () => {
		setOpenGhostDoor(true);
		setMessage("");
		setTimeout(() => {
			setGameLostModal(true);
		}, 400);
	};

	const mintingModal = () => {
		setOpenNFTDoor(true);
		setMessage("");
		setTimeout(() => {
			setNftModal(true);
		}, 500);
	};

	return (
		<Game>
			{arr[0] === 0 && (
				<GameImages>
					<div
						onClick={() => {
							setOpenBeachDoor(true);
							setMessage("Ahh the beach !!");
						}}
					>
						{beachDoorOpen ? (
							<img src={beachDoor} alt="beachDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenSpaceDoor(true);
							setMessage("Looking at the Space !!");
						}}
					>
						{spaceDoorOpen ? (
							<img src={spaceDoor} alt="spaceDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={botDoorOpen}>
						{botDoorsOpen ? (
							<img
								src={Ghost1}
								alt=""
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="" />
						)}
					</div>
					<div onClick={GhostDoorOpen}>
						{ghostDoorOpen ? (
							<img
								src={Ghost}
								alt="Ghost"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div onClick={mintingModal}>
						{NFTDoorOpen ? (
							<img
								src={WinNFT}
								alt="NFT"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenPumpkinDoor(true);
							setMessage("Trend carefully Ghost is near !!");
						}}
					>
						{pumpkinDoorOpen ? (
							<img
								src={Pumpkin}
								alt="pumpkin"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setdogDoorOpen(true);
							setMessage("Ahh Dogs ...");
						}}
					>
						{dogDoorOpen ? (
							<img
								src={Dog}
								alt="Dog"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenKittenDoor(true);
							setMessage("Ahh Kittens !!!");
						}}
					>
						{KittenDoorOpen ? (
							<img
								src={ScaryKitten}
								alt="kitten"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
				</GameImages>
			)}

			{arr[0] === 1 && (
				<GameImages>
					<div onClick={botDoorOpen}>
						{botDoorsOpen ? (
							<img
								src={Ghost1}
								alt=""
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenSpaceDoor(true);
							setMessage("Looking at the Space !!");
						}}
					>
						{spaceDoorOpen ? (
							<img src={spaceDoor} alt="spaceDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={GhostDoorOpen}>
						{ghostDoorOpen ? (
							<img
								src={Ghost}
								alt="Ghost"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenBeachDoor(true);
							setMessage("Ahh the beach !!");
						}}
					>
						{beachDoorOpen ? (
							<img src={beachDoor} alt="beachDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenPumpkinDoor(true);
							setMessage("Trend carefully Ghost is near !!");
						}}
					>
						{pumpkinDoorOpen ? (
							<img
								src={Pumpkin}
								alt="pumpkin"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenKittenDoor(true);
							setMessage("Ahh Kittens !!!");
						}}
					>
						{KittenDoorOpen ? (
							<img
								src={ScaryKitten}
								alt="kitten"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={mintingModal}>
						{NFTDoorOpen ? (
							<img
								src={WinNFT}
								alt="NFT"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setdogDoorOpen(true);
							setMessage("Ahh Dogs ...");
						}}
					>
						{dogDoorOpen ? (
							<img
								src={Dog}
								alt="Dog"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
				</GameImages>
			)}

			{arr[0] === 2 && (
				<GameImages>
					<div onClick={mintingModal}>
						{NFTDoorOpen ? (
							<img
								src={WinNFT}
								alt="NFT"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenSpaceDoor(true);
							setMessage("Looking at the Space !!");
						}}
					>
						{spaceDoorOpen ? (
							<img src={spaceDoor} alt="spaceDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					{gameLostModal ? <Modal playAgain={playAgain} /> : null}
					{NftModal ? <NFTModal playAgain={playAgain} /> : null}
					<div
						onClick={() => {
							setOpenBeachDoor(true);
							setMessage("Ahh the beach !!");
						}}
					>
						{beachDoorOpen ? (
							<img src={beachDoor} alt="beachDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={botDoorOpen}>
						{botDoorsOpen ? (
							<img
								src={Ghost1}
								alt=""
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="" />
						)}
					</div>

					<div onClick={GhostDoorOpen}>
						{ghostDoorOpen ? (
							<img
								src={Ghost}
								alt="Ghost"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenPumpkinDoor(true);
							setMessage("Trend carefully Ghost is near !!");
						}}
					>
						{pumpkinDoorOpen ? (
							<img
								src={Pumpkin}
								alt="pumpkin"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenKittenDoor(true);
							setMessage("Ahh Kittens !!!");
						}}
					>
						{KittenDoorOpen ? (
							<img
								src={ScaryKitten}
								alt="kitten"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setdogDoorOpen(true);
							setMessage("Ahh Dogs ...");
						}}
					>
						{dogDoorOpen ? (
							<img
								src={Dog}
								alt="Dog"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
				</GameImages>
			)}

			{arr[0] === 3 && (
				<GameImages>
					<div
						onClick={() => {
							setOpenPumpkinDoor(true);
							setMessage("Trend carefully Ghost is near !!");
						}}
					>
						{pumpkinDoorOpen ? (
							<img
								src={Pumpkin}
								alt="pumpkin"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={botDoorOpen}>
						{botDoorsOpen ? (
							<img
								src={Ghost1}
								alt=""
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenBeachDoor(true);
							setMessage("Ahh the beach !!");
						}}
					>
						{beachDoorOpen ? (
							<img src={beachDoor} alt="beachDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={mintingModal}>
						{NFTDoorOpen ? (
							<img
								src={WinNFT}
								alt="NFT"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenSpaceDoor(true);
							setMessage("Looking at the Space !!");
						}}
					>
						{spaceDoorOpen ? (
							<img src={spaceDoor} alt="spaceDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={GhostDoorOpen}>
						{ghostDoorOpen ? (
							<img
								src={Ghost}
								alt="Ghost"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenKittenDoor(true);
							setMessage("Ahh Kittens !!!");
						}}
					>
						{KittenDoorOpen ? (
							<img
								src={ScaryKitten}
								alt="kitten"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setdogDoorOpen(true);
							setMessage("Ahh Dogs ...");
						}}
					>
						{dogDoorOpen ? (
							<img
								src={Dog}
								alt="Dog"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
				</GameImages>
			)}

			{arr[0] === 4 && (
				<GameImages>
					<div
						onClick={() => {
							setdogDoorOpen(true);
							setMessage("Ahh Dogs ...");
						}}
					>
						{dogDoorOpen ? (
							<img
								src={Dog}
								alt="Dog"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={botDoorOpen}>
						{botDoorsOpen ? (
							<img
								src={Ghost1}
								alt=""
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenSpaceDoor(true);
							setMessage("Looking at the Space !!");
						}}
					>
						{spaceDoorOpen ? (
							<img src={spaceDoor} alt="spaceDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={GhostDoorOpen}>
						{ghostDoorOpen ? (
							<img
								src={Ghost}
								alt="Ghost"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenPumpkinDoor(true);
							setMessage("Trend carefully Ghost is near !!");
						}}
					>
						{pumpkinDoorOpen ? (
							<img
								src={Pumpkin}
								alt="pumpkin"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenKittenDoor(true);
							setMessage("Ahh Kittens !!!");
						}}
					>
						{KittenDoorOpen ? (
							<img
								src={ScaryKitten}
								alt="kitten"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={mintingModal}>
						{NFTDoorOpen ? (
							<img
								src={WinNFT}
								alt="NFT"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenBeachDoor(true);
							setMessage("Ahh the beach !!");
						}}
					>
						{beachDoorOpen ? (
							<img src={beachDoor} alt="beachDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
				</GameImages>
			)}

			{arr[0] === 5 && (
				<GameImages>
					<div onClick={GhostDoorOpen}>
						{ghostDoorOpen ? (
							<img
								src={Ghost}
								alt="Ghost"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenBeachDoor(true);
							setMessage("Ahh the beach !!");
						}}
					>
						{beachDoorOpen ? (
							<img src={beachDoor} alt="beachDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div onClick={mintingModal}>
						{NFTDoorOpen ? (
							<img
								src={WinNFT}
								alt="NFT"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setOpenSpaceDoor(true);
							setMessage("Looking at the Space !!");
						}}
					>
						{spaceDoorOpen ? (
							<img src={spaceDoor} alt="spaceDoor" />
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div onClick={botDoorOpen}>
						{botDoorsOpen ? (
							<img
								src={Ghost1}
								alt=""
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenPumpkinDoor(true);
							setMessage("Trend carefully Ghost is near !!");
						}}
					>
						{pumpkinDoorOpen ? (
							<img
								src={Pumpkin}
								alt="pumpkin"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
					<div
						onClick={() => {
							setdogDoorOpen(true);
							setMessage("Ahh Dogs ...");
						}}
					>
						{dogDoorOpen ? (
							<img
								src={Dog}
								alt="Dog"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>

					<div
						onClick={() => {
							setOpenKittenDoor(true);
							setMessage("Ahh Kittens !!!");
						}}
					>
						{KittenDoorOpen ? (
							<img
								src={ScaryKitten}
								alt="kitten"
								style={{
									width: 100,
									height: 207,
									backgroundColor: "black",
									border: "10px solid #8439F6",
								}}
							/>
						) : (
							<img src={closedDoor} alt="closedDoor" />
						)}
					</div>
				</GameImages>
			)}
			{gameLostModal ? <Modal playAgain={playAgain} /> : null}
			{NftModal ? <NFTModal playAgain={playAgain} wallet={wallet} setWallet = {setWallet}/> : null}
			<Message>{message}</Message>
		</Game>
	);
};

export default RenderGame;

const Game = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const GameImages = styled.div`
	height: 500px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1em;
	flex-wrap: wrap;
	cursor: pointer;
`;

const Message = styled.p`
	position: absolute;
	font-size: 1.5em;
	font-weight: bold;
	top: 400px;
	@media only screen and (max-width: 1025px) {
		position: static;
	}
	@media only screen and (max-width: 610px)  {
		display: none;
	}
`;
