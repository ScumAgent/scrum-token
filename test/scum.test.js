const { expect } = require("chai");

describe("SCUM Token Contract", function () {
  let scum;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the SCUM contract
    const SCUM = await ethers.getContractFactory("SCUM");
    scum = await SCUM.deploy();
    await scum.waitForDeployment();
  });

  it("should have the correct token name and symbol", async function () {
    expect(await scum.name()).to.equal("Scum AI Agent");
    expect(await scum.symbol()).to.equal("SCUM");
  });

  it("should mint an initial supply of 80 SCUM tokens to the deployer", async function () {
    // In the constructor, 10 * 8 ether tokens are minted to the deployer.
    // This means the deployer's balance should be 80 tokens (i.e. 80 * 10^18 units).
    const ownerBalance = await scum.balanceOf(owner.address);
    const expectedBalance = ethers.parseUnits("80", 18); // 80 tokens in 10^18 units
    expect(ownerBalance).to.equal(expectedBalance);
  });

  it("should mint 10 SCUM tokens to the caller when mint() is invoked", async function () {
    // Record the initial balance of addr1
    const initialBalance = await scum.balanceOf(addr1.address);

    // addr1 calls the mint() function to mint 10 additional tokens
    const mintTx = await scum.connect(addr1).mint();
    await mintTx.wait();

    // Check that addr1's balance increased by 10 tokens
    const finalBalance = await scum.balanceOf(addr1.address);
    const mintedAmount = ethers.parseUnits("10", 18); // 10 tokens in 10^18 units
    expect(finalBalance - initialBalance).to.equal(mintedAmount);
  });
});
