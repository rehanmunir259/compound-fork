const hre = require("hardhat");

async function main() {
  const Comptroller = await hre.ethers.getContractFactory("Comptroller");
  const comptroller = await Comptroller.deploy();

  await comptroller.deployed();

  console.log("Comptroller deployed to:", comptroller.address);


  try {
    await hre.run('verify', {
      address: comptroller.address,
      constructorArgsParams:  []
    });
  } catch (error) {
    console.log(error)
    console.log(
      `Comptroller Smart contract at address ${comptroller.address} is already verified`
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
