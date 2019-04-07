import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import hexToRgb from "../utility/hexToRgb";

const background = props => {
  return (
    <div className="form-group row">
      <div className="col-sm-10">
        <input
          type="color"
          id="colorpicker"
          name="bg"
          value={props.divParams.bg}
          onChange={e => props.onPropChange(e.target.value, "bg")}
        />
        <label
          forhtml="colorpicker"
          id="label"
          className="col-sm-2 col-form-label"
        >
          {hexToRgb(props.divParams.bg)[0]}
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    divParams: state.divParams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPropChange: (target, value) =>
      dispatch(actions.propChangeHandler(target, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(background);
