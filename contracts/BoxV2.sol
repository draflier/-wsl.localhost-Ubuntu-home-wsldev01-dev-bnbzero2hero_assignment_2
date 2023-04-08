// contracts/BoxV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
contract BoxV2 {
    uint256 private m_value;
    uint256 private m_constant;
 
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
 
    // Stores a new value in the contract
    function store(uint256 newValue) public {
        m_value = newValue;
        emit ValueChanged(newValue);
    }
    
    // Reads the last stored value
    function retrievePlusConstant() public view returns (uint256) {
        return m_value + m_constant; //adds 1 for the retrieve function
        
    }
    
    // Increments the stored value by 1
    function increment() public {
        m_value = m_value + 1;
        emit ValueChanged(m_value);

    }

    function upgradeConstant() public
    {
        m_constant = 2;
    }
}