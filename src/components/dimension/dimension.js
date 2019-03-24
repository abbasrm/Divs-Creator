import React, { useState } from 'react';

const dimension = () => {

    const [ width, setWidth] = useState(200);
    const [ height, setHeight ] = useState(100)

    return (
        <div className="form-group row">

            <label forhtml="width" className="col-sm-1 col-form-label" style={{marginRight: 5}}>Width: </label>
            <div className="col-sm-3">
                <input
                    type="text"
                    name="width"
                    value={width}
                    className="form-control"
                    id="width"
                    placeholder="Width"
                    onChange={(e) => setWidth(e.target.value)} />
            </div>

            <label forhtml="height" className="col-sm-1 col-form-label" style={{marginRight: 10}}>Height: </label>
            <div className="col-sm-3">
                <input
                    type="text"
                    name="height"
                    value={height}
                    className="form-control"
                    id="height"
                    placeholder="Height"
                    onChange={(e) => setHeight(e.target.value)} />
            </div>

            <label id="label" className="col-sm-2 col-form-label">{`${width} X ${height}`}</label>

        </div>
    )
};

export default dimension;