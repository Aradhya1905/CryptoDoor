import React,{useState} from 'react';
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RenderGame from "./components/RenderGame";
import Rules from "./components/Rules";
import ConnectModal from './components/ConnectModal';

function App() {
	const [wallet, setWallet] = useState("");
		return (
			<div className="App">
				<ConnectModal wallet={wallet} setWallet = {setWallet}/>
				<Navbar />
				<Rules />
				<RenderGame wallet={wallet} setWallet = {setWallet}/>
				<Footer/>
			</div>
		);
	

}

export default App;

