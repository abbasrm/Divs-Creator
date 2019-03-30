import React from 'react';

const range = (props) => {
    return (
        <>
            <div className="form-group row">
                {/* <label forhtml="range" className="col-sm-2 col-form-label">Border</label> */}
                <div className="col-sm-9">

                    <input
                        type="range"
                        name="border"
                        value={props.divParams.range}
                        id="range"
                        min="10"
                        max="50"
                        step="10"
                        onChange={(e) => props.onChangeHandler(e, 'range')} />
                    <label forhtml="range" id="label" className="col-sm-2 col-form-label" style={{ paddingTop: 12 }}>{props.divParams.range / 10}</label>

                </div>
                <div className="col-sm-3 center-items">
                    <input
                        type="color"
                        id="borderColor"
                        name="borderColor"
                        value={props.divParams.borderColor}
                        style={{ width: 40 }}
                        onChange={e => props.onChangeHandler(e, 'borderColor')} />
                </div>

            </div>
            <div className="form-group row">
                <div className="col-sm-9">

                    <input
                        type="range"
                        name="raduis"
                        value={props.divParams.radius}
                        id="raduis"
                        min="0"
                        max="20"
                        onChange={(e) => props.onChangeHandler(e, 'radius')} />

                    <label forhtml="raduis" id="label" className="col-sm-2 col-form-label" style={{ paddingTop: 12 }}>{props.divParams.radius} %</label>

                </div>
                <div className="col-sm-3 center-items">
                    <select onChange={e => props.onChangeHandler(e, 'type')} name="borderType" id="borderType" value={props.divParams.type}>
                        <option value="solid">Solid</option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                        <option value="double">Double</option>
                        <option value="groove">Groove</option>
                        <option value="ridge">Ridge</option>
                        <option value="inset">Inset</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default range;