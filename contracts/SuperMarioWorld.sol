// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./ERC721.sol";

contract SuperMarioWorld is ERC721{
    string public name;
    string public symbol;
    uint256 public tokenCount;
    mapping (uint256 => string) private _tokeURIs;

    constructor(string memory _name, string memory _symbol){
        name = _name;
        symbol = _symbol;
    }

    // Returns a url that points to the metadata
    function tokenURI(uint256 tokenId) public view returns (string memory){
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
}