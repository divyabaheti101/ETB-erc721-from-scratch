// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract ERC1155{

    // Mapping of token id to account and its balance of that token id
    mapping(uint256 => mapping(address => uint256)) internal _balances;

    // gets the balance of account tokens
    function balanceOf(uint256 tokenId, address account) public view returns(uint256){
        require(account != address(0), "Zero address mentioned");
        return _balances[tokenId][account];
    }
}
