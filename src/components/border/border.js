import React, { useState, useEffect } from 'react';

const range = () => {

    const [ range, setRange ] = useState(30);
    const [ color, setColor ] = useState('#983132');
    const [ type, setType ] = useState('solid');
    const [ radius, setRadius ] = useState('10');

    useEffect(() => {
        setColor('#983132')
    }, []);

    return (
        <>
            <div className="form-group row">
                {/* <label forhtml="range" className="col-sm-2 col-form-label">Border</label> */}
                <div className="col-sm-8">

                    <input
                        type="range"
                        name="border"
                        value={range}
                        id="range"
                        min="10"
                        max="50"
                        step="10"
                        onChange={(e) => setRange(e.target.value)} />
                    <label forhtml="range" id="label" className="col-sm-2 col-form-label" style={{ paddingTop: 12 }}>{range / 10}</label>

                </div>
                <div className="col-sm-4 center-items">
                    <input
                        type="color"
                        id="borderColor"
                        name="borderColor"
                        value={color}
                        style={{ width: 40 }}
                        onChange={e => setColor(e.target.value)} />
                </div>

            </div>
            <div className="form-group row">
                <div className="col-sm-8">

                    <input
                        type="range"
                        name="raduis"
                        value={radius}
                        id="raduis"
                        min="0"
                        max="20"
                        onChange={(e) => setRadius(e.target.value)} />

                    <label forhtml="raduis" id="label" className="col-sm-2 col-form-label" style={{ paddingTop: 12 }}>{radius} %</label>

                </div>
                <div className="col-sm-4 center-items">
                    <select onChange={e => setType(e.target.value)} name="borderType" id="borderType" value={type}>
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