// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SuperMarioWorldCollectionModule2", (m) => {

  const SuperMarioWorldCollection2 = m.contract("SuperMarioWorldCollection", ["SuperMarioWorldCollection", "SMWC", "https://ipfs.io/ipfs/bafybeigug72xe3mawtlizgzwr6f4jtnnzowfja5z73j3ntqdgbaibn5aly/"]);
  
  m.call(SuperMarioWorldCollection2, "mint", [10]);
  m.call(SuperMarioWorldCollection2, "mint", [10]);
  m.call(SuperMarioWorldCollection2, "mint", [10]);
  m.call(SuperMarioWorldCollection2, "mint", [10]);
  m.call(SuperMarioWorldCollection2, "mint", [1]);
  m.call(SuperMarioWorldCollection2, "mint", [1]);
  m.call(SuperMarioWorldCollection2, "mint", [1]);
  m.call(SuperMarioWorldCollection2, "mint", [1]);


  return { SuperMarioWorldCollection2 };
});
