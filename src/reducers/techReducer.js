import { GET_TECHS } from "../actions/types";

const initialState = {
  techs: null,
  error: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      }
  }
}