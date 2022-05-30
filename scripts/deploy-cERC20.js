const hre = require("hardhat");

async function main() {
  const CErc20 = await hre.ethers.getContractFactory("CErc20");
  const cErc20 = await CErc20.deploy();

  await cErc20.deployed();

  console.log("cErc20 deployed to:", cErc20.address);


  try {
    await hre.run('verify', {
      address: cErc20.address,
      constructorArgsParams:  []
    });
  } catch (error) {
    console.log(error)
    console.log(
      `cErc20 Smart contract at address ${cErc20.address} is already verified`
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
