pragma solidity 0.8.0;

contract Migrations {
    address public owner;
    uint public last_completed_migration;


    // 定义修饰器 ,校验仅白名单调用;
    modifier restricted() {
        if (msg.sender == owner) _;
    }

    constructor () public {
        owner = msg.sender;
    }


    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(last_completed_migration);
    }
}
