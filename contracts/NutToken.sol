// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NutToken is ERC20 {
  constructor(uint256 initialSupply) ERC20("Nut Token", "NUT") {
    console.log("Deploying Nut Token contract with initial supply:", initialSupply);
    _mint(msg.sender, initialSupply);
  }
} 