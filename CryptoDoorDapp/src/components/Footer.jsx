import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Footer = () => {
	return (
		<FooterContainer>
			<Contact>
				
				<p style={{color:"gray"}}>Get in touch:</p>
				<a
					target="_blank"
					href="https://mail.google.com/mail/u/0/#sent?compose=new"
					text="karthikaradhya1979@gmail.com"
				>
					karthikaradhya1979@gmail.com
				</a>
			</Contact>
			<DoubleArrowIcon className="arrow-down"/>
			<Links>
				<Link>
				<a target="_blank" href="https://github.com/Aradhya1905?tab=repositories">
					<GitHubIcon />
					<p>GitHub</p>
				</a>
				</Link>
				<Link>
				<a target="_blank" href="https://github.com/Aradhya1905?tab=repositories">
					<TwitterIcon />
					<p>Twitter</p>
				</a>
				</Link>
				<Link>
				<a target="_blank" href="https://github.com/Aradhya1905?tab=repositories">
					<LinkedInIcon />
					<p>LinkedIn</p>
				</a>
				</Link>
			</Links>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.div`
	position: relative;
	border-top: 1px solid rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	justify-content: space-between;
	.arrow-down {
		position: absolute;
		width: 40px;
		top: 0;
		left:20%;
		height: 50px;
		transform: rotate(90deg);
		transition:2s ease-in-out;
		&:hover {
			transform: rotate(360deg);
		}
	}
	@media only screen and (max-width: 610px)  {
		display: none;
	}
`;

const Contact = styled.div`
	margin-top: 50px;
`;

const Links = styled.div`
	margin-top: 50px;
	display: flex;
	gap: 2em;
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
	
	}
`
const Link = styled.div`
	
`
