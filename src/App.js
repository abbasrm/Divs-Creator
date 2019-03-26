import React, { useState } from 'react';

import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import Color from './components/color/color'
import Range from './components/range/range'
import Dimension from './components/dimension/dimension'

const app = () => {

  const submitHandler = (e) => {
    const divParams = {
      bg: e.target.elements.bg.value,
      border: e.target.elements.border.value/10,
      height: e.target.elements.height.value,
      width: e.target.elements.width.value,
      borderColor: e.target.elements.borderColor.value,
      borderType: e.target.elements.borderType.value
    }
    const div = document.createElement('div');

    div.style.backgroundColor = divParams.bg;
    div.style.border = `${divParams.border}px ${divParams.borderType} ${String(divParams.borderColor)}`;
    div.style.height = `${divParams.height}px`;
    div.style.width = `${divParams.width}px`;
    div.textContent = `${divParams.height} X ${divParams.width}`
    div.classList.add('divs')

    document.querySelector("#test").appendChild(div);
    console.log('div', `${divParams.border}px ${divParams.borderType} ${divParams.borderColor}`)
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-4">
          <form onSubmit={submitHandler}>

            <Color />
            <Range />
            <Dimension />

            <div className="form-group row">
              <div className="col-sm-12 col-sm-12 col-sm-12">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div id="test"></div>
        </div>
      </div>

    </div>
  );
}

export default app;
