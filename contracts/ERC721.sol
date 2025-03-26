// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract ERC721 {
    mapping(address => uint256) internal _balances;
    mapping(uint256 => address) internal _owners;

    function balanceOf(address owner) public view returns(uint256){
        require(owner != address(0), "Zero Address");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view returns(address){
        address owner = _owners[tokenId];
        require(owner != address(0), "Token assigned to zero addr");
        return owner;
    }
}