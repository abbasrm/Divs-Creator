import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions/index";

const gallery = props => {
  const [dimension, setDimension] = React.useState("All Dimensions");
  React.useState(() => {
    // Same action as in the edit page
    if (!props.divs.length) {
      props.onDivsInit();
    }
  }, [props.divs]);

  const deleteDiv = id => {
    if (window.confirm("Are you sure to delete?")) {
      props.onDelete(id);
    }
  };

  const styles = d => ({
    backgroundColor: d.bg,
    border: `${d.borderWidth / 10}px ${d.borderType} ${String(d.borderColor)}`,
    height: +d.height,
    width: +d.width,
    borderRadius: `${d.raduis}%`
  });

  const editStyles = d => ({
    backgroundColor: d.color,
    color: d.bg,
    borderRadius: `${d.raduis % 12}px`
  });

  const onDimensionChange = e => {
    setDimension(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 mx-auto mt-4">
          <select onChange={e => onDimensionChange(e)} value={dimension}>
            <option>All Dimensions</option>
            {props.dimensions.map(d => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <div id="test">
            {props.divs.map(d =>
              dimension === d.dimension || dimension === "All Dimensions" ? (
                <div key={d.id} className="divs" style={styles(d)}>
                  <strong>
                    <span style={{ color: d.color }}>
                      {d.height} X {d.width}
                    </span>
                  </strong>
                  <Link
                    to={`/edit/${d.id}`}
                    className="edit"
                    style={editStyles(d)}
                  >
                    Edit
                  </Link>
                  <i onClick={() => deleteDiv(d.id)} className="close" />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    divs: state.divs,
    divParams: state.divParams,
    dimensions: state.dimensions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDivsInit: () => dispatch(actions.divsInit()),
    onDelete: id => dispatch(actions.onDelete(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(gallery);
