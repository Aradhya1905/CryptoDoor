import React from "react";
import styled from "styled-components";

const Rules = () => {
	return (
		<Rule>
			<h1>Rules :</h1>
			<Instructions>
				<Instruction>
					<p> 1. Hiding behind these doors are 2 Ghosts , if u find one --then Game Over !!</p>
				</Instruction>
				<Instruction>
					<p> 2. Only 1 of the door contain NFT's --if u are lucky then u can Mint one !! </p>
				</Instruction>
				<p>
					The NFTs were created using <a href="https://openai.com/dall-e-2/">Dall E-Ai</a> and smart contract was
					deployed to Polygon testnet.
				</p>
				<p>Please be Polygon testnet in order to mint NFT's....</p>
			</Instructions>
		</Rule>
	);
};

export default Rules;

const Rule = styled.div`
	min-height: 300px;
	background-color: white;
	margin-top:2em;
	@media only screen and (max-width: 610px)  {
		width: 500px;
		
	}
`;

const Instructions = styled.div`
	margin-left:11%;
	p {
		line-height: 2.5em;
		font-weight: 500;
		font-size: 1.1em;
		a{
			border-bottom: 1px solid black;
		}
	}
`;
const Instruction = styled.div`
	p{
		font-weight:600;
		font-size:1.5em;
	}

`;
