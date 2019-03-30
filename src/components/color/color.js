import React, { useState, useEffect } from 'react';
import hexToRgb from '../utility/hexToRgb';


const color = (props) => {

    // const [color, setColor] = useState('#e66465');

    const onColorChange = (e) => {
        props.setColor(e.target.value)
    }

    return (
        <div className="form-group row">
            <div className="col-sm-10">

                <input
                    type="color"
                    id="colorpicker"
                    name="bg"
                    value={props.color}
                    onChange={onColorChange} />
                <label forhtml="colorpicker" id="label" className="col-sm-2 col-form-label">{hexToRgb(props.color)[0]}</label>

            </div>
        </div>
    )
}

export default color;