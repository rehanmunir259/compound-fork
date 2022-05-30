const hre = require("hardhat");

async function main() {
  const account = "0x1547b436463650d5083ecf90D55Acc35fbd58fe4";
  const Bardi = await hre.ethers.getContractFactory("Bardi");
  const bardi = await Bardi.deploy(account);

  await bardi.deployed();

  console.log("cErc20 deployed to:", bardi.address);


  try {
    await hre.run('verify', {
      address: bardi.address,
      constructorArgsParams:  [account]
    });
  } catch (error) {
    console.log(error)
    console.log(
      `cErc20 Smart contract at address ${bardi.address} is already verified`
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
