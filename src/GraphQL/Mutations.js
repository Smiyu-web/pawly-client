import { gql } from "@apollo/client";

export const CREATE_WEIGHT_MUTATION = gql`
  mutation Weight($weightNum: Float!) {
    addWeight(weightNum: $weightNum) {
      id
    }
  }
`;
