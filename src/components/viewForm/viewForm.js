import React from "react";

import Background from "../background/background";
import Border from "../border/border";
import Dimension from "../dimension/dimension";
import LivePreview from "../livePreview/livePreview";

const viewForm = props => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-4">
        <form onSubmit={props.submitHandler}>
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
