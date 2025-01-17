import { ContractFactory, Signer } from 'ethers';
import PermitHelper from '../../artifacts/contracts/periphery/PermitHelper.sol/PermitHelper.json';
import { EthAddress } from '@aztec/barretenberg/address';

export async function deployPermitHelper(signer: Signer, rollupAddress: EthAddress) {
  console.error('Deploying permit helper...');
  const permitHelperFactory = new ContractFactory(PermitHelper.abi, PermitHelper.bytecode, signer);
  const permitHelper = await permitHelperFactory.deploy(rollupAddress.toString());
  console.error(`PermitHelper contract address: ${permitHelper.address}.`);

  return permitHelper;
}
