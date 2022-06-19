var TemperatureOracle = artifacts.require("../contracts/TemperatureOracle.sol");

module.exports = function(deployer, network) {
  deployer.deploy(TemperatureOracle, process.env.ORACLE_ADDRESS);
};
