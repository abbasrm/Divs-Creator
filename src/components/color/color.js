import React from 'react';
import hexToRgb from '../utility/hexToRgb';

const color = (props) => {

    return (
        <div className="form-group row">
            <div className="col-sm-10">

                <input
                    type="color"
                    id="colorpicker"
                    name="bg"
                    value={props.divParams.color}
                    onChange={(e) => props.onChangeHandler(e, 'color')} />
                <label forhtml="colorpicker" id="label" className="col-sm-2 col-form-label">{hexToRgb(props.divParams.color)[0]}</label>

            </div>
        </div>
    )
}

export default color;