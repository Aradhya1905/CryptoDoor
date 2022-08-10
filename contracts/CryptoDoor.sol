// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CryptoDoor is ERC1155, Ownable {

    bool stopMinting = false;
    string public name;
	
    constructor()
        ERC1155('ipfs://bafybeiewf3llweknkre6kevd363fhpv4qqfr2nverw62pnen7lnsfdgyoy/{id}.json'){
            name = "cryptoDoors";
        }

    function mint(uint id) public {
        uint _amount = 1;//only one NFT after game win.
        require(id != 0 && id < 5 ,"id cannot equal zero and only 4 NFTs available");
        require(stopMinting == false,"owner has stopped mint function.");//if any issue ,owner will be able to stop the mint function.
        _mint(msg.sender,id,_amount,"");
    }

    function setURI(string memory _newURI) public onlyOwner{
        _setURI(_newURI);
    }

    function setStopMint(bool _stopMint) public onlyOwner{
        stopMinting = _stopMint;
    }
}
