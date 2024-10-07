import { gql } from '@apollo/client';

export const GET_CLAIMS = gql`
  query {
    claims(memberId: "M001") {
      claimStatus
      medicationName
      claimId
      claimDate
      medicationCost
      planPaid
      memberPaid
    }
  }
`;
