import { gql } from "@apollo/client";

export const IMAGE_URL =
  "https://elasticbeanstalk-ap-south-1-487328506249.s3.ap-south-1.amazonaws.com/media/";

export const ALL_PRODUCTS = gql`
  query AllProducts {
    products {
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

export const GET_GYM = gql`
  query GetGym($city: String!) {
    gym(city: $city) {
      id
      gym {
        id
        name
      }
      weeklyPrice
      monthlyPrice
      quarterlyPrice
      city
      pincode
      area
      seats
      description
      latitude
      longitude
      address
      rating
      userfeedbackSet {
        id
        userId {
          id
          firstName
          lastName
          image
        }
        rating
        description
      }
      gymimageSet {
        id
        gym {
          id
        }
        image
      }
    }
  }
`;

export const SEARCH_GYMS = gql`
  query SearchGym($keyword: String) {
    searchGym(keyword: $keyword) {
      id
      gym {
        id
        name
      }
      weeklyPrice
      monthlyPrice
      quarterlyPrice
      city
      pincode
      area
      seats
      description
      latitude
      longitude
      rating
      address
      userfeedbackSet {
        id
        userId {
          id
          firstName
          lastName
          image
        }
        rating
        description
      }
      gymimageSet {
        id
        gym {
          id
        }
        image
      }
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

export const SHOW_USER_FEEDBACKS = gql`
  query ShowUserFeedbacks($gymid: String!) {
    userFeedbacks(gymid: $gymid) {
      id
      userId {
        id
      }
      madeTo {
        id
      }
      rating
      description
    }
  }
`;

export const SEARCH_PRODUCT = gql`
  query SearchProduct($search: String!) {
    searchProduct(search: $search) {
      id
      title
      image
      description
      discountedPrice
      basePrice
    }
  }
`;

export const ALL_GYMS = gql`
  query AllGyms($city: String!) {
    gym(city: $city) {
      id
      gym {
        id
        name
      }
      weeklyPrice
      monthlyPrice
      quarterlyPrice
      city
      pincode
      area
      seats
      description
      latitude
      longitude
      rating
      address
      userfeedbackSet {
        id
        userId {
          id
          firstName
          lastName
          image
        }
        rating
        description
      }
      gymimageSet {
        id
        gym {
          id
        }
        image
      }
    }
  }
`;

export const GET_DETAIL = gql`
  query getDetail($id: String!) {
    gymDetail(id: $id) {
      id
      gym {
        id
        name
        counter
      }
      trainers {
        id
        name
        experience
        certified
      }
      machines {
        id
        machine {
          id
          name
          image
        }
      }
      weeklyPrice
      monthlyPrice
      quarterlyPrice
      discountSet {
        id
        discType
        discPer
        conspetype
        noOfBookings
        leftbookings
      }
      city
      pincode
      area
      seats
      description
      latitude
      longitude
      rating
      address
      userfeedbackSet {
        id
        userId {
          id
          firstName
          lastName
          image
        }
        rating
        description
      }
      gymimageSet {
        id
        gym {
          id
        }
        image
      }
    }
  }
`;

export const CITY_GYMS = gql`
  query CityGyms($city: String!) {
    gym(city: $city) {
      id
      gym {
        id
        name
      }
      weeklyPrice
      monthlyPrice
      quarterlyPrice
      city
      pincode
      area
      seats
      description
      latitude
      longitude
      rating
      address
      userfeedbackSet {
        id
        userId {
          id
          firstName
          lastName
          image
        }
        rating
        description
      }
      gymimageSet {
        id
        gym {
          id
        }
        image
      }
    }
  }
`;

export const ADD_MAIL = gql`
  mutation MailUs(
    $email: String!
    $message: String!
    $name: String!
    $title: String!
    $mobile: String!
  ) {
    addMail(
      email: $email
      message: $message
      name: $name
      title: $title
      mobile: $mobile
    ) {
      myMail {
        id
        name
        email
        message
        title
        mobile
      }
    }
  }
`;

export const PRODUCT_CATEGORY = gql`
  query Category {
    category {
      id
      categoryName
    }
  }
`;

export const PRODUCTS = gql`
  query Products($category: String) {
    products(category: $category) {
      id
      title
      image
      description
      basePrice
      discountedPrice
      discountValue
    }
  }
`;
