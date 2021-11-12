import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Nut Token', function () {
  it('It should return name of the token', async function () {
    const NutToken = await ethers.getContractFactory('NutToken');
    const nutToken = await NutToken.deploy(100000000);
    expect(await nutToken.name()).to.equal('Nut Token');
  });
  it('Should transfer 10,000 token to the another account', async function () {
    const NutToken = await ethers.getContractFactory('NutToken');
    const nutToken = await NutToken.deploy(100000000);

    const [owner, addr1] = await ethers.getSigners();

    const ownerAddress = await owner.getAddress();
    const address1 = await addr1.getAddress();

    await nutToken.transfer(address1, 10000);
    expect(await nutToken.balanceOf(address1)).to.equal(10000);
    expect(await nutToken.balanceOf(ownerAddress)).to.equal(100000000 - 10000);
  });
});
