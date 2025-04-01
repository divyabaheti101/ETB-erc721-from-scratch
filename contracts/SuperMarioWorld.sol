// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./ERC721.sol";

contract SuperMarioWorld is ERC721{
    string public name; //EIP721 Metadata
    string public symbol; //EIP721 Metadata
    uint256 public tokenCount;
    mapping (uint256 => string) private _tokeURIs;

    constructor(string memory _name, string memory _symbol){
        name = _name;
        symbol = _symbol;
    }

    // Returns a url that points to the metadata
    function tokenURI(uint256 tokenId) public view returns (string memory){ //EIP721 Metadata
        require(_owners[tokenId] != address(0), "Token Id doesn't exist");
        return _tokeURIs[tokenId];
    }

    //creates a new nft inside our collection
    function mint(string memory _tokeURI) public {
        tokenCount += 1; // this is also our tokenId
        _balances[msg.sender] += 1;
        _owners[tokenCount] = msg.sender;
        _tokeURIs[tokenCount] = _tokeURI;

        emit Transfer(address(0), msg.sender, tokenCount);

    }

    function supportsInterface(bytes4 interfaceId) public pure override returns(bool){
        return interfaceId == 0x80ac58cd || interfaceId == 0x5b5e139f;
        //the new condn is to cehck for metadata as well for opensea
    }
}