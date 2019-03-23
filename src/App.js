import React, { useState } from 'react';
import hexToRgb from './components/utility/hexToRgb';

import './assets/css/App.css';
import './assets/css/bootstrap.min.css';

const app = () => {

  const [color, setColor] = useState('#e66465')

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-4">
          <form>

            <div className="form-group row">
              <div className="col-sm-10">
                <input type="color" id="color" name="head" value="#e66465" onChange={(e) => setColor(hexToRgb(e.target.value))} />
                <label for="color" className="col-sm-2 col-form-label">{color}</label>
              </div>
            </div>

            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>

            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default app;
