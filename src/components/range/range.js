import React, { useState } from 'react';

const range = () => {

    const [ range, setRange ] = useState(30)

    return (
        <div className="form-group row">
            {/* <label forhtml="range" className="col-sm-2 col-form-label">Border</label> */}
            <div className="col-sm-10">

                <input
                    type="range"
                    name="border"
                    value={range}
                    id="range"
                    min="10"
                    max="50"
                    step="10"
                    onChange={(e) => setRange(e.target.value)} />
                <label forhtml="range" id="label" className="col-sm-2 col-form-label" style={{ paddingTop: 12}}>{range/10}</label>

            </div>
        </div>
    );
}

export default range;