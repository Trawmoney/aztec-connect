export function getEarliestBlock(chainId: number) {
  switch (chainId) {
    case 1:
      return { earliestBlock: 14728000, chunk: 100000, offchainSearchLead: 6 * 60 * 24 };
    case 0xa57ec:
    case 0xe2e:
      return { earliestBlock: 15525911, chunk: 10, offchainSearchLead: 10 };
    case 1337:
      return { earliestBlock: 0, chunk: 10, offchainSearchLead: 10 };
    default:
      return { earliestBlock: 0, chunk: 100000, offchainSearchLead: 6 * 60 * 24 };
  }
}
