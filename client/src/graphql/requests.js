import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
query AllProducts {
    products{
     id
      title
      image
      discountedPrice
      basePrice 
    }
  }
`;

export const ALL_IMAGE = gql`
query AllImage {
    landingImage {
      id
      title
      image
    }
  }
`;

export const ALL_GYMS = gql`
query AllGyms($city: String) {
    gym(city: $city) {
     id
     rating
     address
     city
     state
     area
     description
     gymimageSet{
       id
      image
     }
    }
   }
`;


