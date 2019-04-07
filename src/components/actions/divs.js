import * as actionTypes from "./actionTypes";
import axios from "../axios/axios";
import contrast from "../utility/contrast";

const onDivsInit = (divs, dimensions) => {
  return {
    type: actionTypes.INITIAL_DIVS,
    divs,
    dimensions
  };
};

export const divsInit = () => {
  return dispatch => {
    axios
      .get("/divs.json")
      .then(data => {
        const divsArr = [];
        const dimensions = [];
        for (let key in data.data) {
          dimensions.push(data.data[key].dimension)
          const item = {
            id: key,
            ...data.data[key]
          };
          divsArr.push(item);
        }
        const uniqueDims = [...new Set(dimensions)]
        console.log(uniqueDims)
        dispatch(onDivsInit(divsArr, uniqueDims));
      })
      .catch(err => console.log(err));
  };
};

const onGetDiv = div => {
  return {
    type: actionTypes.GET_DIV,
    div
  };
};

export const getDiv = id => {
  return dispatch => {
    axios
      .get(`/divs/${id}.json`)
      .then(res => {
        dispatch(onGetDiv(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const propChangeHandler = (value, target) => {
  return {
    type: actionTypes.PROP_CHANGE_HANDLER,
    target,
    value
  };
};

const initSaveEdit = id => {
  return {
    type: actionTypes.ON_SAVE_EDIT,
    id
  };
};

export const onSaveEdit = (id, divParams) => {
  return dispatch => {
    axios.patch(`/divs/${id}.json`, divParams).then(res => {
      dispatch(initSaveEdit(id));
    });
  };
};

export const onSetDivParams = divParams => {
  return {
    type: actionTypes.ON_SET_DIV_PARAMS,
    divParams
  };
};

const initOnSave = div => {
  return {
    type: actionTypes.ON_SAVE,
    div
  };
};

export const onSave = e => {
  return dispatch => {
    const divParams = {
      bg: e.target.elements.bg.value,
      color: contrast(e.target.elements.bg.value),
      borderWidth: +e.target.elements.border.value,
      borderColor: e.target.elements.borderColor.value,
      borderType: e.target.elements.borderType.value,
      height: +e.target.elements.height.value,
      width: +e.target.elements.width.value,
      raduis: +e.target.elements.raduis.value,
      dimension: `${e.target.elements.width.value} x ${e.target.elements.height.value}`
    };
    try {
      axios.post("/divs.json", divParams).then(res => {
        const newDiv = {
          id: res.data,
          ...divParams
        };
        dispatch(initOnSave(newDiv));
      });
    } catch {
      console.error("error");
    }
  };
};

const initOnDelete = id => {
  return {
    type: actionTypes.ON_DELETE,
    id
  };
};

export const onDelete = id => {
  return dispatch => {
    axios
      .delete(`/divs/${id}.json`)
      .then(res => {
        dispatch(initOnDelete(id));
      })
      .catch(err => console.log(err));
  };
};

export const resetState = () => {
  return {
    type: actionTypes.RESET_STATE
  };
};
