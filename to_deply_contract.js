var HelloWorld = artifacts.require("./hello.sol");

module.exports = function(deployer) {
   deployer.deploy(HelloWorld);
};
