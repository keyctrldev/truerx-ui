import { gql } from '@apollo/client';

const getClaimsQuery = gql`
  query ($memberId: String!) {
    claims(memberId: $memberId) {
      claimId
      claimStatus
      claimDate
      medicationName
    }
  }
`;
export default getClaimsQuery;
