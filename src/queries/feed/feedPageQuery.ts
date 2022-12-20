import { gql } from '@apollo/client';

export const feedPageQuery = gql`
  query {
    iVisits(sort: ["createdAt:desc"], pagination: { limit: 5 }) {
      data {
        id
        attributes {
          uri
          title
          subtitle
          description
          minutes
        }
      }
    }
  }
`;
