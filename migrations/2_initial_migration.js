const CappedLockableToken = artifacts.require("CappedLockableToken");

module.exports = function (deployer,network,accounts) {
	deployer.deploy(CappedLockableToken);
};