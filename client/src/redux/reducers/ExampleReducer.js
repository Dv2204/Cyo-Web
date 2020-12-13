import { EXAMPLE_ACTION } from "../types";

const initialState = {
  user: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        user: "piyaaaaaaaa",
      };
    default:
      return state;
  }
};