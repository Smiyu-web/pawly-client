import { gql } from "@apollo/client";

export const LOAD_WEIGHTS = gql`
  query {
    weights {
      id
      weightNum
      day
    }
  }
`;
