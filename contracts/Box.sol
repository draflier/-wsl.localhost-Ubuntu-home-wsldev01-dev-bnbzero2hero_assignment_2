// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
contract Box {
    uint256 private m_value;
    uint256 private m_constant;
 
 
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
 
    // Stores a new value in the contract
    function store(uint256 newValue) public {
        m_value = newValue;
        m_constant = 1;
        emit ValueChanged(newValue);
    }
 
    // Reads the last stored value
    function retrievePlusConstant() public view returns (uint256) {
        return m_value + m_constant;
    }
}