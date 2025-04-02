// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SuperMarioWorldModule", (m) => {

  const SuperMarioWorld = m.contract("SuperMarioWorld", ["SuperMarioWorld", "SPRM"]);
  
  m.call(SuperMarioWorld, "mint", ["https://ipfs.io/ipfs/bafkreifylxi6tb3dgezitryc222hmxh6cp5zoandvmcgqdj5bffsv3wa5u"]);

  return { SuperMarioWorld };
});
