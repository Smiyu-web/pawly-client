import { gql } from "@apollo/client";

export const CREATE_WEIGHT_MUTATION = gql`
  mutation Weight($weightNum: Float!, $day: String!, $updateWeightNum: Float!) {
    addWeight(weightNum: $weightNum) {
      id
      weightNum
      day
      createdAt
    }
  }
`;

// updateWeight(day: $day, updateWeightNum: $updateWeightNum) {
//   id
//   weightNum
//   day
//   createdAt
// }
