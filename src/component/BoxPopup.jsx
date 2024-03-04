import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const BoxPopup = (props) => {
  const [filterMax, setFilterMax] = useState(80);
  const [filterMin, setFilterMin] = useState(5);
  const navigate=useNavigate()
  const handleFilter=()=>{
    props.togglePopup()
    navigate(`${props.route}/${filterMin}/${filterMax}`)
  }

  return (
    <div>
      {props.showPopup && (
        <div className={`popup ${props.showPopup?'show':" "}`}>
          <div className="popup-content">
            <h2 className='mb-4'>Filter By Price</h2>
            <div className="filter-container">
            <span>min</span>
              <input
                type='range'
                min="1"
                max="100"
                step={1}
                value={filterMin} // Convert filter to integer
                onChange={(e) => setFilterMin(e.target.value )}
              />
              <span>{filterMin}$</span>
            </div>
            <br/>
            <div className="filter-container">
            <span>max</span>
              <input
                type='range'
                min="1"
                max="100"
                step={1}
                value={filterMax} // Convert filter to integer
                onChange={(e) => setFilterMax(e.target.value )}
              />
              <span>{filterMax}$</span>
            </div>
           
            <br/>
            <button onClick={handleFilter} className='btn btn-primary me-3 ps-4 pe-4'  >Filter</button>
            <button className='btn btn-warning ps-4 pe-4' onClick={props.togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxPopup;

