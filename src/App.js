import React, { useState, useEffect } from 'react';

import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import Color from './components/color/color';
import Border from './components/border/border';
import Dimension from './components/dimension/dimension'
import axios from './components/axios/axios';
import contrast from './components/utility/contrast';

const app = () => {

  const [divs, setDivs] = useState([]);

  const [ range, setRange ] = useState(30);
  const [ borderColor, setBorderColor ] = useState('#983132');
  const [ type, setType ] = useState('solid');
  const [ radius, setRadius ] = useState('10');
  
  const [ width, setWidth] = useState(175);
  const [ height, setHeight ] = useState(100);

  const [color, setColor] = useState('#e66465');

  useEffect(() => {
    axios.get('/divs.json').then(data => {
      const divsArr = [];
      for (let key in data.data) {
        const item = {
          id: key,
          ...data.data[key]
        }
        divsArr.push(item);
      }
      setDivs(divsArr);
    })
  }, []);


  // Used with first way
  // I prefer this way to present divs though I'm aware in React community it's not recommended
  // to use querySelector due to the way React works by registering (going through) each element
  // in the dom though the parent div is already exist in the dom.

  // useEffect(() => {
  //   const divsContainer = document.querySelector("#test");
  //   divsContainer.innerHTML = '';
  //   divs.forEach(d => {
  //     const div = document.createElement('div');
  //     div.style.backgroundColor = d.bg;
  //     div.style.border = `${d.border}px ${d.borderType} ${String(d.borderColor)}`;
  //     div.style.height = `${d.height}px`;
  //     div.style.width = `${d.width}px`;
  //     div.textContent = `${d.height} X ${d.width}`
  //     div.classList.add('divs');

  //     divsContainer.appendChild(div);
  //   })
  // }, [divs])



  const submitHandler = (e) => {
    const divParams = {
      bg: e.target.elements.bg.value,
      color: contrast(e.target.elements.bg.value),
      border: e.target.elements.border.value / 10,
      height: e.target.elements.height.value,
      width: e.target.elements.width.value,
      borderColor: e.target.elements.borderColor.value,
      borderType: e.target.elements.borderType.value,
      raduis: e.target.elements.raduis.value
    }
    try {
      axios.post('/divs.json', divParams).then(d => {
        const newDivs = [
          ...divs,
          {
            id: d.data.name,
            ...divParams,
          }
        ]
        setDivs(newDivs);
        // Initial state
        setRange(30);
        setBorderColor('#983132');
        setType('solid');
        setRadius('10');
        setWidth(175);
        setHeight(100);
        setColor('#e66465');
      });
    } catch{
      console.error('error')
    }
    e.preventDefault();
  }

  const deleteDiv = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      axios.delete(`/divs/${id}.json`)
      .then(res => {
        const newDivs = divs.filter(d => d.id !== id)
        setDivs(newDivs)
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-4">
          <form onSubmit={submitHandler}>

            <Color
            color={color} 
            setColor={setColor}
            />
            <Border range={range}
            setRange={setRange}
            borderColor={borderColor} 
            setBorderColor={setBorderColor}
            type={type}
            setType={setType}
            radius={radius}
            setRadius={setRadius}/>
            <Dimension width={width}
            setWidth={setWidth}
            height={height}
            setHeight={setHeight}/>

            <div className="form-group row">
              <div className="col-sm-12 col-sm-12 col-sm-12">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </div>

          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5>Live preview</h5>
        <div className="divs" style={{backgroundColor: color, border: `${range/10}px ${type} ${String(borderColor)}`, height: +height, width: +width, borderRadius: `${radius}%`}}>
              <strong><span style={{ color: contrast(color)}}>{height} X {width}</span></strong>
              <i className="close"></i>
            </div>
        </div>
        

          {/* First way, with uncommenting useEffect hook */}
          {/* <div id="test"></div> */}
          
          <hr />
          {/* Second way */}
          <h5>Gallery</h5>
          <div id="test">
            {divs.map(d => <div key={d.id} className="divs" style={{backgroundColor: d.bg, border: `${d.border}px ${d.borderType} ${String(d.borderColor)}`, height: +d.height, width: +d.width, borderRadius: `${d.raduis}%`}}>
              <strong><span style={{ color: d.color}}>{d.height} X {d.width}</span></strong>
              <i onClick={() => deleteDiv(d.id)} className="close"></i>
              </div>)}
          </div>

        </div>
      </div>

    </div>
  );
}

export default app;
