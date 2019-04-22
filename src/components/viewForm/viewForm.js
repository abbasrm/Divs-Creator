import React from "react";

import Background from "../background/background";
import Border from "../border/border";
import Dimension from "../dimension/dimension";
import LivePreview from "../livePreview/livePreview";
import DivsContext from '../contexts/divsContext';
import contrast from "../utility/contrast";
import r from '../reducer/divs'

const viewForm = props => {
  const context = React.useContext(DivsContext);
  const [ds, dispatch] = React.useReducer(r);

  const submitHandler = (e) => {
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
    context.updateDivs([...context.divs, divParams])
    e.preventDefault()
  }

  console.log('context', context)
  console.log('r', ds)
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-4">
        <form onSubmit={submitHandler}>
          <h5>Background</h5>
          <Background />
          <hr />
          <h5>Border</h5>
          <Border />
          <hr />
          <h5>Dimensions</h5>
          <Dimension />
          <hr />

          <div className="form-group row">
            <div className="col-sm-12 col-sm-12 col-sm-12">
              <button type="submit" className="btn btn-primary d-block mx-auto">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <LivePreview />
    </div>
  );
};

export default viewForm;
