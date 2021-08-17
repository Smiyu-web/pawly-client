import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation Weight($weightNum: String!) {
    addWeight(weightNum: $weightNum) {
      id
    }
  }
`;
