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

export const GET_POST = gql`
  query {
    post(id: 1) {
      id
      title
      body
    }
  }
`;

export const CREATE_POST = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export const UPDATE_POST = gql`
  mutation ($input: UpdatePostInput!) {
    updatePost(id: 1, input: $input) {
      id
      body
    }
  }
`;

export const DELETE_POST = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;
