var SafeMath = artifacts.require("zeppelin-solidity/contracts/math/SafeMath.sol");
var XorMath = artifacts.require("./XorMath.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, XorMath);
};
