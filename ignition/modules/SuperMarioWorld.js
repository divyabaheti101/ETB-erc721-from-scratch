// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SuperMarioWorldOZModule", (m) => {

  const SuperMarioWorldOZ = m.contract("SuperMarioWorldOZ", ["SuperMarioWorldOZ", "SPRMOZ"]);
  
  //cid taken from pinata for the json or metadat of the nft.
  //m.call(SuperMarioWorldOZ, "mint", ["https://ipfs.io/ipfs/bafkreifylxi6tb3dgezitryc222hmxh6cp5zoandvmcgqdj5bffsv3wa5u"]);
  m.call(SuperMarioWorldOZ, "mint", ["https://ipfs.io/ipfs/bafkreiebeggiozca5yugbvjaytwozyd3vn7y3pulusjuve2lkbbyklbgum"]);

  return { SuperMarioWorldOZ };
});
