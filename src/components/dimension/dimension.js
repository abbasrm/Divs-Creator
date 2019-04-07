import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

const dimension = props => {
  return (
    <div className="form-group row">
      <label
        forhtml="width"
        className="col-sm-1 col-form-label center-items"
        style={{ marginRight: 5 }}
      >
        Width:{" "}
      </label>
      <div className="col-sm-3">
        <input
          type="range"
          name="width"
          value={props.divParams.width}
          id="width"
          min="150"
          max="250"
          step="10"
          style={{ width: 100 }}
          onChange={e => props.onPropChange(e.target.value, "width")}
        />
      </div>

      <label
        forhtml="height"
        className="col-sm-1 col-form-label center-items"
        style={{ marginRight: 10 }}
      >
        Height:{" "}
      </label>
      <div className="col-sm-3">
        <input
          type="range"
          name="height"
          value={props.divParams.height}
          id="height"
          min="50"
          max="150"
          step="10"
          style={{ width: 100 }}
          onChange={e => props.onPropChange(e.target.value, "height")}
        />
      </div>

      <label id="label" className="col-sm-2 col-form-label center-items">{`${
        props.divParams.width
      } X ${props.divParams.height}`}</label>
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
)(dimension);
