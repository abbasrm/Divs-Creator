import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "./components/actions/index";
import "./assets/css/App.css";
import "./assets/css/bootstrap.min.css";
import ViewForm from "./components/viewForm/viewForm";

const home = props => {
  useEffect(() => {
    props.onDivsInit();
  }, []);

  useEffect(() => {
    // To clear what's in the store after visiting the edit div page then nanigating
    // back to the homepage as they are sharing the same divParams object
    props.onResetState();
  }, [props.div]);

  const submitHandler = e => {
    props.onSave(e);
    e.preventDefault();
  };

  return (
    <div className="container">
      <ViewForm submitHandler={submitHandler} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    divs: state.divs,
    divParams: state.divParams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDivsInit: () => dispatch(actions.divsInit()),
    onSave: e => dispatch(actions.onSave(e)),
    onResetState: () => dispatch(actions.resetState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
