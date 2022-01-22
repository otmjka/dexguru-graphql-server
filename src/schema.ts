import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    chains: ChainConnection!
  }

  type ChainConnection {
    chains: [Chain]!
  }

  type Chain {
    id: ID!
    chain_id: Int!
    name: String!
    description: String!
  }
`;

export { typeDefs };
