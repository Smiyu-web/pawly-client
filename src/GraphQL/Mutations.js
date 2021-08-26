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
  mutation Weight($id: ID!, $updateWeightNum: Float!) {
    updateWeight(id: $id, updateWeightNum: $updateWeightNum) {
      id
      weightNum
      day
      createdAt
    }
  }
`;

export const DELETE_WEIGHT_MUTATION = gql`
  mutation Weight($id: ID!) {
    deleteWeight(id: $id) {
      id
    }
  }
`;
