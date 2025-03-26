// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract ERC721 {
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool approved);

    mapping(address => uint256) internal _balances;
    mapping(uint256 => address) internal _owners;
    mapping(address => mapping(address => bool)) _operatorApprovals;

    // returns the no. of nfts assigned to owner
    function balanceOf(address owner) public view returns(uint256){
        require(owner != address(0), "Zero Address");
        return _balances[owner];
    }

    // returns the owner of an nft
    function ownerOf(uint256 tokenId) public view returns(address){
        address owner = _owners[tokenId];
        require(owner != address(0), "Token assigned to zero addr");
        return owner;
    }

    // enables or disables an operator to manage all of msg.sender's assets
    function setApprovalForAll(address operator, bool approved) public {
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    // checks if an address is operator for another address
    function isApprovedForAll(address owner, address operator) public view returns(bool){
        return _operatorApprovals[owner][operator];
    }
}