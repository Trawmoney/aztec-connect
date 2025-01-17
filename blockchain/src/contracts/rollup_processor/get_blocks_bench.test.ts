import { RollupProcessor } from './rollup_processor';
import { JsonRpcProvider } from '../../provider';
import { EthAddress } from '@aztec/barretenberg/address';

const { ETHEREUM_HOST = 'http://localhost:9545' } = process.env;

// This is not an actual unit test, rather for benchmarking the block fetching code. Skip it under normal execution.
describe.skip('contract tests', () => {
  let contract: RollupProcessor;

  before(() => {
    const ethereumProvider = new JsonRpcProvider(ETHEREUM_HOST);
    contract = new RollupProcessor(
      EthAddress.fromString('0x737901bea3eeb88459df9ef1be8ff3ae1b42a2ba'),
      ethereumProvider,
    );
  });

  it('should get blocks', async () => {
    let start = new Date().getTime();
    const result = await contract.getRollupBlocksFrom(0, 1);
    console.log(`${result.length} results in ${new Date().getTime() - start}ms`);
    let last = result[result.length - 1].rollupId;
    for (let i = 0; i < 10; i++) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      start = new Date().getTime();
      const result = await contract.getRollupBlocksFrom(last + 1, 1);
      console.log(`${result.length} results in ${new Date().getTime() - start}ms`);
      if (result.length) {
        last = result[result.length - 1].rollupId;
      }
    }
  });
});
