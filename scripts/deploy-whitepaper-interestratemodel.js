const hre = require("hardhat");

async function main() {
  const WhitePaperInterestRateModel = await hre.ethers.getContractFactory("WhitePaperInterestRateModel");
  const whitePaperInterestRateModel = await WhitePaperInterestRateModel.deploy(
    "120000000000000000",
    "50000000000000000"
  );

  await whitePaperInterestRateModel.deployed();

  console.log("WhitePaperInterestRateModel deployed to:", whitePaperInterestRateModel.address);


  try {
    await hre.run('verify', {
      address: whitePaperInterestRateModel.address,
      constructorArgsParams:  [
        "120000000000000000",
        "50000000000000000"
      ]
    });
  } catch (error) {
    console.log(error)
    console.log(
      `whitePaperInterestRateModel Smart contract at address ${whitePaperInterestRateModel.address} is already verified`
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
