const hre = require("hardhat");

async function main() {
  const PriceOracle = await hre.ethers.getContractFactory("PriceOracle");
  const priceOracle = await PriceOracle.deploy();

  await priceOracle.deployed();

  console.log("PriceOracle deployed to:", priceOracle.address);


  try {
    await hre.run('verify', {
      address: priceOracle.address,
      constructorArgsParams:  []
    });
  } catch (error) {
    console.log(error)
    console.log(
      `priceOracle Smart contract at address ${priceOracle.address} is already verified`
    );
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
