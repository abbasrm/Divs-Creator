import * as actionTypes from "../actions/actionTypes";
import { stat } from "fs";

const initParams = {
  borderWidth: 30,
  borderColor: "#983132",
  borderType: "solid",
  radius: 10,
  width: 200,
  height: 100,
  bg: "#e66465"
};

const initialState = {
  divs: [],
  div: false,
  divParams: initParams,
  dimensions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_DIVS:
      return {
        ...state,
        divs: action.divs,
        dimensions: action.dimensions
      };
    case actionTypes.GET_DIV:
      return {
        ...state,
        div: true,
        divParams: action.div
      };
    case actionTypes.PROP_CHANGE_HANDLER:
      const newParams = {
        ...state.divParams,
        [action.target]: action.value
      };
      return {
        ...state,
        divParams: newParams
      };
    case actionTypes.ON_SAVE_EDIT:
      if (state.divs.length) {
        const newDivs = [...state.divs];
        const div = newDivs.filter(d => d.id === action.id)[0];
        const divIndex = newDivs.indexOf(div);
        newDivs[divIndex] = state.divParams;
        return {
          ...state,
          divs: newDivs
        };
      }
      return state;

    case actionTypes.ON_SET_DIV_PARAMS:
      return {
        ...state,
        divParams: action.divParams
      };
    case actionTypes.ON_SAVE:
      return {
        ...state,
        divs: state.divs.concat(action.div),
        dimensions: !state.dimensions.includes(action.div.dimension)?
         state.dimensions.concat(action.div.dimension) : state.dimensions
      };
    case actionTypes.ON_DELETE:
      const newDivs = state.divs.filter(d => d.id !== action.id);
      return {
        ...state,
        divs: newDivs
      };
    case actionTypes.RESET_STATE:
      return {
        ...state,
        divParams: initParams
      };
    default:
      return state;
  }
};

export default reducer;
