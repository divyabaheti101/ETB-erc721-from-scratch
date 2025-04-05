// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SuperMarioWorld1155Module", (m) => {

  const SuperMarioWorld1155 = m.contract("SuperMarioWorld1155", ["SuperMarioWorld1155", "SM1155"]);
  
  //cid taken from pinata for the json or metadat of the nft.
  //m.call(SuperMarioWorldOZ, "mint", ["https://ipfs.io/ipfs/bafkreifylxi6tb3dgezitryc222hmxh6cp5zoandvmcgqdj5bffsv3wa5u"]);
  //m.call(SuperMarioWorld1155, "mint", ["https://ipfs.io/ipfs/bafkreiebeggiozca5yugbvjaytwozyd3vn7y3pulusjuve2lkbbyklbgum"]);
  m.call(SuperMarioWorld1155, "mint", [10, "https://ipfs.io/ipfs/bafkreihc3dw4vidteyaxbznk7ous7l6brrecs2s6xz7cu3lfvz322uuwn4"]);

  return { SuperMarioWorld1155 };
});
