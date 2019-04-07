import React from "react";
import { connect } from "react-redux";

import contrast from "../utility/contrast";

const livePreview = props => {
  const {
    borderWidth,
    borderColor,
    borderType,
    radius,
    width,
    height,
    bg
  } = props.divParams;

  const styles = {
    backgroundColor: bg,
    border: `${borderWidth / 10}px ${borderType} ${String(borderColor)}`,
    height: +height,
    width: +width,
    borderRadius: `${radius}%`
  };

  return (
    <div className="preview">
      <h5>Live preview</h5>
      <div className="divs" style={styles}>
        <strong>
          <span style={{ color: contrast(bg) }}>
            {height} X {width}
          </span>
        </strong>
        <i className="close" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    divParams: state.divParams
  };
};

export default connect(mapStateToProps)(livePreview);
