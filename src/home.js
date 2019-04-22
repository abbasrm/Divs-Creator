import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from './components/actions/index';
import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import ViewForm from './components/viewForm/viewForm';
import DivsContext from './components/contexts/divsContext';
import r from './components/reducer/divs';
import axios from './components/axios/axios';
import useGetDivs from './components/customHooks/useGetDivs';

const home = props => {
  // const [divs, setDivs] = useState([]);
  
  const [divs, dimensions] = useGetDivs([]);
  const [ds, dispatch] = React.useReducer(r, {});
  
  const updateDivs = (divs, dimensions) => {
    dispatch({ type: 'ADD', divs, dimensions });
  };
  useEffect(() => {
    dispatch({ type: 'ADD', divs, dimensions });
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

  console.log('rr', ds)
  return (
    <DivsContext.Provider
      value={{
        payload: divs, dimensions,
        updateDivs: divs => updateDivs(divs),
      }}
    >
      <div className="container">
        <ViewForm submitHandler={submitHandler} />
      </div>
    </DivsContext.Provider>
  );
};

const mapStateToProps = state => {
  return {
    divs: state.divs,
    divParams: state.divParams,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDivsInit: () => dispatch(actions.divsInit()),
    onSave: e => dispatch(actions.onSave(e)),
    onResetState: () => dispatch(actions.resetState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
