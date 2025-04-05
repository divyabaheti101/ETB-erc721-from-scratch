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

    // gets the balance of multiple accounts and tokens
    function balanceOfBatch(address[] memory accounts, uint256[] memory ids) public view returns(uint256[] memory){
        require(accounts.length == ids.length, "Accounts and IDs not of same length");

        uint256[] memory batchBalances = new uint256[](accounts.length);

        for(uint256 i = 0; i< accounts.length; i++){
            batchBalances[i] = balanceOf(ids[i], accounts[i]);
        }

        return batchBalances;
    }
}
