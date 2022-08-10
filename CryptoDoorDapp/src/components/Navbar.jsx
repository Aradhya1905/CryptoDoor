import React from "react";
import styled from "styled-components";
import { bot1 } from "../assets/images";
import GitHubIcon from "@mui/icons-material/GitHub";
import CollectionsIcon from "@mui/icons-material/Collections";
const Navbar = () => {
	return (
		<Nav>
			<NavLogo href="/">
				<img src={bot1} alt="obt1" />
				<h3>Crypto Door</h3>
			</NavLogo>
			<NavItem>
				<a target="_blank" href="https://github.com/Aradhya1905?tab=repositories">
					<GitHubIcon />
					<h3>GitHub</h3>
				</a>
				<a target="_blank" href="https://testnets.opensea.io/">
					<CollectionsIcon />
					<h3>OpenSea</h3><h6>testNet</h6>
				</a>
			</NavItem>
		</Nav>
	);
};

export default Navbar;

const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	width: 100%;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	@media only screen and (max-width: 610px)  {
		font-size:11px;
		width: 500px;
		h6{
			display:none;
		}
	}
`;
const NavLogo = styled.a`
	height: 40px;
	display: flex;
	align-items: center;

	img {
		height: 100%;
		object-fit: contain;
	}
`;

const NavItem = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	a {
		display: flex;
		align-items: center;
		gap: 5px;
		.MuiSvgIcon-root {
			color: #fb8500;
		}
		&:hover .MuiSvgIcon-root {
			color: black;
			border-bottom: 1px solid black;
		}
	}
`;
