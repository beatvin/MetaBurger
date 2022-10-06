var MetaBurger = artifacts.require("MetaBurger");

module.exports = function(deployer) {
  deployer.deploy(MetaBurger,'1000000000000000000',"Yep. It's just a burger.");
};