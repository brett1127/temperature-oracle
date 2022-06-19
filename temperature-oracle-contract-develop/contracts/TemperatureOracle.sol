pragma solidity 0.8.0;


contract TemperatureOracle {
    address public oracleAddress;

    constructor (address _oracleAddress) public {
        oracleAddress = _oracleAddress;
    }

    event TemperatureUpdate ( string temperature);

    function updateTemperature( string memory temperature )public{
        require(msg.sender == oracleAddress);
        emit TemperatureUpdate(temperature);
    }
}
