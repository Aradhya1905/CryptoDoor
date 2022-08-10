import React from 'react'
import styled from 'styled-components'

const Modal = ({playAgain}) => {

  return (
	<GameModal>
		<h1>Game Over !!</h1>
		<p>The Ghost got u !!</p>
		<button onClick={()=>playAgain()}>Play again</button>
	</GameModal>
  )
}

export default Modal

const GameModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	position:absolute;
	opacity: 0.8;
	background-color:black;
	color: white;
	font-size: 3em;
	p{
		margin-bottom:1.5em;
	}
	button{
		padding: 1em;
		cursor: pointer;
		border-radius: 0.5em;
		font-weight:bold;
		font-size:0.4em;
		background-color:#fb8500;
		color:white;
	}
	@media only screen and (max-width: 610px)  {
		position:absolute;
		height: 250vh;
		width: 610px;
		justify-content:start;
		p{
			margin-top:18em;
		}
	}
`
