const hre = require("hardhat");

async function main() {
const baseRate =  "120000000000000000"
const multiplier = "50000000000000000"
const initialExchangeRateMantissa = "200000000000000000000000000"
const admin = "0x1547b436463650d5083ecf90D55Acc35fbd58fe4"
const zeroAddress = "0x0000000000000000000000000000000000000000"




// deploy comptroller
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
    console.log(
      `Comptroller Smart contract at address ${comptroller.address} is already verified`
    );
  }





// deploy whitePaperInterestRateModel
const WhitePaperInterestRateModel = await hre.ethers.getContractFactory("WhitePaperInterestRateModel");
const whitePaperInterestRateModel = await WhitePaperInterestRateModel.deploy(
  baseRate,
  multiplier
);

await whitePaperInterestRateModel.deployed();

console.log("WhitePaperInterestRateModel deployed to:", whitePaperInterestRateModel.address);


try {
  await hre.run('verify', {
    address: whitePaperInterestRateModel.address,
    constructorArgsParams:  [
      baseRate,
      multiplier
    ]
  });
} catch (error) {
  console.log(
    `whitePaperInterestRateModel Smart contract at address ${whitePaperInterestRateModel.address} is already verified`
  );
}







  // deploy underlying
const CakeToken = await hre.ethers.getContractFactory("CakeToken");
const cakeToken = await CakeToken.deploy();

await cakeToken.deployed();

console.log("cakeToken deployed to:", cakeToken.address);


try {
  await hre.run('verify', {
    address: cakeToken.address,
    constructorArgsParams:  []
  });
} catch (error) {
  console.log(
    `cakeToken Smart contract at address ${cakeToken.address} is already verified`
  );
}


    
// deply cerc20delegate
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
    
    console.log(
      `cErc20Delegate Smart contract at address ${cErc20Delegate.address} is already verified`
    );
  }

    // deply cerc20delegator

  const CErc20Delegator = await hre.ethers.getContractFactory("CErc20Delegator");
  const cErc20Delegator = await CErc20Delegator.deploy(
      cakeToken.address,
      comptroller.address,
      whitePaperInterestRateModel.address,
      initialExchangeRateMantissa,
      "Bardi Cake",
      "bCake",
      8,
      admin,
      cErc20Delegate.address,
      zeroAddress

  );

  await cErc20Delegator.deployed();

  console.log("cErc20Delegator deployed to:", cErc20Delegator.address);


  try {
    await hre.run('verify', {
      address: cErc20Delegator.address,
      constructorArgsParams:  [
        cakeToken.address,
        comptroller.address,
        whitePaperInterestRateModel.address,
        initialExchangeRateMantissa,
        "Bardi Cake",
        "bCake",
        8,
        admin,
        cErc20Delegate.address,
        zeroAddress
      ]
    });
  } catch (error) {
    
    console.log(
      `cErc20Delegator Smart contract at address ${cErc20Delegator.address} is already verified`
    );
  }



  // deploy underlying
const DenaToken = await hre.ethers.getContractFactory("Denarius");
const denaToken = await DenaToken.deploy();

await denaToken.deployed();

console.log("denaToken deployed to:", denaToken.address);


try {
  await hre.run('verify', {
    address: denaToken.address,
    constructorArgsParams:  []
  });
} catch (error) {
  
  console.log(
    `denaToken Smart contract at address ${denaToken.address} is already verified`
  );
}


    
// deply cerc20delegate
  const CErc20Delegate2 = await hre.ethers.getContractFactory("CErc20Delegate");
  const cErc20Delegate2 = await CErc20Delegate2.deploy();

  await cErc20Delegate2.deployed();

  console.log("CErc20Delegate2 deployed to:", cErc20Delegate2.address);


  try {
    await hre.run('verify', {
      address: cErc20Delegate2.address,
      constructorArgsParams:  []
    });
  } catch (error) {
    
    console.log(
      `cErc20Delegate2 Smart contract at address ${cErc20Delegate2.address} is already verified`
    );
  }

    // deply cerc20delegator

  const CErc20Delegator2 = await hre.ethers.getContractFactory("CErc20Delegator");
  const cErc20Delegator2 = await CErc20Delegator2.deploy(
      denaToken.address,
      comptroller.address,
      whitePaperInterestRateModel.address,
      initialExchangeRateMantissa,
      "Bardi Dena",
      "bDena",
      8,
      admin,
      cErc20Delegate2.address,
      zeroAddress

  );

  await cErc20Delegator2.deployed();

  console.log("cErc20Delegator2 deployed to:", cErc20Delegator2.address);


  try {
    await hre.run('verify', {
      address: cErc20Delegator2.address,
      constructorArgsParams:  [
        denaToken.address,
        comptroller.address,
        whitePaperInterestRateModel.address,
        initialExchangeRateMantissa,
        "Bardi Dena",
        "bDena",
        8,
        admin,
        cErc20Delegate2.address,
        zeroAddress
      ]
    });
  } catch (error) {
    
    console.log(
      `cErc20Delegator2 Smart contract at address ${cErc20Delegator2.address} is already verified`
    );
  }

// deploy chaiinlink oracle
const ChainlinkOracle = await hre.ethers.getContractFactory("VenusChainlinkOracle");
const chainlinkOracle = await ChainlinkOracle.deploy();

await chainlinkOracle.deployed();

console.log("chainlinkOracle deployed to:", chainlinkOracle.address);


try {
  await hre.run('verify', {
    address: chainlinkOracle.address,
    constructorArgsParams:  []
  });
} catch (error) {
  
  console.log(
    `chainlinkOracle Smart contract at address ${chainlinkOracle.address} is already verified`
  );
}


console.log("Comptroller deployed to:", comptroller.address);
console.log("WhitePaperInterestRateModel deployed to:", whitePaperInterestRateModel.address);
console.log("cakeToken deployed to:", cakeToken.address);
console.log("CErc20Delegate deployed to:", cErc20Delegate.address);
console.log("cErc20Delegator deployed to:", cErc20Delegator.address);
console.log("denaToken deployed to:", denaToken.address);
console.log("CErc20Delegate2 deployed to:", cErc20Delegate2.address);
console.log("cErc20Delegator2 deployed to:", cErc20Delegator2.address);
console.log("chainlinkOracle deployed to:", chainlinkOracle.address);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
