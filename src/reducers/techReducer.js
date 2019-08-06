import { GET_TECHS, ADD_TECH, TECHS_ERROR, DELETE_TECH } from "../actions/types";

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
    case ADD_TECH:
      return {
        ...state,
        loading: false,
        techs: [
          ...state.techs,
          action.payload
        ],
      }
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      }
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      }
  }
}