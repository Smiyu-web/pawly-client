import { gql } from "@apollo/client";

export const CREATE_WEIGHT_MUTATION = gql`
  mutation Weight($weightNum: Float!) {
    addWeight(weightNum: $weightNum) {
      id
      weightNum
      day
      createdAt
    }
  }
`;

export const UPDATE_WEIGHT_MUTATION = gql`
  mutation Weight($day: String!, $updateWeightNum: Float!) {
    updateWeight(day: $day, updateWeightNum: $updateWeightNum) {
      id
      weightNum
      day
      createdAt
    }
  }
`;
