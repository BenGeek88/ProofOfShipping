if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
  console.log("toto");
} else {
  // set the provider you want from Web3.providers
  console.log("tata");
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}