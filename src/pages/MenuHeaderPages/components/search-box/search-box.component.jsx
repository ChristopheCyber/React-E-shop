import React from 'react';

import './search-box.styles.css';
/*destructuring object-prop entered*/
export const SearchBox = ({ propPlaceHolder, handleChangeFct }) => (
  <input
    className='search-box'
    type='search'
    name="search1"
    //destructuring obj entered into 2 objs
    placeholder={propPlaceHolder}
    onChange={handleChangeFct}
  />
);

/*no destructuring prop entered, classic affectation
export const SearchBox = (prop1) => (
  <input
    className='search-box'
    type='search'
    name="search1"
    placeHolder={prop1.propPlaceHolder}
    onChange={prop1.handleChangeFct}
  />
);*/
