const hre = require("hardhat");

async function main() {
  // 0x0000000000000000000000000000000000000000
  const CErc20Delegate = await hre.ethers.getContractFactory("CErc20Delegate");
  const cErc20Delegate = await CErc20Delegate.deploy();

  await cErc20Delegate.deployed();

  console.log("CErc20Delegate deployed to:", cErc20Delegate.address);


  try {
    await hre.run('verify', {
      address: cErc20Delegate.address,
      constructorArgsParams:  []
    });
  } catch (error) {
    console.log(error)
    console.log(
      `cErc20Delegate Smart contract at address ${cErc20Delegate.address} is already verified`
    );
  }
  const CErc20Delegator = await hre.ethers.getContractFactory("CErc20Delegator");
  const cErc20Delegator = await CErc20Delegator.deploy(
      "0x61dB59543b3f056C897202C9BcE85C898aB5A3fc",
      "0x6cE5fAb6Ef8eBaf159301931D97899371c882139",
      "0x31662aA24eAB6eF4C6fB7e6f19567329FF0A920e",
      "200000000000000000000000000",
      "Bardi Telos",
      "bTelos",
      8,
      "0x1547b436463650d5083ecf90D55Acc35fbd58fe4",
      cErc20Delegate.address,
      "0x0000000000000000000000000000000000000000"

  );

  await cErc20Delegator.deployed();

  console.log("cErc20Delegator deployed to:", cErc20Delegator.address);


  try {
    await hre.run('verify', {
      address: cErc20Delegator.address,
      constructorArgsParams:  [
      "0x61dB59543b3f056C897202C9BcE85C898aB5A3fc",
      "0x6cE5fAb6Ef8eBaf159301931D97899371c882139",
      "0x31662aA24eAB6eF4C6fB7e6f19567329FF0A920e",
      "200000000000000000000000000",
      "Bardi Telos",
      "bTelos",
      8,
      "0x1547b436463650d5083ecf90D55Acc35fbd58fe4",
      cErc20Delegate.address,
      "0x0000000000000000000000000000000000000000"
      ]
    });
  } catch (error) {
    console.log(error)
    console.log(
      `cErc20Delegator Smart contract at address ${cErc20Delegator.address} is already verified`
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
