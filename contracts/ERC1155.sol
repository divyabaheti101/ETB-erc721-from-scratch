// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract ERC1155{
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool approved);

    event TransferSingle(address indexed _operator, address indexed _from, address indexed _to, uint256 _id, uint256 _amount);

    event TransferBatch(address indexed _operator, address indexed _from, address indexed _to, uint256[] _ids, uint256[] _amounts);

    // Mapping of token id to account and its balance of that token id
    mapping(uint256 => mapping(address => uint256)) internal _balances;

    // mapping of an owner account to operator account
    mapping(address => mapping(address => bool)) private _operatorApprovals;

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

    // checks is an address is operator for another address
    function isApprovedForAll(address owner, address operator) public view returns(bool){
        return _operatorApprovals[owner][operator];
    }

    //Enables or disables the address to manage msg.sender's assets
    function setApprovalForAll(address operator, bool approved) public{
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function _transfer(address from, address to, uint256 id, uint256 amount) private{
        uint256 fromBalance = _balances[id][from];
        require(fromBalance > amount, "Insufficient amount");
        _balances[id][from] = fromBalance - amount;
        _balances[id][to] += amount;
    }

    //function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes memory data)
    //in above data is passed to checkERC1155() but since we have that as dummy removed it.. above is actual
    function safeTransferFrom(address from, address to, uint256 id, uint256 amount) public virtual {
        require(from == msg.sender || isApprovedForAll(from, msg.sender), "msg.sender is not authorized to send this asset");
        require(to != address(0), "Zero Address");
        _transfer(from, to, id, amount);
        emit TransferSingle(msg.sender, from, to, id, amount);

        require(_checkOnERC1155Received(), "Receiver is not implemented");
    }

    function safeBatchTransferFrom(address from, address to, uint256[] memory ids, uint256[] memory amounts) public virtual{
        require(from == msg.sender || isApprovedForAll(from, msg.sender), "msg.sender is not authorized to send this asset");
        require(to != address(0), "Zero Address");
        require(ids.length == amounts.length, "Ids and Amounts not of same length");
        for (uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];

            _transfer(from, to, id, amount);
        }

        emit TransferBatch(msg.sender, from, to, ids, amounts);

        require(_checkOnBatchERC1155Received(), "Receiver is not implemented");
    }

    function _checkOnERC1155Received() private pure returns(bool){
        //Dummy and oversimplifed version
        return true;
    }

    function _checkOnBatchERC1155Received() private pure returns(bool){
        //Dummy and oversimplifed version
        return true;
    }

    
}
