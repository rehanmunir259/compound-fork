const hre = require("hardhat");

async function main() {
  const SampleToken = await hre.ethers.getContractFactory("SampleToken");
  const sampleToken = await SampleToken.deploy();

  await sampleToken.deployed();

  console.log("sampleToken deployed to:", sampleToken.address);


  try {
    await hre.run('verify', {
      address: sampleToken.address,
      constructorArgsParams:  []
    });
  } catch (error) {
    console.log(error)
    console.log(
      `sampleToken Smart contract at address ${sampleToken.address} is already verified`
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
