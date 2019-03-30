import React, { useState } from 'react';

const dimension = (props) => {

    // const [ width, setWidth] = useState(175);
    // const [ height, setHeight ] = useState(100);

    return (
        <div className="form-group row">

            <label forhtml="width" className="col-sm-1 col-form-label" style={{marginRight: 5}}>Width: </label>
            <div className="col-sm-3">
                {/* <input
                    type="text"
                    name="width"
                    value={width}
                    className="form-control"
                    id="width"
                    placeholder="Width"
                    onChange={(e) => setWidth(e.target.value)} /> */}
                    <input
                        type="range"
                        name="width"
                        value={props.width}
                        id="width"
                        min="150"
                        max="200"
                        style={{ width: 100}}
                        onChange={(e) => props.setWidth(e.target.value)} />
            </div>

            <label forhtml="height" className="col-sm-1 col-form-label" style={{marginRight: 10}}>Height: </label>
            <div className="col-sm-3">
                {/* <input
                    type="text"
                    name="height"
                    value={height}
                    className="form-control"
                    id="height"
                    placeholder="Height"
                    onChange={(e) => setHeight(e.target.value)} /> */}
                    <input
                        type="range"
                        name="height"
                        value={props.height}
                        id="height"
                        min="50"
                        max="150"
                        style={{ width: 100}}
                        onChange={(e) => props.setHeight(e.target.value)} />
            </div>

            <label id="label" className="col-sm-2 col-form-label">{`${props.width} X ${props.height}`}</label>

        </div>
    )
};

export default dimension;