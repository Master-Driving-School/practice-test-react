import { gql } from '@apollo/client';

export const SIGNIN_EMPLOYEE = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      employee {
        username
        password
      }
    }
  }
`;