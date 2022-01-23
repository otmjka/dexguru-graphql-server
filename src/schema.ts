import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    chains: ChainConnection!
  }

  type ChainConnection {
    total: Int!
    chains: [Chain]!
  }

  type Chain {
    chain_id: ID!
    name: String!
    description: String!
  }
`;

export { typeDefs };
