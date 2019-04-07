import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/index";
import ViewForm from "../viewForm/viewForm";
import Spinner from "../spinner/spinner";

const edit = props => {
  let div1 = props.divs.filter(d => d.id == props.match.params.id)[0];

  useState(() => {
    // What's crucial in this condition is when navigating to the edit page from the home page
    // we will have all the divs in the redux storage so no need fetch the existing div from
    // the database but it will be fetched from the redux storage otherwise
    // (if we refresh or navigate directly to edit some div by its edit link) make a fetch it
    // from the database
    if (props.divs.length) {
      props.onSetDivParams(div1);
    } else {
      props.onGetDiv(props.match.params.id);
    }
  }, []);

  const submitHandler = e => {
    props.onSaveEdit(props.match.params.id, props.divParams);
    e.preventDefault();
  };

  let content = <Spinner />;

  if (div1 || props.div) {
    content = <ViewForm submitHandler={submitHandler} />;
  }

  return <div className="container">{content}</div>;
};

const mapStateToProps = state => {
  return {
    divs: state.divs,
    div: state.div,
    divParams: state.divParams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetDiv: id => dispatch(actions.getDiv(id)),
    onPropChange: (target, value) =>
      dispatch(actions.propChangeHandler(target, value)),
    onSaveEdit: (id, divParams) => dispatch(actions.onSaveEdit(id, divParams)),
    onSetDivParams: divParams => dispatch(actions.onSetDivParams(divParams))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(edit);
