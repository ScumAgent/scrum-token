// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SCUM is ERC20 {
    constructor() ERC20("Scum AI Agent", "SCUM") {
        _mint(msg.sender, 10 * 8 ether);
    }

    function mint() external {
        _mint(msg.sender, 10 ether);
    }
}
