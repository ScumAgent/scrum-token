const { ethers } = require("hardhat");

async function main() {
    // Retrieve the SCUM contract
    const SCUM = await ethers.getContractFactory("SCUM");
    console.log("Deploying SCUM contract...");

    // Deploy the contract
    const scum = await SCUM.deploy();

    // Wait until the contract is fully deployed
    await scum.waitForDeployment();
    console.log("SCUM deployed to:", scum.target);
}

// Execute the main function and handle errors appropriately
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
