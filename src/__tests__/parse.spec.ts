import { generator } from "../generator/generator"

const code = `pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {
    event SetPurpose(address sender, string purpose);

    string public purpose = "Building Unstoppable Apps!!!";

    constructor() payable {
        // what should we do on deploy?
    }

    function setPurpose(string memory newPurpose) public {
        purpose = newPurpose;
        console.log(msg.sender, "set purpose to", purpose);
        emit SetPurpose(msg.sender, purpose);
    }

    // to support receiving ETH by default
    receive() external payable {}

    fallback() external payable {}
}
`

const result = generator(code)

describe('generator', () => {
    it('should return a string', () => {
        expect(typeof result).toBe('object')
        expect(result).toHaveProperty('type')
        expect(result).toHaveProperty('children')

    })
})