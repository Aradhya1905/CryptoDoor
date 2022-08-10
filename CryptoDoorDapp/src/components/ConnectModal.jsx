import React from "react";
import styled from "styled-components";

const ConnectModal = ({wallet,setWallet}) => {

	const {ethereum} = window;

	const checkWalletConnected = async() => {
		if (!ethereum){
			alert("please install Metamask extension")
			return;
		}
		else{
			console.log('metamask exists', ethereum)
		}
		const accounts =await ethereum.request({method:'eth_requestAccounts'});
		if(accounts.length!==0){
			setWallet(accounts[0]);
		}else{
			console.log("No accounts found");
		}
	}
	return (
		<>
		{ (wallet === "") ? <ConnectWallet>
			<p>Please Connect Wallet  !! - To play the Game</p>
			{ (wallet === "") ? (<button onClick={checkWalletConnected}>
			Connect Wallet</button>) : (<button onClick={checkWalletConnected}>Connected</button>)}
		</ConnectWallet> : null}
		</>
	);
};

export default ConnectModal;

const ConnectWallet = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap:2em;
	position: fixed;
	overflow: hidden;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: black;
	opacity: 0.9;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
	@media only screen and (max-width: 610px)  {
		position:absolute;
		height: 250vh;
		width: 610px;
		justify-content:start;
		p{
			margin-top:18em;
		}
	}
	button {
		 {	
			padding:0.7em;
			font-weight:500;
			border-radius: 0.3em;
			font-size: 1.5em;
			cursor: pointer;
			background: -webkit-linear-gradient(left, #fb8500, #35e2d9);
			background-size: 200% 200%;
			animation: gradient-animation 4s ease infinite;
		}
	}

	p{
		color: white;
		font-weight: 500;
		font-size: 1.5em;
	}
	@-webkit-keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;
