// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
//import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SuperMarioWorldCollection is ERC1155{
    string public name;
    string public symbol;
    uint256 public tokenCount;
    string public baseUri;
    address public owner;

    constructor(string memory _name, string memory _symbol, string memory _baseUri) ERC1155(_baseUri) {
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        baseUri = _baseUri;
    }

    function mint(uint256 amount) public onlyOwner{
        tokenCount += 1;
        _mint(msg.sender, tokenCount, amount, "");
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Not authorised");
        _;
    }

    function uri(uint256 _tokenId) override public view returns(string memory){
        return string (
            abi.encodePacked(
                baseUri,
                Strings.toString(_tokenId),
                ".json"
            )
        );
    }
}