import React, { useState, useEffect } from 'react';
import hexToRgb from '../utility/hexToRgb';


const color = () => {

    const [color, setColor] = useState('#e66465');

    useEffect(() => {
        setColor('#e66465')
    }, []);

    const onColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className="form-group row">
            <div className="col-sm-10">

                <input
                    type="color"
                    id="colorpicker"
                    name="bg"
                    value={color}
                    onChange={onColorChange} />
                <label forhtml="colorpicker" id="label" className="col-sm-2 col-form-label">{hexToRgb(color)[0]}</label>

            </div>
        </div>
    )
}

export default color;