import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
query AllProducts {
    products{
     id
      title
      image
      description
      discountedPrice
      basePrice 
    }
  }
`;

export const LANDING_IMAGE = gql`
query LandingImage {
    landingImage {
      id
      title
      image
    }
  }
`;

export const GET_GYMS = gql`
  query GetGyms($city: String!) {
    gym(city: $city) {
      id
      gym {
        name
      }
      city
      pincode
      area
      seats
      description
      basePrice
      discountedPrice
      latitude
      longitude
      rating
    }
  }
`;

export const GET_TOKEN_AUTH = gql`
  mutation GetTokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;

