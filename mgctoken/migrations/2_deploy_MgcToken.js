const MgcToken = artifacts.require("./MgcToken");

module.exports = function (deployer) {
  deployer.deploy(MgcToken);
};