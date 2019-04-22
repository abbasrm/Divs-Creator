import React, { useState, useEffect } from 'react';
import axios from '../axios/axios';

import r from '../reducer/divs';

const useGetDivs = dep => {
  const [ds, dispatch] = React.useReducer(r, {});
  const [divs, setDivs] = useState([]);
  const [dimensions, setDimensions] = useState([]);

  useEffect(() => {
    axios
      .get('/divs.json')
      .then(data => {
        const divsArr = [];
        const dimensions = [];
        for (let key in data.data) {
          dimensions.push(data.data[key].dimension);
          const item = {
            id: key,
            ...data.data[key],
          };
          divsArr.push(item);
        }
        const uniqueDims = [...new Set(dimensions)];
        //   console.log('divsArr', divsArr);
        dispatch({ type: 'ADD', divs: divsArr, dimensions: uniqueDims });
        setDimensions(uniqueDims);
        setDivs(divsArr);
      })
      .catch(err => console.log(err));
  }, dep);

  return [divs, dimensions];
};

export default useGetDivs;
