import DexGuruSdk from "./DexGuruSdk";
const dexGuruService = new DexGuruSdk();

type ChainRecord = {
  chain_id: string;
  name: string;
  description: string;
};

type ChainsResponse = {
  total: number;
  data: ChainRecord[];
};

const resolvers = {
  Query: {
    chains: async () => {
      const { data, total } =
        (await dexGuruService.getAllChains()) as ChainsResponse;

      return { total, chains: data };
    },
  },
};

export { resolvers };
