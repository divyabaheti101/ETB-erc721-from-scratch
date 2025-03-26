// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract ERC721 {
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool approved);
    event Approval(address indexed _owner, address indexed _approvedAddr, uint256 _tokenId);

    mapping(address => uint256) internal _balances;
    mapping(uint256 => address) internal _owners;
    mapping(address => mapping(address => bool)) private _operatorApprovals;
    mapping(uint256 => address) private _tokenApprovals;

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

    // updates an approved address for an NFT
    function approve(address to, uint256 tokenId) public{
        address owner = ownerOf(tokenId);
        require(owner == msg.sender || isApprovedForAll(owner, msg.sender), "msg.sender doesn't have rights");
        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }

    //gets the approved addr for single nft
    function getApproved(uint256 tokenId) public view returns(address){
        require(_owners[tokenId] != address(0), "Token Id doesn't exist");
        return _tokenApprovals[tokenId];
    }
}